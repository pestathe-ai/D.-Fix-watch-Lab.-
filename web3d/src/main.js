// D. Fix Watch Lab – movimento 3D schematico (originale, generico).
// Coordinate di progetto: spazio 1000x1000 visto dal lato quadrante (corona a destra),
// le stesse del disegno 2D (lib/art/scene.dart).
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import polygonClipping from 'polygon-clipping';

const TAU = Math.PI * 2;
const S = 0.1;
const X3 = (x) => -(x - 500) * S;
const Z3 = (y) => (y - 500) * S;

function send(o) {
  try {
    if (window.Bridge && window.Bridge.postMessage) window.Bridge.postMessage(JSON.stringify(o));
    else (window.__msgs = window.__msgs || []).push(o);
  } catch (e) { /* ignora */ }
}

// ------------------------------------------------------------------ geometria 2D
const polar = (c, r, a) => [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)];
const circleRing = (c, r, n = 48) => {
  const pts = [];
  for (let i = 0; i < n; i++) pts.push(polar(c, r, (i / n) * TAU));
  return pts;
};
const circle = (c, r, n = 48) => [circleRing(c, r, n)];
const poly = (pts) => [pts];
function isPolygon(g) { return typeof g[0][0][0] === 'number'; }
function toMP(g) { return isPolygon(g) ? [g] : g; }
function union(...gs) { return polygonClipping.union(...gs.map(toMP)); }
function diff(a, ...b) { return polygonClipping.difference(toMP(a), ...b.map(toMP)); }
function taper(a, b, wa, wb) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 1;
  const nx = -dy / L, ny = dx / L;
  const quad = [
    [a[0] + (nx * wa) / 2, a[1] + (ny * wa) / 2],
    [b[0] + (nx * wb) / 2, b[1] + (ny * wb) / 2],
    [b[0] - (nx * wb) / 2, b[1] - (ny * wb) / 2],
    [a[0] - (nx * wa) / 2, a[1] - (ny * wa) / 2],
  ];
  return union([quad], circle(a, wa / 2, 24), circle(b, wb / 2, 24));
}
const bar = (a, b, w) => taper(a, b, w, w);
function gearRing(c, r, teeth, rot = 0, depth = 0) {
  const d = depth > 0 ? depth : Math.max(2, ((r * TAU) / teeth) * 0.45);
  const rr = r - d, pitch = TAU / teeth, pts = [];
  for (let i = 0; i < teeth; i++) {
    const a = rot + i * pitch;
    pts.push(polar(c, rr, a), polar(c, r, a + pitch * 0.18), polar(c, r, a + pitch * 0.42), polar(c, rr, a + pitch * 0.6));
  }
  return pts;
}
function spokeHoles(c, rimR, hubR, spokes, w, rot = 0) {
  const holes = [];
  for (let i = 0; i < spokes; i++) {
    const a1 = rot + (i * TAU) / spokes, a2 = rot + ((i + 1) * TAU) / spokes;
    const dr = Math.asin(Math.min(0.9, w / 2 / rimR)), dh = Math.asin(Math.min(0.9, w / 2 / hubR));
    const pts = [];
    for (let k = 0; k <= 16; k++) pts.push(polar(c, rimR, a1 + dr + ((a2 - dr - (a1 + dr)) * k) / 16));
    for (let k = 0; k <= 6; k++) pts.push(polar(c, hubR, a2 - dh - ((a2 - dh - (a1 + dh)) * k) / 6));
    holes.push(pts);
  }
  return holes;
}
const C0 = [500, 500];
function wheelPoly(r, teeth, spokes = 4) {
  const rings = [gearRing(C0, r, teeth)];
  if (r > 24 && spokes > 0) rings.push(...spokeHoles(C0, r * 0.74, Math.max(r * 0.24, 10), spokes, r * 0.12));
  return rings;
}
function escapePoly(r, teeth = 20) {
  const pitch = TAU / teeth, pts = [];
  for (let i = 0; i < teeth; i++) {
    const a = i * pitch;
    pts.push(polar(C0, r * 0.72, a), polar(C0, r, a + pitch * 0.55), polar(C0, r * 0.9, a + pitch * 0.75));
  }
  return [pts, ...spokeHoles(C0, r * 0.6, r * 0.2, 4, r * 0.14)];
}
const ring = (c, ro, ri, n = 96) => [circleRing(c, ro, n), circleRing(c, ri, n).reverse()];

// ------------------------------------------------------------------ geometria 3D
function mpToShapes(mp) {
  const shapes = [];
  for (const polygon of toMP(mp)) {
    const [outer, ...holes] = polygon;
    const s = new THREE.Shape(outer.map((p) => new THREE.Vector2(X3(p[0]), -Z3(p[1]))));
    for (const h of holes) s.holes.push(new THREE.Path(h.map((p) => new THREE.Vector2(X3(p[0]), -Z3(p[1])))));
    shapes.push(s);
  }
  return shapes;
}
function extrude(mp, y0, h, bevel) {
  const b = bevel ?? Math.min(0.12, h * 0.2);
  const g = new THREE.ExtrudeGeometry(mpToShapes(mp), {
    depth: Math.max(0.02, h - 2 * b),
    bevelEnabled: b > 0,
    bevelThickness: b,
    bevelSize: b * 0.8,
    bevelOffset: -b * 0.8,
    bevelSegments: 2,
    curveSegments: 8,
  });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0 + b, 0);
  return g;
}
function cyl(r, y0, y1, seg = 32, r2) {
  const g = new THREE.CylinderGeometry(r2 ?? r, r, y1 - y0, seg);
  g.translate(0, (y0 + y1) / 2, 0);
  return g;
}

// ------------------------------------------------------------------ texture
function makeTex(w, h, draw, repeat = 1) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
const texStripes = (rough = false) => makeTex(256, 256, (g, w, h) => {
  const img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = ((x + y) % 64) / 64;
    const band = Math.pow(Math.sin(p * Math.PI), 2);
    const v = rough ? 150 - 90 * band + ((x * 7 + y * 13) % 11) : 168 + 84 * band;
    const i = (y * w + x) * 4;
    img.data[i] = v; img.data[i + 1] = v + 2; img.data[i + 2] = v + 6; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
}, 1 / 7);
const texPerlage = (rough = false) => makeTex(256, 256, (g, w, h) => {
  g.fillStyle = rough ? '#8a8a8a' : '#c9ced6'; g.fillRect(0, 0, w, h);
  const step = 32;
  for (let row = -1; row <= h / step + 1; row++) for (let col = -1; col <= w / step + 1; col++) {
    const cx = col * step + (row % 2 ? step / 2 : 0), cy = row * step * 0.87;
    const gr = g.createRadialGradient(cx - 4, cy - 4, 1, cx, cy, 22);
    if (rough) { gr.addColorStop(0, '#404040'); gr.addColorStop(0.6, '#909090'); gr.addColorStop(1, '#6a6a6a'); }
    else { gr.addColorStop(0, '#f2f4f7'); gr.addColorStop(0.55, '#c3c9d2'); gr.addColorStop(1, '#dfe3e9'); }
    g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, 21, 0, TAU); g.fill();
  }
}, 1 / 7);
function texGrain(size) {
  const t = makeTex(512, 512, (g, w, h) => {
    g.fillStyle = '#d8dde4'; g.fillRect(0, 0, w, h);
    for (let r = 4; r < w * 0.72; r += 3) {
      const v = 200 + Math.floor(Math.random() * 50);
      g.strokeStyle = `rgb(${v},${v + 3},${v + 8})`; g.lineWidth = 2;
      g.beginPath(); g.arc(w / 2, h / 2, r, 0, TAU); g.stroke();
    }
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.repeat.set(1 / size, 1 / size);
  t.offset.set(0.5, 0.5);
  return t;
}
const texDial = () => {
  const t = makeTex(1024, 1024, (g, w) => {
    const c = w / 2;
    g.fillStyle = '#fbf8f2'; g.fillRect(0, 0, w, w);
    g.strokeStyle = '#1d2b4a';
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * TAU, big = i % 5 === 0;
      g.lineWidth = big ? 16 : 4;
      g.beginPath();
      g.moveTo(c + Math.cos(a) * (big ? 395 : 440), c + Math.sin(a) * (big ? 395 : 440));
      g.lineTo(c + Math.cos(a) * 470, c + Math.sin(a) * 470);
      g.stroke();
    }
    // finestrella della data a ore 3
    g.fillStyle = '#ffffff'; g.fillRect(c + 300, c - 34, 74, 68);
    g.lineWidth = 4; g.strokeRect(c + 300, c - 34, 74, 68);
    g.fillStyle = '#1d2b4a'; g.font = 'bold 50px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('8', c + 337, c + 2);
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.repeat.set(1, 1);
  return t;
};
const texDateRing = () => {
  const t = makeTex(1024, 1024, (g, w) => {
    const c = w / 2;
    g.fillStyle = '#f4f1ea'; g.fillRect(0, 0, w, w);
    g.fillStyle = '#1d2b4a'; g.font = 'bold 38px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let i = 0; i < 31; i++) {
      const a = (i / 31) * TAU;
      g.save(); g.translate(c + Math.cos(a) * 465, c + Math.sin(a) * 465); g.rotate(a + Math.PI / 2);
      g.fillText(String(i + 1), 0, 0); g.restore();
    }
  });
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.repeat.set(1, 1);
  return t;
};

const texNoise = () => makeTex(256, 256, (g, w, h) => {
  const img = g.createImageData(w, h);
  for (let i = 0; i < w * h; i++) {
    const v = 225 + Math.floor(Math.random() * 30);
    img.data[i * 4] = v; img.data[i * 4 + 1] = v; img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
}, 6);

// ------------------------------------------------------------------ materiali
let TX = null;
function tex() {
  if (!TX) TX = { stripes: texStripes(), stripesR: texStripes(true), perlage: texPerlage(), perlageR: texPerlage(true), grain10: texGrain(21), grain5: texGrain(11), grain42: texGrain(86), dial: texDial(), date: texDateRing() };
  return TX;
}
let HQ = true;
try {
  const q = localStorage.getItem('w3d_quality');
  HQ = q ? q === 'high' : (navigator.hardwareConcurrency || 4) >= 6;
} catch (e) { /* ignora */ }
const std = (o) => new THREE.MeshStandardMaterial(o);
const phys = (o) => (HQ ? new THREE.MeshPhysicalMaterial(o) : std(Object.fromEntries(Object.entries(o).filter(([k]) => !['clearcoat', 'clearcoatRoughness', 'anisotropy', 'anisotropyRotation', 'iridescence', 'iridescenceIOR', 'iridescenceThicknessRange', 'sheen', 'sheenColor', 'sheenRoughness'].includes(k)))));
const MAT = {
  brass: () => phys({ color: 0xd9ad58, metalness: 1, roughness: 0.3, clearcoat: 0.2 }),
  gold: () => phys({ color: 0xe6bd68, metalness: 1, roughness: 0.22, clearcoat: 0.35, clearcoatRoughness: 0.15, anisotropy: 0.35 }),
  steel: () => phys({ color: 0xdfe4ea, metalness: 1, roughness: 0.13, clearcoat: 0.2 }),
  steelMatte: () => phys({ color: 0xc8ced7, metalness: 0.95, roughness: 0.38 }),
  bridge: () => phys({ color: 0xf4f6f9, metalness: 0.95, roughness: 0.3, map: tex().stripes, roughnessMap: tex().stripesR, anisotropy: 0.75, anisotropyRotation: Math.PI / 4, clearcoat: 0.15, clearcoatRoughness: 0.2 }),
  plate: () => phys({ color: 0xd6dbe2, metalness: 0.9, roughness: 0.42, map: tex().perlage, roughnessMap: tex().perlageR }),
  ruby: () => new THREE.MeshPhysicalMaterial({ color: 0xc2185b, metalness: 0, roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.05, emissive: 0x2a0010 }),
  blue: () => phys({ color: 0x2346b5, metalness: 0.85, roughness: 0.2, iridescence: 0.85, iridescenceIOR: 1.8, iridescenceThicknessRange: [220, 620], clearcoat: 0.4 }),
  dark: () => std({ color: 0x141a28, metalness: 0.3, roughness: 0.6 }),
  spring: () => std({ color: 0x6d7c90, metalness: 0.9, roughness: 0.3 }),
  hands: () => std({ color: 0x1d2b4a, metalness: 0.6, roughness: 0.35 }),
  orange: () => std({ color: 0xf28c38, metalness: 0.2, roughness: 0.4, emissive: 0x6a2a00 }),
  grain: (t) => std({ color: 0xffffff, metalness: 0.9, roughness: 0.3, map: t }),
  dial: () => std({ color: 0xffffff, metalness: 0, roughness: 0.55, map: tex().dial }),
  dateRing: () => std({ color: 0xffffff, metalness: 0, roughness: 0.6, map: tex().date }),
  heavy: () => std({ color: 0x9aa1ab, metalness: 0.9, roughness: 0.35 }),
  case: () => phys({ color: 0xe6eaef, metalness: 1.0, roughness: 0.1, clearcoat: 0.5, clearcoatRoughness: 0.08 }),
  oil: () => phys({ color: 0xd9a441, metalness: 0, roughness: 0.03, clearcoat: 1, transparent: true, opacity: 0.85 }),
};
function at(m, pt, y = 0) { m.position.set(X3(pt[0]), y, Z3(pt[1])); return m; }
function mesh(geo, mat, cast = true) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast;
  m.receiveShadow = true;
  return m;
}
function groupAt(pt, y = 0) {
  const g = new THREE.Group();
  g.position.set(X3(pt[0]), y, Z3(pt[1]));
  return g;
}
/// Sposta una geometria disegnata in coordinate assolute così che il gruppo ruoti attorno a pt.
function rel(geo, pt) { geo.translate(-X3(pt[0]), 0, -Z3(pt[1])); return geo; }

function jewel(pt, y, r = 0.9, down = false) {
  const g = groupAt(pt);
  const h = 0.22;
  const y0 = down ? y - h : y;
  g.add(mesh(cyl(r, y0, y0 + h, 32), MAT.ruby(), false));
  g.add(mesh(cyl(r * 0.28, down ? y0 - 0.01 : y0 + 0.01, down ? y0 + h - 0.02 : y0 + h + 0.01, 16), MAT.dark(), false));
  return g;
}

// ------------------------------------------------------------------ costanti (come Geo in Dart)
const G = {
  c: [500, 500], barrel: [640, 330], crownWheel: [780, 410], click: [548, 214],
  center: [500, 500], third: [370, 610], fourth: [470, 705], escape: [580, 730], pallet: [660, 690],
  balance: [760, 640], cockFoot: [815, 728], rev1: [420, 270], rev2: [505, 335],
  slPivot: [820, 405], yokePivot: [790, 610], clutch: [885, 500], windingPinion: [935, 500],
  settingWheel: [860, 572], minuteWheel: [425, 580], dateWheel: [380, 410], jumper: [620, 300],
};
G.forkTip = [G.pallet[0] + (G.balance[0] - G.pallet[0]) * 0.62, G.pallet[1] + (G.balance[1] - G.pallet[1]) * 0.62];
G.entry = polar(G.escape, 52, -2.2);
G.exit = polar(G.escape, 52, 0.55);

const STEM_Y = -3.9;

// ------------------------------------------------------------------ costruzione dei pezzi
const items = {}; // id -> {obj, part, dir, face, cover}
function addItem(id, part, obj, { dir = 1, face = 0, cover = false } = {}) {
  obj.name = id;
  obj.userData = { ...obj.userData, id, part };
  items[id] = { id, obj, part, dir, face, cover, base: { p: obj.position.clone(), q: obj.quaternion.clone() } };
  return obj;
}
const ALIAS = { p_platina: 'platina', q_platina: 'platina', p_stelo: 'stelo', q_stelo: 'stelo', p_cassa: 'cassa', q_cassa: 'cassa' };
const res = (id) => ALIAS[id] || id;

function trainWheel(pt, r, teeth, y, pinR, pinY0, mat = MAT.gold) {
  const g = groupAt(pt);
  g.add(mesh(extrude([wheelPoly(r, teeth)], y, 0.45, 0.06), mat()));
  g.add(mesh(extrude([gearRing(C0, pinR, 10)], pinY0, y - pinY0 + 0.01, 0.04), MAT.steel()));
  g.add(mesh(cyl(r * 0.24 * S, y - 0.05, y + 0.55, 24), mat()));
  g.add(mesh(cyl(0.35, 0, 7.6, 12), MAT.steel()));
  return g;
}

function build(mv) {
  // ===== platina
  {
    const g = new THREE.Group();
    g.add(mesh(extrude(circle(C0, 440, 128), -3, 3, 0.25), MAT.plate()));
    addItem('platina', 'platina', g, { dir: 1, face: 0 });
    mv.add(g);
  }
  // ===== treno
  mv.add(addItem('ruota_centro', 'ruota_centro', (() => {
    const g = trainWheel(G.center, 115, 80, 1.0, 18, 1.45);
    g.add(mesh(cyl(0.35, -8.2, 0, 12), MAT.steel()));
    return g;
  })()));
  mv.add(addItem('ruota_terzo', 'ruota_terzo', trainWheel(G.third, 85, 75, 2.0, 14, 0.6)));
  mv.add(addItem('ruota_secondi', 'ruota_secondi', trainWheel(G.fourth, 72, 70, 3.0, 12, 1.0)));
  mv.add(addItem('ruota_scappamento', 'ruota_scappamento', (() => {
    const g = groupAt(G.escape);
    g.add(mesh(extrude([escapePoly(50)], 3.85, 0.35, 0.04), MAT.steel()));
    g.add(mesh(extrude([gearRing(C0, 9, 8)], 3.0, 0.86, 0.03), MAT.steel()));
    g.add(mesh(cyl(0.35, 0, 7.6, 12), MAT.steel()));
    return g;
  })()));
  // ===== bariletto
  mv.add(addItem('bariletto', 'bariletto', (() => {
    const g = groupAt(G.barrel);
    g.add(mesh(extrude([gearRing(C0, 135, 90)], 0.5, 0.65, 0.06), MAT.gold()));
    g.add(mesh(cyl(12.4, 1.1, 4.4, 64), MAT.gold()));
    g.add(mesh(cyl(12.0, 4.4, 4.75, 64), MAT.brass()));
    g.add(mesh(cyl(2.2, 0, 7.4, 24), MAT.steel()));
    return g;
  })()));
  // ===== ancora
  mv.add(addItem('ancora', 'ancora', (() => {
    const g = groupAt(G.pallet);
    const body = union(taper(G.pallet, G.forkTip, 30, 14), taper(G.pallet, G.entry, 24, 14), taper(G.pallet, G.exit, 24, 14), circle(G.pallet, 18));
    g.add(mesh(rel(extrude(body, 3.85, 0.4, 0.05), G.pallet), MAT.steel()));
    for (const pt of [G.entry, G.exit]) {
      const b = new THREE.BoxGeometry(1.5, 0.6, 0.55);
      const m = mesh(b, MAT.ruby(), false);
      const dx = X3(pt[0]) - X3(G.pallet[0]), dz = Z3(pt[1]) - Z3(G.pallet[1]);
      m.position.set(dx * 1.05, 4.05, dz * 1.05);
      m.rotation.y = -Math.atan2(dz, dx);
      g.add(m);
    }
    g.add(mesh(cyl(0.3, 0, 7.6, 12), MAT.steel()));
    return g;
  })()));
  // ===== bilanciere + spirale
  mv.add(addItem('bilanciere', 'bilanciere', (() => {
    const g = groupAt(G.balance);
    const wheel = [circleRing(C0, 100, 96), ...spokeHoles(C0, 86, 15, 3, 10, 0.4)];
    g.add(mesh(extrude([wheel], 4.7, 0.6, 0.08), MAT.gold()));
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * TAU;
      const sp = mesh(new THREE.SphereGeometry(0.42, 12, 8), MAT.gold());
      sp.position.set(Math.cos(a) * 10.1, 5.0, Math.sin(a) * 10.1);
      g.add(sp);
    }
    g.add(mesh(cyl(0.28, 3.4, 9.6, 12), MAT.steel()));
    g.add(mesh(cyl(2.1, 3.9, 4.25, 32), MAT.steel()));
    const pin = mesh(cyl(0.32, 3.55, 4.3, 12), MAT.ruby(), false);
    const dx = X3(G.pallet[0]) - X3(G.balance[0]), dz = Z3(G.pallet[1]) - Z3(G.balance[1]);
    const L = Math.hypot(dx, dz);
    pin.position.set((dx / L) * 1.6, 0, (dz / L) * 1.6);
    g.add(pin);
    return g;
  })()));
  mv.add(addItem('spirale', 'spirale', (() => {
    const g = groupAt(G.balance);
    const pts = [];
    for (let i = 0; i <= 900; i++) {
      const t = i / 900, a = t * 9 * TAU, r = 1.6 + 4.4 * t;
      pts.push(new THREE.Vector3(Math.cos(a) * r, 5.75, Math.sin(a) * r));
    }
    g.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 1400, 0.05, 5, false), MAT.spring(), false));
    g.add(mesh(cyl(0.9, 5.4, 6.0, 16), MAT.steel()));
    return g;
  })()));
  // ===== ponti
  const trainBridge = union(
    poly([[455, 455], [545, 465], [560, 560], [625, 700], [615, 772], [540, 775], [470, 752], [335, 655], [330, 575], [440, 470]]),
    circle(G.center, 42), circle(G.third, 40), circle(G.fourth, 40), circle(G.escape, 36));
  mv.add(addItem('ponte_treno', 'ponte_treno', (() => {
    const g = new THREE.Group();
    g.add(mesh(extrude(trainBridge, 5.4, 2.0, 0.22), MAT.bridge()));
    for (const pt of [G.center, G.third, G.fourth, G.escape]) g.add(jewel(pt, 7.4, 0.95));
    for (const pt of [[420, 560], [560, 640], [400, 680]]) g.add(at(mesh(cyl(1.6, 0, 5.4, 20), MAT.steelMatte()), pt));
    return g;
  })(), { face: 7.4, cover: true }));
  mv.add(addItem('ponte_ancora', 'ponte_ancora', (() => {
    const g = new THREE.Group();
    g.add(mesh(extrude(bar([G.pallet[0] - 30, G.pallet[1] + 35], [G.pallet[0] + 25, G.pallet[1] - 30], 44), 5.4, 2.0, 0.2), MAT.bridge()));
    g.add(jewel(G.pallet, 7.4, 0.75));
    g.add(at(mesh(cyl(1.4, 0, 5.4, 20), MAT.steelMatte()), [636, 718]));
    return g;
  })(), { face: 7.4, cover: true }));
  const barrelBridge = union(circle(G.barrel, 150, 72), circle(G.crownWheel, 72), poly([[700, 230], [830, 350], [790, 470], [650, 470]]));
  mv.add(addItem('ponte_bariletto', 'ponte_bariletto', (() => {
    const g = new THREE.Group();
    g.add(mesh(extrude(barrelBridge, 5.0, 2.4, 0.22), MAT.bridge()));
    for (const pt of [[520, 240], [760, 250], [705, 455]]) g.add(at(mesh(cyl(1.6, 0, 5.0, 20), MAT.steelMatte()), pt));
    return g;
  })(), { face: 7.4, cover: true }));
  const cock = union(circle(G.balance, 44), taper(G.balance, G.cockFoot, 70, 82));
  mv.add(addItem('ponte_bilanciere', 'ponte_bilanciere', (() => {
    const g = new THREE.Group();
    g.add(mesh(extrude(cock, 7.0, 1.9, 0.2), MAT.bridge()));
    const foot = mesh(cyl(4.0, 0, 7.0, 32), MAT.bridge());
    foot.position.set(X3(G.cockFoot[0]), 0, Z3(G.cockFoot[1]));
    g.add(foot);
    const b = groupAt(G.balance);
    b.add(mesh(cyl(2.3, 8.9, 9.15, 32), MAT.steel()));
    b.add(mesh(cyl(1.2, 9.15, 9.3, 24), MAT.ruby(), false));
    for (const s of [-1, 1]) {
      const wire = mesh(new THREE.TorusGeometry(2.0, 0.09, 6, 24, Math.PI * 0.7), MAT.spring(), false);
      wire.rotation.x = -Math.PI / 2;
      wire.rotation.z = s > 0 ? -0.2 : Math.PI - 1.9;
      wire.position.y = 9.3;
      b.add(wire);
    }
    g.add(b);
    return g;
  })(), { face: 8.9, cover: true }));
  mv.add(addItem('racchetta', 'racchetta', (() => {
    const g = groupAt(G.balance);
    const r = bar([G.balance[0] - 14, G.balance[1] - 14], [G.balance[0] - 82, G.balance[1] - 82], 12);
    g.add(mesh(rel(extrude(r, 8.9, 0.35, 0.05), G.balance), MAT.steel()));
    return g;
  })(), { face: 9.25 }));
  // ===== carica
  mv.add(addItem('rocchetto_cricco', 'rocchetto_cricco', (() => {
    const g = groupAt(G.barrel);
    g.add(mesh(extrude([gearRing(C0, 105, 60)], 7.4, 0.8, 0.06), MAT.grain(tex().grain10)));
    return g;
  })(), { face: 8.2, cover: true }));
  mv.add(addItem('ruota_carica', 'ruota_carica', (() => {
    const g = groupAt(G.crownWheel);
    g.add(mesh(extrude([gearRing(C0, 55, 40)], 7.4, 0.8, 0.06), MAT.grain(tex().grain5)));
    return g;
  })(), { face: 8.2 }));
  mv.add(addItem('cricchetto', 'cricchetto', (() => {
    const g = groupAt(G.click);
    const shp = union(taper(G.click, polar(G.barrel, 109, -2.2), 30, 12), circle(G.click, 18));
    g.add(mesh(rel(extrude(shp, 7.4, 0.6, 0.06), G.click), MAT.steel()));
    const pts = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      pts.push(new THREE.Vector3(1.0 + 4.5 * t, 7.7, -1.8 - 1.2 * Math.sin(t * Math.PI)));
    }
    g.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.18, 6), MAT.spring()));
    return g;
  })(), { face: 8.0 }));
  // ===== automatico
  const autoBridge = union(
    poly([[320, 215], [560, 200], [585, 300], [560, 395], [345, 395], [300, 300]]),
    circle(G.rev1, 48), circle(G.rev2, 48));
  mv.add(addItem('ponte_automatico', 'ponte_automatico', (() => {
    const g = new THREE.Group();
    g.add(mesh(extrude(autoBridge, 9.4, 1.5, 0.18), MAT.bridge()));
    for (const pt of [[345, 300], [560, 240]]) g.add(at(mesh(cyl(1.5, 0, 9.4, 20), MAT.steelMatte()), pt));
    return g;
  })(), { face: 10.9, cover: true }));
  for (const [id, pt] of [['invertitore_1', G.rev1], ['invertitore_2', G.rev2]]) {
    mv.add(addItem(id, 'invertitori', (() => {
      const g = groupAt(pt);
      g.add(mesh(extrude([gearRing(C0, 40, 36)], 10.9, 0.5, 0.05), MAT.brass()));
      g.add(jewel([500, 500], 11.4, 0.6));
      return g;
    })(), { face: 11.4, cover: true }));
  }
  mv.add(addItem('rotore', 'rotore', (() => {
    const g = new THREE.Group();
    const pts = [];
    for (let i = 0; i <= 64; i++) pts.push(polar(C0, 425, Math.PI + (i / 64) * Math.PI));
    for (let i = 64; i >= 0; i--) pts.push(polar(C0, 62, Math.PI + (i / 64) * Math.PI));
    g.add(mesh(extrude([pts], 12.6, 0.7, 0.08), MAT.grain(tex().grain42)));
    const rim = [];
    for (let i = 0; i <= 64; i++) rim.push(polar(C0, 425, Math.PI + (i / 64) * Math.PI));
    for (let i = 64; i >= 0; i--) rim.push(polar(C0, 378, Math.PI + (i / 64) * Math.PI));
    g.add(mesh(extrude([rim], 12.0, 2.0, 0.15), MAT.heavy()));
    g.add(mesh(cyl(5.6, 11.2, 13.6, 48), MAT.steel()));
    g.add(mesh(cyl(4.2, 13.6, 13.8, 48), MAT.steelMatte()));
    return g;
  })(), { face: 13.8, cover: true }));

  // ===== stelo e corona
  mv.add(addItem('stelo', 'stelo', (() => {
    const g = new THREE.Group();
    g.position.set(0, STEM_Y, 0);
    const stem = mesh(cyl(0.85, 0, 18, 16), MAT.steel());
    stem.rotation.z = Math.PI / 2;
    stem.position.set(X3(860), 0, 0);
    g.add(stem);
    const sq = mesh(new THREE.BoxGeometry(5, 1.2, 1.2), MAT.steel());
    sq.position.set((X3(885) + X3(935)) / 2, 0, 0);
    g.add(sq);
    const crownG = extrude([gearRing(C0, 46, 44, 0, 5)], 0, 3.0, 0.3);
    crownG.translate(0, -1.5, 0);
    const crown = mesh(crownG, MAT.case());
    crown.rotation.z = Math.PI / 2;
    crown.position.set(X3(1050), 0, 0);
    g.add(crown);
    const cap = mesh(cyl(3.6, 0, 0.4, 32), MAT.case());
    cap.rotation.z = -Math.PI / 2;
    cap.position.set(X3(1050) - 1.5, 0, 0);
    g.add(cap);
    return g;
  })(), { dir: 1 }));

  // ===== lato quadrante
  mv.add(addItem('tiretto', 'tiretto', (() => {
    const g = groupAt(G.slPivot);
    const shp = union(taper(G.slPivot, [905, 470], 34, 18), circle(G.slPivot, 22));
    g.add(mesh(rel(extrude(shp, -3.55, 0.55, 0.05), G.slPivot), MAT.steel()));
    const pin = mesh(cyl(0.5, -4.6, -3.5, 12), MAT.steelMatte());
    pin.position.set(X3(900) - X3(G.slPivot[0]), 0, Z3(476) - Z3(G.slPivot[1]));
    g.add(pin);
    return g;
  })(), { dir: -1, face: -3.55 }));
  const sidePinion = (pt, r, len) => {
    const g = new THREE.Group();
    g.position.set(X3(pt[0]), STEM_Y, Z3(pt[1]));
    const geo = extrude([gearRing(C0, r, 10)], -len / 2, len, 0.04);
    const m = mesh(geo, MAT.steel());
    m.rotation.z = Math.PI / 2;
    g.add(m);
    return g;
  };
  mv.add(addItem('pignone_carica', 'pignone_carica', sidePinion(G.windingPinion, 13, 2.8), { dir: -1 }));
  mv.add(addItem('pignone_scorrevole', 'pignone_scorrevole', sidePinion(G.clutch, 14, 3.4), { dir: -1 }));
  mv.add(addItem('ruota_rinvio', 'ruota_rinvio', (() => {
    const g = groupAt(G.settingWheel);
    g.add(mesh(extrude([gearRing(C0, 28, 20)], -3.6, 0.6, 0.05), MAT.steel()));
    return g;
  })(), { dir: -1, face: -3.6 }));
  mv.add(addItem('bascula', 'bascula', (() => {
    const g = groupAt(G.yokePivot);
    const shp = union(taper(G.yokePivot, [870, 530], 30, 16), circle(G.yokePivot, 20));
    g.add(mesh(rel(extrude(shp, -3.5, 0.5, 0.05), G.yokePivot), MAT.steelMatte()));
    return g;
  })(), { dir: -1, face: -3.5 }));
  mv.add(addItem('molla_tiretto', 'molla_tiretto', (() => {
    const g = new THREE.Group();
    const shp = poly([[760, 385], [850, 380], [915, 430], [845, 455], [800, 520], [830, 640], [760, 660], [735, 560]]);
    g.add(mesh(extrude(shp, -6.0, 0.6, 0.08), MAT.steelMatte()));
    for (const pt of [[770, 420], [770, 620]]) g.add(at(mesh(cyl(1.4, -5.4, -3.0, 16), MAT.steelMatte()), pt));
    return g;
  })(), { dir: -1, face: -6.0, cover: true }));
  mv.add(addItem('chaussee', 'chaussee', (() => {
    const g = groupAt(G.center);
    g.add(mesh(cyl(2.3, -8.0, -3.0, 24), MAT.steel()));
    g.add(mesh(extrude([gearRing(C0, 26, 12)], -4.0, 1.0, 0.04), MAT.steel()));
    return g;
  })(), { dir: -1 }));
  mv.add(addItem('ruota_minuteria', 'ruota_minuteria', (() => {
    const g = groupAt(G.minuteWheel);
    g.add(mesh(extrude([gearRing(C0, 50, 36)], -3.9, 0.5, 0.05), MAT.steel()));
    g.add(mesh(extrude([gearRing(C0, 14, 10)], -4.8, 0.95, 0.03), MAT.steel()));
    return g;
  })(), { dir: -1 }));
  mv.add(addItem('ruota_ore', 'ruota_ore', (() => {
    const g = groupAt(G.center);
    g.add(mesh(extrude([[...wheelPoly(66, 48, 0), circleRing(C0, 30, 32).reverse()]], -5.3, 0.45, 0.05), MAT.gold()));
    g.add(mesh(cyl(3.0, -7.8, -4.85, 32), MAT.gold()));
    return g;
  })(), { dir: -1 }));
  mv.add(addItem('ruota_datario', 'datario', (() => {
    const g = groupAt(G.dateWheel);
    g.add(mesh(extrude([gearRing(C0, 44, 30)], -4.6, 0.5, 0.05), MAT.steel()));
    return g;
  })(), { dir: -1 }));
  mv.add(addItem('disco_datario', 'datario', (() => {
    const g = new THREE.Group();
    const rg = [gearRing(C0, 362, 31, 0, 9).reverse(), circleRing(C0, 428, 128)];
    g.add(mesh(extrude([[rg[1], rg[0]]], -5.9, 0.3, 0.03), MAT.steelMatte()));
    const rgeo = new THREE.RingGeometry(36.4, 42.6, 128);
    rgeo.rotateX(Math.PI / 2);
    rgeo.rotateY(Math.PI);
    const face = new THREE.Mesh(rgeo, MAT.dateRing());
    face.position.y = -5.91;
    face.receiveShadow = true;
    g.add(face);
    return g;
  })(), { dir: -1, face: -5.9 }));
  mv.add(addItem('saltarello', 'datario', (() => {
    const g = groupAt(G.jumper);
    const shp = union(taper(G.jumper, polar(C0, 368, -1.25), 26, 10), circle(G.jumper, 16));
    g.add(mesh(rel(extrude(shp, -5.95, 0.4, 0.05), G.jumper), MAT.steel()));
    return g;
  })(), { dir: -1, face: -5.95 }));
  mv.add(addItem('placca_calendario', 'datario', (() => {
    const g = new THREE.Group();
    g.add(mesh(extrude(ring(C0, 352, 80), -6.6, 0.55, 0.08), MAT.steelMatte()));
    for (const pt of [[300, 420], [640, 700], [560, 220]]) g.add(at(mesh(cyl(1.3, -6.05, -3.0, 16), MAT.steelMatte()), pt));
    return g;
  })(), { dir: -1, face: -6.6, cover: true }));
  mv.add(addItem('quadrante', 'quadrante', (() => {
    const g = new THREE.Group();
    g.add(mesh(cyl(43.6, -7.6, -7.2, 128), std({ color: 0xf3eee4, metalness: 0, roughness: 0.55 })));
    const fg = new THREE.CircleGeometry(43.6, 128);
    fg.rotateX(Math.PI / 2);
    fg.rotateY(Math.PI);
    const face = new THREE.Mesh(fg, MAT.dial());
    face.position.y = -7.61;
    face.receiveShadow = true;
    g.add(face);
    return g;
  })(), { dir: -1, face: -7.6, cover: true }));
  mv.add(addItem('lancette', 'lancette', (() => {
    const g = new THREE.Group();
    const up = -Math.PI / 2;
    const hh = mesh(extrude(taper(C0, polar(C0, 250, up), 30, 10), -8.2, 0.2, 0.03), MAT.hands());
    const mm = mesh(extrude(taper(C0, polar(C0, 370, up), 22, 8), -8.7, 0.2, 0.03), MAT.hands());
    const ss = mesh(extrude(bar(polar(C0, 80, up + Math.PI), polar(C0, 400, up), 6), -9.1, 0.12, 0.02), MAT.orange());
    hh.name = 'h'; mm.name = 'm'; ss.name = 's';
    g.add(hh, mm, ss);
    g.userData.hands = { h: hh, m: mm, s: ss };
    setHands(g, 10 * 3600 + 10 * 60 + 30);
    g.add(mesh(cyl(1.2, -9.2, -7.6, 24), MAT.hands()));
    return g;
  })(), { dir: -1, face: -9.2, cover: true }));

  // ===== cassa e fondello
  mv.add(addItem('cassa', 'cassa', (() => {
    const g = new THREE.Group();
    const prof = [[44.4, -9.6], [47.6, -9.6], [49.0, -8.4], [49.4, 0], [49.0, 13.6], [47.4, 14.5], [44.4, 14.5], [44.4, -9.6]].map((p) => new THREE.Vector2(p[0], p[1]));
    g.add(mesh(new THREE.LatheGeometry(prof, 128), MAT.case()));
    const tube = mesh(cyl(1.8, 0, 4, 24), MAT.case());
    tube.rotation.z = Math.PI / 2;
    tube.position.set(X3(1000) - 0.5, STEM_Y, 0);
    g.add(tube);
    for (const pt of [[164, 193], [833, 810]]) {
      const a = Math.atan2(Z3(pt[1]), X3(pt[0]));
      const tab = mesh(new THREE.BoxGeometry(5.5, 0.6, 3.2), MAT.steelMatte());
      tab.position.set(X3(pt[0]), 0.3, Z3(pt[1]));
      tab.rotation.y = -a;
      g.add(tab);
    }
    return g;
  })(), { dir: 1, face: 0.6, cover: true }));
  mv.add(addItem('fondello', 'fondello', (() => {
    const g = new THREE.Group();
    g.add(mesh(cyl(47.2, 14.5, 15.9, 128), MAT.case()));
    g.add(mesh(cyl(37, 15.9, 16.3, 128), MAT.case()));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      const n = mesh(new THREE.BoxGeometry(3, 0.5, 2.4), MAT.dark());
      n.position.set(Math.cos(a) * 44, 15.75, Math.sin(a) * 44);
      n.rotation.y = -a;
      g.add(n);
    }
    return g;
  })(), { dir: 1, face: 16.3, cover: true }));
}

/// Lancette all'ora indicata (secondi dalla mezzanotte). Rotazione positiva = oraria vista dal quadrante.
function setHands(g, secs) {
  const H = g.userData.hands;
  if (!H) return;
  H.s.rotation.y = ((secs % 60) / 60) * TAU;
  H.m.rotation.y = ((secs % 3600) / 3600) * TAU;
  H.h.rotation.y = ((secs % 43200) / 43200) * TAU;
}

// ------------------------------------------------------------------ viti
const screws = {}; // id -> {id,item,lh,outer,spin,base}
function buildScrew(def) {
  const it = items[res(def.item)];
  if (!it) return;
  const r = def.r * S;
  const outer = new THREE.Group();
  outer.position.set(X3(def.x), it.face, Z3(def.y));
  if (it.dir < 0) outer.rotation.x = Math.PI;
  const spin = new THREE.Group();
  spin.add(mesh(cyl(r, 0, 0.62, 32), MAT.blue()));
  const slot = mesh(new THREE.BoxGeometry(r * 2.06, 0.3, r * 0.3), MAT.dark(), false);
  slot.position.y = 0.52;
  slot.rotation.y = (def.x * 7 + def.y) % 3;
  spin.add(slot);
  spin.add(mesh(cyl(r * 0.45, -2.4, 0, 12), MAT.blue()));
  {
    const pts = [];
    const rr = r * 0.45 + 0.04;
    for (let i = 0; i <= 120; i++) {
      const t = i / 120, a = t * 6 * TAU;
      pts.push(new THREE.Vector3(Math.cos(a) * rr, -2.3 + 2.1 * t, Math.sin(a) * rr));
    }
    spin.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.07, 5), MAT.blue(), false));
  }
  outer.add(spin);
  outer.name = def.id;
  outer.userData = { id: def.id, part: 'viti' };
  screws[def.id] = { id: def.id, item: res(def.item), lh: !!def.lh, outer, spin, r, base: { p: outer.position.clone(), q: outer.quaternion.clone() } };
  mv.add(outer);
}

// ------------------------------------------------------------------ scena
let renderer, scene, camera, controls, mv, tray, driver, needle, arrow, tweezers, oiler, matGroup;
const MAT_X = 76;
const beads = [];
let present = new Set();
let highlight = new Set();
let numbered = [];
let side = 'ponti';
let xray = false;
let selected = null;
let selectedUntil = 0;
const tweens = [];
const labelsEl = document.getElementById('labels');

let SPEED = 1;
const ABORT = { abort: true };
function tween(dur, fn, done, fail) {
  const t = { t0: performance.now(), dur: dur * SPEED, fn, done, fail };
  tweens.push(t);
  return t;
}
const ease = (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);

function init() {
  const canvas = document.getElementById('c');
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (e) {
    send({ type: 'nogl', msg: String(e) });
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = THREE.NeutralToneMapping || THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = HQ ? THREE.VSMShadowMap : THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);

  scene = new THREE.Scene();
  scene.background = null;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
  scene.environmentIntensity = 1.05;

  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 112, 64);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.12;
  controls.minDistance = 18;
  controls.maxDistance = 260;
  controls.maxPolarAngle = Math.PI * 0.47;
  controls.target.set(0, 0, 0);

  const key = new THREE.DirectionalLight(0xffffff, 1.7);
  key.position.set(-35, 110, 45);
  key.castShadow = true;
  key.shadow.mapSize.set(HQ ? 2048 : 1024, HQ ? 2048 : 1024);
  key.shadow.radius = HQ ? 6 : 2;
  key.shadow.blurSamples = 12;
  key.shadow.camera.left = -62; key.shadow.camera.right = 62;
  key.shadow.camera.top = 62; key.shadow.camera.bottom = -62;
  key.shadow.camera.near = 10; key.shadow.camera.far = 260;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  scene.add(key);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x7f8798, 0.45));
  const rim = new THREE.DirectionalLight(0xdfe8ff, 0.55);
  rim.position.set(70, 40, -60);
  scene.add(rim);

  const floor = new THREE.Mesh(new THREE.CircleGeometry(190, 96), std({ color: 0x22304d, metalness: 0, roughness: 0.95, map: texNoise() }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -16;
  floor.receiveShadow = true;
  scene.add(floor);
  // tappetino dei pezzi
  matGroup = new THREE.Group();
  const matShape = new THREE.Shape();
  const mw = 46, mh = 92, mr = 5;
  matShape.moveTo(-mw / 2 + mr, -mh / 2); matShape.lineTo(mw / 2 - mr, -mh / 2); matShape.quadraticCurveTo(mw / 2, -mh / 2, mw / 2, -mh / 2 + mr);
  matShape.lineTo(mw / 2, mh / 2 - mr); matShape.quadraticCurveTo(mw / 2, mh / 2, mw / 2 - mr, mh / 2); matShape.lineTo(-mw / 2 + mr, mh / 2);
  matShape.quadraticCurveTo(-mw / 2, mh / 2, -mw / 2, mh / 2 - mr); matShape.lineTo(-mw / 2, -mh / 2 + mr); matShape.quadraticCurveTo(-mw / 2, -mh / 2, -mw / 2 + mr, -mh / 2);
  const matGeo = new THREE.ExtrudeGeometry(matShape, { depth: 0.6, bevelEnabled: false });
  matGeo.rotateX(-Math.PI / 2);
  const matMesh = new THREE.Mesh(matGeo, std({ color: 0x5d7f6e, roughness: 0.95, metalness: 0 }));
  matMesh.receiveShadow = true;
  matGroup.add(matMesh);
  matGroup.position.set(MAT_X, -15.9, 0);
  matGroup.visible = false;
  scene.add(matGroup);

  mv = new THREE.Group();
  scene.add(mv);
  build(mv);

  // contenitore delle viti
  tray = new THREE.Group();
  const prof = [[0, 0], [7.5, 0], [8.2, 0.4], [8.6, 2.2], [8.1, 2.3], [7.4, 0.7], [0, 0.7]].map((p) => new THREE.Vector2(p[0], p[1]));
  const dish = mesh(new THREE.LatheGeometry(prof, 64), std({ color: 0xf6f7fa, metalness: 0.1, roughness: 0.4 }));
  tray.add(dish);
  tray.position.set(62, -8, 26);
  tray.visible = false;
  scene.add(tray);

  // cacciavite
  driver = new THREE.Group();
  driver.add(mesh(cyl(0.28, 0, 9, 16, 0.42), MAT.steel()));
  driver.add(mesh(cyl(1.5, 9, 19, 24), std({ color: 0x1d3a8a, metalness: 0.2, roughness: 0.5 })));
  const stripe = mesh(new THREE.BoxGeometry(0.5, 9, 3.1), std({ color: 0xf28c38, roughness: 0.5 }));
  stripe.position.y = 14;
  driver.add(stripe);
  driver.add(mesh(cyl(1.55, 19, 20.5, 24), std({ color: 0xf28c38, roughness: 0.5 })));
  driver.visible = false;
  scene.add(driver);

  // pinzette
  tweezers = new THREE.Group();
  const prongGeo = new THREE.BoxGeometry(0.7, 20, 1.6);
  prongGeo.translate(0, 10, 0);
  for (const sgn of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.y = 20;
    const prong = mesh(prongGeo.clone(), MAT.steel());
    prong.position.y = -20;
    pivot.add(prong);
    pivot.userData.sgn = sgn;
    tweezers.add(pivot);
  }
  tweezers.add(mesh(cyl(1.0, 19.5, 21, 16), MAT.steel()));
  tweezers.visible = false;
  scene.add(tweezers);
  setTweezers(1);

  // oliatore
  oiler = new THREE.Group();
  const otip = mesh(new THREE.ConeGeometry(0.18, 6, 12), MAT.steel());
  otip.rotation.x = Math.PI;
  otip.position.y = 3;
  oiler.add(otip);
  oiler.add(mesh(cyl(0.6, 6, 20, 16), std({ color: 0x1d3a8a, roughness: 0.5 })));
  const drop = mesh(new THREE.SphereGeometry(0.32, 16, 12), MAT.oil(), false);
  drop.position.y = 0.15;
  oiler.add(drop);
  oiler.userData.drop = drop;
  oiler.visible = false;
  scene.add(oiler);

  // punta (per premere / sollevare)
  needle = new THREE.Group();
  const tip = mesh(new THREE.ConeGeometry(0.35, 5, 16), MAT.steel());
  tip.rotation.x = Math.PI;
  tip.position.y = 2.5;
  needle.add(tip);
  needle.add(mesh(cyl(0.9, 5, 20, 16), std({ color: 0xf28c38, roughness: 0.5 })));
  needle.visible = false;
  scene.add(needle);

  // freccia del verso
  arrow = new THREE.Group();
  const am = std({ color: 0xf28c38, emissive: 0xf28c38, emissiveIntensity: 0.6, side: THREE.DoubleSide });
  const arcG = new THREE.Group();
  arcG.add(new THREE.Mesh(new THREE.TorusGeometry(1, 0.13, 8, 48, Math.PI * 1.45), am));
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.9, 16), am);
  const endA = Math.PI * 1.45;
  cone.position.set(Math.cos(endA), Math.sin(endA), 0);
  cone.rotation.z = endA;
  arcG.add(cone);
  arcG.rotation.x = -Math.PI / 2;
  arrow.add(arcG);
  arrow.userData.arc = arcG;
  arrow.visible = false;
  scene.add(arrow);

  // input
  let down = null;
  renderer.domElement.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  renderer.domElement.addEventListener('pointerup', (e) => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    if (moved < 8 && performance.now() - down.t < 450) pick(e.clientX, e.clientY);
    down = null;
  });
  window.addEventListener('resize', onResize);
  onResize();
  requestAnimationFrame(loop);
  send({ type: 'ready' });
}

function onResize() {
  const w = window.innerWidth, h = window.innerHeight;
  if (!renderer || w === 0 || h === 0) return;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

function visibleChain(o) {
  for (let x = o; x; x = x.parent) if (!x.visible) return false;
  return true;
}
function pick(cx, cy) {
  const rc = new THREE.Raycaster();
  const v = new THREE.Vector2((cx / window.innerWidth) * 2 - 1, -(cy / window.innerHeight) * 2 + 1);
  rc.setFromCamera(v, camera);
  const hits = rc.intersectObject(mv, true);
  for (const h of hits) {
    if (!visibleChain(h.object)) continue;
    let o = h.object;
    while (o && !(o.userData && o.userData.id)) o = o.parent;
    if (!o) continue;
    const it = items[o.userData.id];
    if (xray && it && it.cover) continue;
    selected = o.userData.id;
    selectedUntil = performance.now() + 1600;
    send({ type: 'tap', id: o.userData.id, part: o.userData.part });
    return;
  }
}

// ------------------------------------------------------------------ stato
function forEachMat(obj, fn) {
  obj.traverse((m) => {
    if (!m.isMesh) return;
    const mats = Array.isArray(m.material) ? m.material : [m.material];
    for (const mt of mats) fn(mt, m);
  });
}
function setOpacity(obj, a) {
  forEachMat(obj, (mt) => {
    if (mt.userData.baseOpacity === undefined) mt.userData.baseOpacity = mt.opacity;
    mt.transparent = a < 0.999;
    mt.opacity = a;
    mt.depthWrite = a > 0.6;
  });
}
function resetObj(rec, obj) {
  obj.position.copy(rec.base.p);
  obj.quaternion.copy(rec.base.q);
  obj.scale.set(1, 1, 1);
}
function isPresent(id) {
  for (const p of present) if (res(p) === id) return true;
  return false;
}
function cancelTweens() {
  const old = tweens.splice(0, tweens.length);
  for (const t of old) if (t.fail) t.fail(ABORT);
  for (const c of [...scene.children]) if (c.userData && c.userData.holder) scene.remove(c);
  driver.visible = false;
  needle.visible = false;
  arrow.visible = false;
}

function applyState(st) {
  cancelTweens();
  present = new Set(st.present || []);
  highlight = new Set((st.highlight || []).map(res));
  numbered = st.numbered || [];
  xray = !!st.xray;
  const trayIds = st.tray || [];
  const matIds = (st.mat || []).map(res);
  for (const b of beads.splice(0)) b.parent && b.parent.remove(b);
  tweezers.visible = false;
  oiler.visible = false;
  let mk = 0;
  for (const it of Object.values(items)) {
    if (it.obj.parent !== mv) mv.add(it.obj);
    it.busy = false;
    it.obj.scale.set(1, 1, 1);
    resetObj(it, it.obj);
    if (it.id === 'cricchetto' || it.id === 'rocchetto_cricco' || it.id === 'racchetta') resetObj(it, it.obj);
    it.obj.visible = isPresent(it.id);
    setOpacity(it.obj, xray && it.cover ? 0.22 : 1);
  }
  for (const id of [...new Set(matIds)]) {
    const it = items[id];
    if (!it || isPresent(id)) continue;
    it.obj.visible = true;
    placeOnMat(it, mk++, false);
  }
  matCount = mk;
  matGroup.visible = mk > 0 || !!st.showMat;
  let k = 0;
  for (const s of Object.values(screws)) {
    if (s.outer.parent !== mv) mv.add(s.outer);
    resetObj(s, s.outer);
    s.spin.position.set(0, 0, 0);
    s.spin.rotation.set(0, 0, 0);
    setOpacity(s.outer, 1);
    if (present.has(s.id)) {
      s.outer.visible = true;
    } else if (trayIds.includes(s.id)) {
      s.outer.visible = true;
      putInTray(s, k++, false);
    } else {
      s.outer.visible = false;
    }
  }
  tray.visible = trayIds.length > 0 || !!st.showTray;
  trayCount = k;
  if (st.live) setLive(st.live);
  if (st.side && st.side !== side) flipTo(st.side, st.animate !== false);
  else mv.rotation.z = side === 'quadrante' ? Math.PI : 0;
  if (st.focus) focusOn(st.focus, st.animate !== false, st.zoom);
}

let trayCount = 0;
function traySlot(k) {
  const a = k * 2.399, r = 1.6 + 1.45 * Math.sqrt(k);
  return new THREE.Vector3(tray.position.x + Math.cos(a) * Math.min(r, 6), tray.position.y + 1.3, tray.position.z + Math.sin(a) * Math.min(r, 6));
}
function putInTray(s, k, animate) {
  scene.attach(s.outer);
  const target = traySlot(k);
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2 - 0.2, 0, 0.6 * k));
  if (!animate) {
    s.outer.position.copy(target);
    s.outer.quaternion.copy(q);
    return;
  }
  const p0 = s.outer.position.clone(), q0 = s.outer.quaternion.clone();
  return new Promise((done, fail) => tween(900, (p) => {
    const e = ease(p);
    s.outer.position.lerpVectors(p0, target, e);
    s.outer.position.y += Math.sin(e * Math.PI) * 14;
    s.outer.quaternion.slerpQuaternions(q0, q, e);
  }, done, fail));
}

function flipTo(sd, animate) {
  side = sd;
  const target = sd === 'quadrante' ? Math.PI : 0;
  if (!animate) { mv.rotation.z = target; return; }
  const r0 = mv.rotation.z;
  tween(900, (p) => { mv.rotation.z = r0 + (target - r0) * ease(p); mv.position.y = Math.sin(p * Math.PI) * 18; });
}

function worldBox(ids) {
  const box = new THREE.Box3();
  const rz = mv.rotation.z, py = mv.position.y;
  mv.rotation.z = side === 'quadrante' ? Math.PI : 0;
  mv.position.y = 0;
  mv.updateMatrixWorld(true);
  for (const raw of ids) {
    const id = res(raw);
    const o = (items[id] && items[id].obj) || (screws[id] && screws[id].outer);
    if (!o) continue;
    const wasVisible = o.visible;
    o.visible = true;
    const b = new THREE.Box3().setFromObject(o);
    o.visible = wasVisible;
    if (!b.isEmpty()) box.union(b);
  }
  mv.rotation.z = rz;
  mv.position.y = py;
  mv.updateMatrixWorld(true);
  return box;
}
function focusOn(ids, animate = true, zoom = 1) {
  let center = new THREE.Vector3(0, 0, 0), radius = 52;
  if ((!ids || !ids.length) && matGroup && matGroup.visible) { center = new THREE.Vector3(MAT_X / 2 - 4, 0, 0); radius = 66; }
  if (ids && ids.length) {
    const b = worldBox(ids);
    if (!b.isEmpty()) {
      b.getCenter(center);
      radius = Math.max(9, b.getSize(new THREE.Vector3()).length() / 2);
    }
  }
  const dist = Math.min(240, Math.max(26, (radius / Math.sin((camera.fov * Math.PI) / 360)) * 1.05 * (zoom || 1)));
  const az = Math.atan2(camera.position.x - controls.target.x, camera.position.z - controls.target.z);
  const pol = ids && ids.length ? 0.55 : 0.68;
  const endPos = new THREE.Vector3(
    center.x + dist * Math.sin(pol) * Math.sin(az),
    center.y + dist * Math.cos(pol),
    center.z + dist * Math.sin(pol) * Math.cos(az));
  if (!animate) { controls.target.copy(center); camera.position.copy(endPos); return; }
  const t0 = controls.target.clone(), p0 = camera.position.clone();
  tween(800, (p) => {
    const e = ease(p);
    controls.target.lerpVectors(t0, center, e);
    camera.position.lerpVectors(p0, endPos, e);
  });
}

// ------------------------------------------------------------------ azioni
function headWorld(s, extra = 0) {
  s.outer.updateMatrixWorld(true);
  return s.spin.localToWorld(new THREE.Vector3(0, 0.62 + extra, 0));
}
function modelToWorld(x, y, h) {
  mv.updateMatrixWorld(true);
  return mv.localToWorld(new THREE.Vector3(X3(x), h, Z3(y)));
}
const wait = (ms) => new Promise((r, f) => tween(ms, () => {}, r, f));
const run = (ms, fn) => new Promise((r, f) => tween(ms, fn, r, f));

function showArrow(pos, r, ccw) {
  arrow.visible = true;
  arrow.position.copy(pos).add(new THREE.Vector3(0, 0.35, 0));
  const s = r + 1.0;
  arrow.scale.set(ccw ? s : -s, s, s);
}

async function unscrew(s, inward) {
  // inward = avvitare
  const dirWorld = s.lh ? -1 : 1; // +1 = antiorario visto da sopra (svitare filetto destro)
  const turn = inward ? -dirWorld : dirWorld;
  if (inward) {
    // dalla vaschetta (o da sopra) al foro
    const target = new THREE.Vector3();
    mv.add(s.outer);
    resetObj(s, s.outer);
    s.spin.position.y = 1.4;
    s.outer.updateMatrixWorld(true);
    s.outer.getWorldPosition(target);
    const wq = new THREE.Quaternion();
    s.outer.getWorldQuaternion(wq);
    scene.attach(s.outer);
    const p0 = s.outer.position.clone();
    const from = s._trayPos || p0.clone().add(new THREE.Vector3(0, 20, 0));
    const q0 = s._trayQuat || s.outer.quaternion.clone();
    s.outer.visible = true;
    s.outer.position.copy(from);
    s.outer.quaternion.copy(q0);
    await run(800, (p) => {
      const e = ease(p);
      s.outer.position.lerpVectors(from, target, e);
      s.outer.position.y += Math.sin(e * Math.PI) * 12;
      s.outer.quaternion.slerpQuaternions(q0, wq, e);
    });
    mv.attach(s.outer);
    resetObj(s, s.outer);
  }
  const head = headWorld(s);
  showArrow(head, s.r, turn > 0);
  driver.visible = true;
  driver.rotation.set(0, 0, 0);
  driver.position.copy(head).add(new THREE.Vector3(0, 22, 0));
  await run(550, (p) => driver.position.y = head.y + 22 * (1 - ease(p)));
  const turns = 3;
  const y0 = s.spin.position.y;
  await run(2300, (p) => {
    const ang = turn * p * turns * TAU;
    s.spin.rotation.y = ang;
    driver.rotation.y = ang;
    s.spin.position.y = inward ? y0 * (1 - p) : 1.4 * p;
    const h = headWorld(s);
    driver.position.copy(h);
    arrow.userData.arc.rotation.z = -ang * 0.15;
  });
  arrow.visible = false;
  const dTop = driver.position.clone();
  await run(450, (p) => driver.position.y = dTop.y + 22 * ease(p));
  driver.visible = false;
  if (!inward) {
    tray.visible = true;
    await putInTray(s, trayCount++, true);
  }
}

const BIG = new Set(['cassa', 'fondello', 'stelo', 'rotore', 'quadrante', 'platina', 'lancette']);
async function liftItems(ids, down) {
  const objs0 = [...new Set(ids.map(res))].map((id) => items[id]).filter(Boolean);
  if (objs0.length && !objs0.some((o) => BIG.has(o.id))) {
    if (down) return lowerWithTweezers(objs0);
    return liftWithTweezers(objs0);
  }
  const objs = objs0;
  for (const it of objs) {
    it.obj.visible = true;
    setOpacity(it.obj, 1);
  }
  const special = objs.length === 1 ? objs[0].id : null;
  await run(1300, (p) => {
    const e = ease(down ? 1 - p : p);
    for (const it of objs) {
      resetObj(it, it.obj);
      if (it.id === 'stelo') {
        it.obj.position.x -= 16 * e;
      } else if (it.id === 'fondello') {
        it.obj.rotation.y = e * 1.6;
        it.obj.position.y += 22 * Math.max(0, e - 0.35) / 0.65;
      } else {
        it.obj.position.y += it.dir * 20 * e;
        it.obj.position.x += (side === 'quadrante' ? -1 : 1) * 16 * Math.max(0, e - 0.25) / 0.75;
        if (it.id === 'ponte_bilanciere' || it.id === 'bilanciere' || it.id === 'spirale' || it.id === 'racchetta') {
          // il ponte del bilanciere ruota appena mentre esce
          it.obj.rotation.y = 0.12 * Math.sin(e * Math.PI);
        }
      }
      setOpacity(it.obj, e < 0.55 ? 1 : Math.max(0, 1 - (e - 0.55) / 0.45));
    }
    // le viti dei pezzi tolti
    for (const s of Object.values(screws)) {
      if (objs.some((o) => o.id === s.item) && s.outer.parent === mv && s.outer.visible) {
        resetObj(s, s.outer);
        s.outer.position.y += (items[s.item].dir) * 20 * e;
        s.outer.position.x += (side === 'quadrante' ? -1 : 1) * 16 * Math.max(0, e - 0.25) / 0.75;
      }
    }
  });
  for (const it of objs) {
    resetObj(it, it.obj);
    setOpacity(it.obj, xray && it.cover ? 0.22 : 1);
    it.obj.visible = !!down;
  }
  void special;
}

async function pressAt(at, h) {
  const p = modelToWorld(at[0], at[1], h);
  needle.visible = true;
  needle.position.copy(p).add(new THREE.Vector3(0, 18, 0));
  await run(600, (q) => needle.position.y = p.y + 18 * (1 - ease(q)));
  for (let i = 0; i < 2; i++) {
    await run(260, (q) => needle.position.y = p.y + 1.2 * Math.sin(q * Math.PI));
  }
  await wait(300);
  await run(450, (q) => needle.position.y = p.y + 18 * ease(q));
  needle.visible = false;
}

async function letdown() {
  const click = items.cricchetto.obj, ratchet = items.rocchetto_cricco.obj;
  const tipPt = polar(G.barrel, 112, -2.2);
  const p = modelToWorld(tipPt[0], tipPt[1], 8.0);
  needle.visible = true;
  needle.position.copy(p).add(new THREE.Vector3(0, 18, 0));
  await run(600, (q) => needle.position.y = p.y + 18 * (1 - ease(q)));
  await run(400, (q) => { click.rotation.y = 0.22 * ease(q); });
  await run(2600, (q) => { ratchet.rotation.y = -2.5 * TAU * (1 - Math.pow(1 - q, 2)); });
  await run(400, (q) => { click.rotation.y = 0.22 * (1 - ease(q)); });
  await run(450, (q) => needle.position.y = p.y + 18 * ease(q));
  needle.visible = false;
  ratchet.rotation.y = 0;
}

async function regulate() {
  const r = items.racchetta.obj;
  for (const a of [0.14, -0.14, 0]) {
    const a0 = r.rotation.y;
    await run(700, (q) => { r.rotation.y = a0 + (a - a0) * ease(q); });
  }
}

let playing = Promise.resolve();
function play(action, seq) {
  playing = playing.then(async () => {
    try {
      const t = action.t;
      if (t === 'unscrew' || t === 'screw') {
        const s = screws[action.ids[0]];
        if (s) {
          if (t === 'screw') {
            const inTray = s.outer.parent === scene && s.outer.visible;
            s._trayPos = inTray ? s.outer.position.clone() : null;
            s._trayQuat = inTray ? s.outer.quaternion.clone() : null;
          }
          await unscrew(s, t === 'screw');
          if (t === 'screw') { present.add(s.id); trayCount = Math.max(0, trayCount - 1); }
          else present.delete(s.id);
        }
      } else if (t === 'lift') {
        await liftItems(action.ids, false);
        for (const id of action.ids) present.delete(id);
      } else if (t === 'lower') {
        await liftItems(action.ids, true);
        for (const id of action.ids) present.add(id);
      } else if (t === 'press') {
        await pressAt(action.at, 0.2);
      } else if (t === 'letdown') {
        await letdown();
      } else if (t === 'regulate') {
        await regulate();
      } else if (t === 'oil') {
        await oilAt(action.ids[0], action.pts || []);
      }
    } catch (e) {
      if (e === ABORT) { send({ type: 'aborted', seq }); return; }
      send({ type: 'error', msg: String(e && e.stack || e) });
    }
    send({ type: 'done', seq });
  });
}

// ------------------------------------------------------------------ pinzette, tappetino, olio
let matCount = 0;
function setTweezers(open) {
  for (const c of tweezers.children) if (c.userData.sgn) c.rotation.z = c.userData.sgn * (0.025 + 0.06 * open);
}
function matSlot(k) {
  const col = k % 2, row = Math.floor(k / 2);
  return new THREE.Vector3(MAT_X - 10 + col * 20, -15.2, -32 + row * 21);
}
/// Mette un pezzo sul tappetino (scala ridotta), con o senza animazione.
function placeOnMat(it, k, animate) {
  const o = it.obj;
  scene.attach(o);
  const p0 = o.position.clone(), s0 = o.scale.clone();
  // posizione finale: il centro del pezzo sullo slot, appoggiato sul tappetino
  o.scale.setScalar(0.5);
  o.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(o);
  const c = b.getCenter(new THREE.Vector3());
  const slot = matSlot(k);
  const end = p0.clone().add(new THREE.Vector3(slot.x - c.x, slot.y - b.min.y, slot.z - c.z));
  o.scale.copy(s0);
  if (!animate) { o.position.copy(end); o.scale.setScalar(0.5); return { end }; }
  return { end, p0, s0 };
}
function grabPoint(o) {
  o.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(o);
  const c = b.getCenter(new THREE.Vector3());
  return new THREE.Vector3(c.x, b.max.y, c.z);
}
async function liftWithTweezers(objs) {
  matGroup.visible = true;
  const lead = objs[0];
  for (const it of objs) { it.busy = true; it.obj.visible = true; setOpacity(it.obj, 1); }
  // gruppo temporaneo: i pezzi si muovono insieme
  const holder = new THREE.Group();
  holder.userData.holder = true;
  scene.add(holder);
  const g = grabPoint(lead.obj);
  holder.position.copy(g);
  holder.updateMatrixWorld(true);
  for (const it of objs) holder.attach(it.obj);
  tweezers.visible = true;
  setTweezers(1);
  tweezers.position.copy(g).add(new THREE.Vector3(0, 18, 0));
  tweezers.rotation.set(0, 0.5, 0.12);
  await run(500, (p) => tweezers.position.y = g.y + 18 * (1 - ease(p)) - 0.4);
  await run(250, (p) => setTweezers(1 - p));
  const tilt = lead.id === 'ponte_bilanciere' ? 0.22 : 0.08;
  const h0 = holder.position.clone();
  await run(700, (p) => {
    const e = ease(p);
    holder.position.y = h0.y + 14 * e;
    holder.rotation.x = tilt * Math.sin(e * Math.PI);
    holder.rotation.y = (lead.id === 'ponte_bilanciere' ? 0.15 : 0) * Math.sin(e * Math.PI);
    tweezers.position.y = holder.position.y - 0.4;
  });
  // verso il tappetino
  const k = matCount++;
  const tmp = { obj: holder };
  const plan = placeOnMat(tmp, k, true);
  const p0 = plan.p0, end = plan.end;
  await run(900, (p) => {
    const e = ease(p);
    holder.position.lerpVectors(p0, end, e);
    holder.position.y += Math.sin(e * Math.PI) * 10;
    holder.scale.setScalar(1 - 0.5 * e);
    holder.rotation.x = 0;
    const gp = grabPoint(holder);
    tweezers.position.set(gp.x, gp.y - 0.4, gp.z);
  });
  await run(250, (p) => setTweezers(p));
  const t0 = tweezers.position.clone();
  await run(400, (p) => tweezers.position.y = t0.y + 20 * ease(p));
  tweezers.visible = false;
  // i pezzi restano sul tappetino
  for (const it of objs) { scene.attach(it.obj); it.busy = false; }
  scene.remove(holder);
}
async function lowerWithTweezers(objs) {
  const lead = objs[0];
  // posizione finale nel movimento
  for (const it of objs) {
    if (it.obj.parent !== mv) mv.add(it.obj);
    it.obj.scale.set(1, 1, 1);
    resetObj(it, it.obj);
    it.obj.visible = true;
    it.busy = true;
    setOpacity(it.obj, 1);
  }
  mv.updateMatrixWorld(true);
  const target = grabPoint(lead.obj);
  const holder = new THREE.Group();
  holder.userData.holder = true;
  scene.add(holder);
  holder.position.copy(target);
  holder.updateMatrixWorld(true);
  for (const it of objs) holder.attach(it.obj);
  // partenza: dal tappetino (o dall'alto)
  const startScale = 0.5;
  const slot = matSlot(Math.max(0, matCount - 1));
  const from = new THREE.Vector3(slot.x, slot.y + 3, slot.z);
  holder.position.copy(from);
  holder.scale.setScalar(startScale);
  tweezers.visible = true;
  setTweezers(0);
  tweezers.rotation.set(0, 0.5, 0.12);
  await run(1000, (p) => {
    const e = ease(p);
    holder.position.lerpVectors(from, target.clone().add(new THREE.Vector3(0, 10, 0)), e);
    holder.position.y += Math.sin(e * Math.PI) * 10;
    holder.scale.setScalar(startScale + (1 - startScale) * e);
    tweezers.position.set(holder.position.x, holder.position.y - 0.4, holder.position.z);
  });
  const hy = holder.position.y;
  await run(700, (p) => {
    holder.position.y = hy + (target.y - hy) * ease(p);
    tweezers.position.y = holder.position.y - 0.4;
  });
  await run(250, (p) => setTweezers(p));
  const t0 = tweezers.position.clone();
  await run(400, (p) => tweezers.position.y = t0.y + 20 * ease(p));
  tweezers.visible = false;
  for (const it of objs) { mv.attach(it.obj); resetObj(it, it.obj); it.obj.scale.set(1, 1, 1); it.busy = false; }
  scene.remove(holder);
  matCount = Math.max(0, matCount - 1);
}
async function oilAt(itemId, pts) {
  const it = items[res(itemId)];
  const h = it ? it.face : 7.4;
  oiler.visible = true;
  for (const pt of pts) {
    const p = modelToWorld(pt[0], pt[1], it && it.dir < 0 ? h - 0.05 : h + 0.05);
    oiler.userData.drop.visible = true;
    oiler.position.copy(p).add(new THREE.Vector3(0, 16, 0));
    await run(450, (q) => oiler.position.y = p.y + 16 * (1 - ease(q)) + 0.3);
    await wait(250);
    const bead = mesh(new THREE.SphereGeometry(0.45, 16, 12), MAT.oil(), false);
    bead.scale.set(1, 0.45, 1);
    bead.position.copy(p).add(new THREE.Vector3(0, 0.15, 0));
    scene.add(bead);
    beads.push(bead);
    oiler.userData.drop.visible = false;
    await run(350, (q) => oiler.position.y = p.y + 0.3 + 10 * ease(q));
  }
  await run(300, (q) => oiler.position.y += q * 2);
  oiler.visible = false;
}

// ------------------------------------------------------------------ movimento vivo
const live = { on: false, speed: 1, sound: false, panel: false, t: 0, clock0: 0, lastBeat: -1, demo: null };
const LIVE_PARTS = ['bilanciere', 'spirale', 'ancora', 'ruota_scappamento', 'ruota_secondi', 'ruota_terzo', 'ruota_centro', 'bariletto'];
const AMP = 4.6, WIN = 0.42, FORK = 0.16, FREQ = 4; // 28.800 alt/h
function setLive(o) {
  if (o.on !== undefined) live.on = !!o.on;
  if (o.speed !== undefined) live.speed = Math.max(0.005, +o.speed);
  if (o.panel !== undefined) live.panel = !!o.panel;
  if (!live.clock0) {
    const d = new Date();
    live.clock0 = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() / 1000;
  }
  updatePanel();
}
function canRun() {
  for (const id of LIVE_PARTS) {
    const it = items[id];
    if (!it || !it.obj.visible || it.obj.parent !== mv || it.busy) return false;
  }
  return true;
}
let lastPhase = '', lastPhaseSent = 0;
function escState(t) {
  const phase = TAU * FREQ * t / 2; // un'oscillazione completa = 2 alternanze
  const theta = AMP * Math.sin(phase);
  const u = phase / Math.PI;
  const n = Math.floor(u + 0.5);
  const d = (u - n) * Math.PI;
  const w = Math.asin(Math.min(1, WIN / AMP));
  const x = Math.min(1, Math.max(0, (d + w) / (2 * w)));
  const steps = n - 0.5 + x * x * (3 - 2 * x);
  const fork = FORK * Math.max(-1, Math.min(1, theta / WIN)) * -1;
  let ph = 'libero';
  if (Math.abs(d) < w) ph = d < -w * 0.15 ? 'sblocco' : 'impulso';
  return { theta, steps, fork, ph, beat: n };
}
function applyLive(dt, now) {
  if (!live.on) return;
  live.t += dt * live.speed;
  const running = canRun() || live.demo === 'escapement' || live.demo === 'energy';
  if (!running) return;
  const st = escState(live.t);
  const escA = -st.steps * (TAU / 20) / 2;
  const set = (id, a) => {
    const it = items[id];
    if (it && it.obj.parent === mv && !it.busy) it.obj.rotation.y = a;
  };
  set('bilanciere', st.theta);
  const sp = items.spirale;
  if (sp && sp.obj.parent === mv && !sp.busy) {
    sp.obj.rotation.y = st.theta * 0.4;
    const k = 1 + 0.035 * (st.theta / AMP);
    sp.obj.scale.set(k, 1, k);
  }
  set('ancora', st.fork);
  set('ruota_scappamento', escA);
  set('ruota_secondi', -escA / 12);
  set('ruota_terzo', escA / 90);
  set('ruota_centro', -escA / 720);
  set('bariletto', escA / 5760);
  const ro = items.rotore;
  if (ro && ro.obj.visible && ro.obj.parent === mv && !ro.busy && live.speed <= 1.5) ro.obj.rotation.y = 0.5 * Math.sin(live.t * 0.8);
  const ha = items.lancette;
  if (ha && ha.obj.parent === mv && live.demo !== 'keyless') {
    const secs = live.clock0 + Math.floor(live.t * 8) / 8;
    setHands(ha.obj, secs);
  }
  if (st.beat !== live.lastBeat) {
    if (live.lastBeat >= 0 && live.sound && live.speed <= 2) tick(st.beat % 2);
    live.lastBeat = st.beat;
  }
  if (live.demo === 'escapement' && st.ph !== lastPhase && now - lastPhaseSent > 90) {
    lastPhase = st.ph;
    lastPhaseSent = now;
    send({ type: 'phase', phase: st.ph });
  }
}

// suono del tic-tac (sintetizzato)
let actx = null, noiseBuf = null;
function ensureAudio() {
  if (actx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  actx = new AC();
  noiseBuf = actx.createBuffer(1, Math.floor(actx.sampleRate * 0.03), actx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (actx.sampleRate * 0.0025));
}
function tick(alt) {
  if (!actx) return;
  const src = actx.createBufferSource();
  src.buffer = noiseBuf;
  const bp = actx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = alt ? 3600 : 4300;
  bp.Q.value = 2.5;
  const g = actx.createGain();
  g.gain.value = 0.9;
  src.connect(bp).connect(g).connect(actx.destination);
  src.start();
}

// pannello comandi dentro la pagina (serve un tocco vero per l'audio)
const panelEl = document.getElementById('live');
function updatePanel() {
  if (!panelEl) return;
  panelEl.style.display = live.panel ? 'flex' : 'none';
  const pb = document.getElementById('lp-play');
  const sb = document.getElementById('lp-sound');
  const vb = document.getElementById('lp-speed');
  if (pb) pb.textContent = live.on ? '❚❚' : '▶';
  if (sb) sb.textContent = live.sound ? '🔊' : '🔈';
  if (vb) vb.textContent = live.speed >= 1 ? '1×' : (live.speed >= 0.1 ? '⅒' : '1/50');
}
if (panelEl) {
  document.getElementById('lp-play').addEventListener('click', () => { setLive({ on: !live.on }); });
  document.getElementById('lp-sound').addEventListener('click', () => {
    ensureAudio();
    if (actx && actx.state === 'suspended') actx.resume();
    live.sound = !live.sound;
    updatePanel();
  });
  document.getElementById('lp-speed').addEventListener('click', () => {
    live.speed = live.speed >= 1 ? 0.1 : (live.speed >= 0.1 ? 0.02 : 1);
    updatePanel();
  });
}


// ------------------------------------------------------------------ "Come funziona" in 3D
let demoTick = null;
let flow = null; // particelle dell'energia
let barrelDemo = null;
const demoState = { pos: 0, posAnim: 0, turning: false, turnDir: 1, psi: 0, wrist: false, ticking: true, charge: 0.3, slip: 0, flash: 0, sentAt: 0 };

function idsWithout(...skip) { return Object.keys(items).filter((id) => !skip.includes(id)); }

function clearDemo() {
  demoTick = null;
  live.demo = null;
  if (flow) { scene.remove(flow); flow = null; }
  if (barrelDemo) barrelDemo.visible = false;
  mv.visible = true;
  for (const id of ['stelo', 'pignone_scorrevole', 'pignone_carica', 'tiretto', 'bascula', 'ruota_rinvio', 'ruota_minuteria', 'chaussee', 'ruota_ore', 'ruota_datario', 'disco_datario']) {
    const it = items[id];
    if (it) resetObj(it, it.obj);
  }
}

function startDemo(cfg) {
  clearDemo();
  if (!cfg || !cfg.kind) { setLive({ on: false }); return; }
  const k = cfg.kind;
  live.demo = k;
  if (k === 'escapement') {
    const ids = ['platina', 'ruota_scappamento', 'ancora', 'bilanciere', 'spirale', 'ruota_secondi', 'ruota_terzo'];
    applyState({ side: 'ponti', present: ids, focus: ['ruota_scappamento', 'ancora', 'bilanciere'], zoom: 0.8 });
    setLive({ on: true, speed: cfg.speed ?? 0.05, panel: false });
  } else if (k === 'energy') {
    const ids = ['platina', 'bariletto', 'ruota_centro', 'ruota_terzo', 'ruota_secondi', 'ruota_scappamento', 'ancora', 'bilanciere', 'spirale'];
    applyState({ side: 'ponti', present: ids, focus: ids.slice(1), zoom: 0.9 });
    setLive({ on: true, speed: cfg.speed ?? 60, panel: false });
    buildFlow();
  } else if (k === 'keyless') {
    const ids = ['platina', 'stelo', 'tiretto', 'pignone_carica', 'pignone_scorrevole', 'ruota_rinvio', 'bascula', 'chaussee', 'ruota_minuteria', 'ruota_ore', 'ruota_datario', 'lancette'];
    applyState({ side: 'quadrante', present: ids, focus: ['stelo', 'tiretto', 'bascula', 'pignone_scorrevole', 'ruota_rinvio'], zoom: 0.8 });
    setLive({ on: false, panel: false });
    demoState.psi = 0;
    demoTick = keylessTick;
    demoKeyless(cfg);
  } else if (k === 'bridle') {
    setLive({ on: false, panel: false });
    mv.visible = false;
    tray.visible = false;
    matGroup.visible = false;
    buildBarrelDemo();
    barrelDemo.visible = true;
    demoTick = bridleTick;
    const box = new THREE.Box3().setFromObject(barrelDemo);
    const c = box.getCenter(new THREE.Vector3());
    const t0 = controls.target.clone(), p0 = camera.position.clone();
    const end = c.clone().add(new THREE.Vector3(0, 48, 30));
    tween(800, (p) => { controls.target.lerpVectors(t0, c, ease(p)); camera.position.lerpVectors(p0, end, ease(p)); });
  }
}

// --- energia: puntini luminosi lungo il percorso
function buildFlow() {
  const pts = [G.barrel, G.center, G.third, G.fourth, G.escape, G.pallet, G.balance].map((p, i) => new THREE.Vector3(X3(p[0]), 6.2 - i * 0.3, Z3(p[1])));
  const curve = new THREE.CatmullRomCurve3(pts);
  flow = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.95 });
  const n = 26;
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.75, 14, 10), mat);
    m.userData.u = i / n;
    flow.add(m);
  }
  const line = new THREE.Mesh(new THREE.TubeGeometry(curve, 120, 0.22, 6), new THREE.MeshBasicMaterial({ color: 0xf28c38, transparent: true, opacity: 0.45 }));
  flow.add(line);
  flow.userData.curve = curve;
  scene.add(flow);
  demoTick = (dt) => {
    if (!flow) return;
    for (const m of flow.children) {
      if (m.userData.u === undefined) continue;
      m.userData.u = (m.userData.u + dt * 0.12) % 1;
      const p = flow.userData.curve.getPointAt(m.userData.u);
      m.position.copy(p);
      const s = 0.7 + 0.5 * Math.sin((m.userData.u * 12 + performance.now() / 300));
      m.scale.setScalar(s);
    }
  };
}

// --- corona e remontoir
function demoKeyless(cfg) {
  if (cfg.pos !== undefined) demoState.pos = cfg.pos;
  if (cfg.turning !== undefined) demoState.turning = !!cfg.turning;
  if (cfg.dir !== undefined) demoState.turnDir = cfg.dir;
}
function keylessTick(dt) {
  const ds = demoState;
  ds.posAnim += (ds.pos - ds.posAnim) * Math.min(1, dt * 8);
  const turn = ds.turning ? dt * 4 * ds.turnDir : 0;
  ds.psi += turn;
  const stem = items.stelo, clutch = items.pignone_scorrevole, wind = items.pignone_carica;
  resetObj(stem, stem.obj);
  stem.obj.position.x -= 1.5 * ds.posAnim;
  stem.obj.rotation.x = ds.psi;
  resetObj(clutch, clutch.obj);
  const engageSetting = Math.min(1, ds.posAnim);
  clutch.obj.position.x += -1.0 + 2.0 * engageSetting;
  clutch.obj.rotation.x = ds.psi;
  resetObj(wind, wind.obj);
  if (ds.pos === 0) ds.windA = ds.psi;
  wind.obj.rotation.x = ds.windA || 0;
  const tir = items.tiretto, bas = items.bascula;
  resetObj(tir, tir.obj); tir.obj.rotation.y = -0.1 * ds.posAnim;
  resetObj(bas, bas.obj); bas.obj.rotation.y = 0.12 * engageSetting;
  // messa all'ora
  const st = demoState;
  if (ds.pos === 2 && turn) {
    st.setting = (st.setting || 0) + turn;
  }
  if (ds.pos === 1 && turn) {
    st.date = (st.date || 0) + turn;
  }
  const setA = st.setting || 0;
  const rw = items.ruota_rinvio; resetObj(rw, rw.obj); rw.obj.rotation.y = setA * 1.6;
  const mw = items.ruota_minuteria; resetObj(mw, mw.obj); mw.obj.rotation.y = -setA * 0.9;
  const cp = items.chaussee; resetObj(cp, cp.obj); cp.obj.rotation.y = setA * 0.4;
  const hw = items.ruota_ore; resetObj(hw, hw.obj); hw.obj.rotation.y = setA * 0.4 / 12;
  setHands(items.lancette.obj, 10 * 3600 + 10 * 60 + (setA * 0.4 / TAU) * 3600);
  const dw = items.ruota_datario; resetObj(dw, dw.obj); dw.obj.rotation.y = (st.date || 0) * 1.2;
  const dr = items.disco_datario; resetObj(dr, dr.obj);
  const dstep = Math.floor(((st.date || 0) * 1.2) / Math.PI);
  dr.obj.rotation.y = dstep * (TAU / 31);
}

// --- bariletto aperto e briglia
function buildBarrelDemo() {
  if (barrelDemo) return;
  barrelDemo = new THREE.Group();
  const R = 14;
  const drum = mesh(extrude([gearRing(C0, 150, 96)], 0, 0.9, 0.08), MAT.gold());
  barrelDemo.add(drum);
  const floorG = mesh(cyl(R, 0.9, 1.3, 96), MAT.brass());
  barrelDemo.add(floorG);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 4.6, 96, 1, true), phys({ color: 0xd9ad58, metalness: 1, roughness: 0.3, side: THREE.DoubleSide }));
  wall.position.y = 3.6;
  wall.castShadow = true; wall.receiveShadow = true;
  barrelDemo.add(wall);
  const arbor = mesh(cyl(2.0, 0, 7.2, 32), MAT.steel());
  barrelDemo.add(arbor);
  const hook = mesh(new THREE.BoxGeometry(0.9, 2.0, 0.9), MAT.steel());
  hook.position.set(2.2, 3.4, 0);
  barrelDemo.add(hook);
  const sq = mesh(new THREE.BoxGeometry(2.4, 1.2, 2.4), MAT.steel());
  sq.position.y = 6.8;
  barrelDemo.add(sq);
  barrelDemo.userData.arbor = [arbor, hook, sq];
  barrelDemo.position.set(0, 2, 0);
  scene.add(barrelDemo);
  rebuildSpring(0.3, 0);
}
let springMesh = null, bridleMesh = null;
function rebuildSpring(charge, slip) {
  const g = barrelDemo;
  if (springMesh) { g.remove(springMesh); springMesh.geometry.dispose(); }
  if (bridleMesh) { g.remove(bridleMesh); bridleMesh.geometry.dispose(); }
  const turns = 7.5;
  const ri = 8.5 - 5.8 * charge, ro = 13.0 - 5.6 * charge;
  const start = slip - charge * 9;
  const pts = [];
  const N = 520;
  for (let i = 0; i <= N; i++) {
    const t = i / N, a = start + t * turns * TAU, r = ri + (ro - ri) * Math.pow(t, 0.9);
    pts.push(new THREE.Vector3(Math.cos(a) * r, 3.5, Math.sin(a) * r));
  }
  // dall'albero alla prima spira
  pts.unshift(new THREE.Vector3(Math.cos(start) * 2.4, 3.5, Math.sin(start) * 2.4));
  const curve = new THREE.CatmullRomCurve3(pts);
  springMesh = mesh(new THREE.TubeGeometry(curve, 900, 0.16, 6), phys({ color: 0xc9d1dc, metalness: 1, roughness: 0.18 }), false);
  springMesh.scale.y = 1;
  const flat = new THREE.Mesh(springMesh.geometry, springMesh.material);
  void flat;
  springMesh.geometry.scale(1, 1, 1);
  g.add(springMesh);
  // briglia: tratto finale premuto contro la parete
  const endA = start + turns * TAU;
  const bp = [];
  for (let i = 0; i <= 40; i++) {
    const a = endA + (i / 40) * 1.3;
    bp.push(new THREE.Vector3(Math.cos(a) * 13.6, 3.5, Math.sin(a) * 13.6));
  }
  bridleMesh = mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(bp), 60, 0.32, 8), phys({ color: 0xf28c38, metalness: 0.6, roughness: 0.3, emissive: 0x401800 }), false);
  g.add(bridleMesh);
  for (const a of g.userData.arbor) a.rotation.y = -charge * 9;
}
let springDirty = 0;
function bridleTick(dt, now) {
  const ds = demoState;
  const before = ds.charge;
  if (ds.wrist) addCharge(dt * 0.12);
  if (ds.ticking) ds.charge = Math.max(0, ds.charge - dt * 0.012);
  ds.flash = Math.max(0, ds.flash - dt * 1.5);
  if (bridleMesh) {
    bridleMesh.material.emissive.setRGB(0.25 + 0.75 * ds.flash, 0.1 * (1 - ds.flash), 0);
  }
  springDirty += Math.abs(ds.charge - before) + (ds.slipping ? 1 : 0);
  if (springDirty > 0.002) { rebuildSpring(ds.charge, ds.slip); springDirty = 0; }
  ds.slipping = false;
  if (now - ds.sentAt > 180) {
    ds.sentAt = now;
    send({ type: 'bridle', charge: ds.charge, flash: ds.flash });
  }
}
function addCharge(v) {
  const ds = demoState;
  ds.charge += v;
  if (ds.charge > 1) {
    ds.slip += (ds.charge - 1) * 9;
    ds.charge = 1;
    ds.flash = 1;
    ds.slipping = true;
  }
}

// ------------------------------------------------------------------ ciclo
const _v = new THREE.Vector3();
let lastNow = 0;
function loop(now) {
  const dt = lastNow ? Math.min(0.1, (now - lastNow) / 1000) : 0;
  lastNow = now;
  for (let i = tweens.length - 1; i >= 0; i--) {
    const t = tweens[i];
    const p = Math.min(1, (now - t.t0) / t.dur);
    t.fn(p);
    if (p >= 1) {
      tweens.splice(i, 1);
      if (t.done) t.done();
    }
  }
  controls.update();
  applyLive(dt, now);
  if (demoTick) demoTick(dt, now);
  // evidenziazione pulsante
  const pulse = 0.35 + 0.3 * Math.sin(now / 260);
  for (const it of Object.values(items)) {
    const on = highlight.has(it.id) || selected === it.id;
    if (on === !!it._lit && !on) continue;
    forEachMat(it.obj, (mt) => {
      if (!mt.emissive) return;
      if (mt.userData.baseEmissive === undefined) mt.userData.baseEmissive = mt.emissive.getHex();
      if (on) { mt.emissive.setHex(0xf28c38); mt.emissiveIntensity = pulse; }
      else { mt.emissive.setHex(mt.userData.baseEmissive); mt.emissiveIntensity = 1; }
    });
    it._lit = on;
  }
  for (const s of Object.values(screws)) {
    const on = numbered.some((n) => n.id === s.id && n.active);
    if (on === !!s._lit && !on) continue;
    forEachMat(s.outer, (mt) => {
      if (!mt.emissive) return;
      if (mt.userData.baseEmissive === undefined) mt.userData.baseEmissive = mt.emissive.getHex();
      if (on) { mt.emissive.setHex(0xf28c38); mt.emissiveIntensity = pulse; }
      else { mt.emissive.setHex(mt.userData.baseEmissive); mt.emissiveIntensity = 1; }
    });
    s._lit = on;
  }
  if (selected && now > selectedUntil) selected = null;
  renderer.render(scene, camera);
  drawLabels();
  requestAnimationFrame(loop);
}

const labelPool = [];
function drawLabels() {
  const w = window.innerWidth, h = window.innerHeight;
  let used = 0;
  for (const n of numbered) {
    const s = screws[n.id];
    if (!s || !s.outer.visible || s.outer.parent !== mv) continue;
    const p = headWorld(s, 0.4).project(camera);
    if (p.z > 1) continue;
    let el = labelPool[used];
    if (!el) {
      el = document.createElement('div');
      el.className = 'lbl';
      labelsEl.appendChild(el);
      labelPool.push(el);
    }
    el.textContent = n.n;
    el.style.display = 'flex';
    el.classList.toggle('on', !!n.active);
    el.style.transform = `translate(${((p.x + 1) / 2) * w - 13}px, ${((1 - p.y) / 2) * h - 40}px)`;
    used++;
  }
  for (let i = used; i < labelPool.length; i++) labelPool[i].style.display = 'none';
}

// ------------------------------------------------------------------ famiglie di movimento
let smallSec = null; // {hand, dialRing, central}
function applyLayout(cfg) {
  const L = items.lancette && items.lancette.obj;
  const Q = items.quadrante && items.quadrante.obj;
  if (!L || !Q) return;
  const H = L.userData.hands;
  if (!smallSec) {
    const up = -Math.PI / 2;
    const P = G.fourth;
    // lancetta dei secondi piccoli sul perno della ruota dei secondi
    const hand = new THREE.Group();
    hand.position.set(X3(P[0]), 0, Z3(P[1]));
    hand.add(mesh(rel(extrude(bar(polar(P, 22, up + Math.PI), polar(P, 92, up), 5), -8.3, 0.1, 0.02), P), MAT.orange()));
    hand.add(mesh(rel(cyl(0.8, -8.4, -7.6, 16), [500, 500]), MAT.hands()));
    hand.visible = false;
    L.add(hand);
    // quadrantino dei secondi
    const dialRing = new THREE.Group();
    dialRing.add(mesh(extrude(ring(P, 108, 102), -7.66, 0.05, 0.01), MAT.hands(), false));
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU;
      dialRing.add(mesh(extrude(bar(polar(P, 92, a), polar(P, i % 3 === 0 ? 76 : 84, a), 3.2), -7.66, 0.05, 0.01), MAT.hands(), false));
    }
    dialRing.visible = false;
    Q.add(dialRing);
    smallSec = { hand, dialRing, central: H.s };
  }
  const small = !!cfg.smallSeconds;
  smallSec.central.visible = !small;
  smallSec.hand.visible = small;
  smallSec.dialRing.visible = small;
  H.s = small ? smallSec.hand : smallSec.central;
  setHands(L, 10 * 3600 + 10 * 60 + 30);
}

// ------------------------------------------------------------------ API per Flutter
window.W3D = {
  setup(cfg) {
    try {
      for (const d of cfg.screws || []) if (!screws[d.id]) buildScrew(d);
      send({ type: 'setup', items: Object.keys(items), screws: Object.keys(screws) });
    } catch (e) { send({ type: 'error', msg: String(e && e.stack || e) }); }
  },
  show(st) {
    try { if (live.demo) clearDemo(); applyState(st); } catch (e) { send({ type: 'error', msg: String(e && e.stack || e) }); }
  },
  play(action, seq) { play(action, seq); },
  focus(ids, zoom) { focusOn(ids, true, zoom); },
  setXray(v) {
    xray = !!v;
    for (const it of Object.values(items)) setOpacity(it.obj, xray && it.cover ? 0.22 : 1);
  },
  _slow(k) { SPEED = k; },
  /// Adatta lo schema alla famiglia del movimento (es. secondi piccoli invece che centrali).
  layout(cfg) {
    try { applyLayout(cfg || {}); } catch (e) { send({ type: 'error', msg: String(e && e.stack || e) }); }
  },
  live(o) { setLive(o || {}); },
  demo(cfg) {
    try {
      if (cfg && live.demo === cfg.kind) {
        if (cfg.kind === 'keyless') demoKeyless(cfg);
        if (cfg.kind === 'escapement' || cfg.kind === 'energy') setLive({ speed: cfg.speed ?? live.speed });
        if (cfg.kind === 'bridle') {
          if (cfg.wind) addCharge(cfg.wind);
          if (cfg.wrist !== undefined) demoState.wrist = !!cfg.wrist;
          if (cfg.ticking !== undefined) demoState.ticking = !!cfg.ticking;
        }
        return;
      }
      startDemo(cfg);
    } catch (e) { send({ type: 'error', msg: String(e && e.stack || e) }); }
  },
  setQuality(q) {
    try { localStorage.setItem('w3d_quality', q); } catch (e) { /* ignora */ }
    location.reload();
  },
  quality() { return HQ ? 'high' : 'normal'; },
  view(name) {
    if (name === 'top') {
      const t0 = camera.position.clone();
      const d = camera.position.distanceTo(controls.target);
      const end = controls.target.clone().add(new THREE.Vector3(0, d * 0.995, d * 0.1));
      tween(600, (p) => camera.position.lerpVectors(t0, end, ease(p)));
    } else focusOn([], true);
  },
};

init();
