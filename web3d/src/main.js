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
const texStripes = () => makeTex(256, 256, (g, w, h) => {
  const img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = ((x + y) % 64) / 64;
    const v = 168 + 84 * Math.pow(Math.sin(p * Math.PI), 2);
    const i = (y * w + x) * 4;
    img.data[i] = v; img.data[i + 1] = v + 2; img.data[i + 2] = v + 6; img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
}, 1 / 14);
const texPerlage = () => makeTex(256, 256, (g, w, h) => {
  g.fillStyle = '#c9ced6'; g.fillRect(0, 0, w, h);
  const step = 32;
  for (let row = -1; row <= h / step + 1; row++) for (let col = -1; col <= w / step + 1; col++) {
    const cx = col * step + (row % 2 ? step / 2 : 0), cy = row * step * 0.87;
    const gr = g.createRadialGradient(cx - 4, cy - 4, 1, cx, cy, 22);
    gr.addColorStop(0, '#f2f4f7'); gr.addColorStop(0.55, '#c3c9d2'); gr.addColorStop(1, '#dfe3e9');
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

// ------------------------------------------------------------------ materiali
let TX = null;
function tex() {
  if (!TX) TX = { stripes: texStripes(), perlage: texPerlage(), grain10: texGrain(21), grain5: texGrain(11), grain42: texGrain(86), dial: texDial(), date: texDateRing() };
  return TX;
}
const std = (o) => new THREE.MeshStandardMaterial(o);
const MAT = {
  brass: () => std({ color: 0xd9ad58, metalness: 0.9, roughness: 0.3 }),
  gold: () => std({ color: 0xe0b862, metalness: 0.92, roughness: 0.26 }),
  steel: () => std({ color: 0xd5dbe3, metalness: 0.95, roughness: 0.22 }),
  steelMatte: () => std({ color: 0xc8ced7, metalness: 0.85, roughness: 0.42 }),
  bridge: () => std({ color: 0xf2f4f8, metalness: 0.8, roughness: 0.34, map: tex().stripes }),
  plate: () => std({ color: 0xd2d7df, metalness: 0.75, roughness: 0.48, map: tex().perlage }),
  ruby: () => new THREE.MeshPhysicalMaterial({ color: 0xc2185b, metalness: 0, roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.05, emissive: 0x2a0010 }),
  blue: () => std({ color: 0x2a4cb0, metalness: 0.75, roughness: 0.28 }),
  dark: () => std({ color: 0x141a28, metalness: 0.3, roughness: 0.6 }),
  spring: () => std({ color: 0x6d7c90, metalness: 0.9, roughness: 0.3 }),
  hands: () => std({ color: 0x1d2b4a, metalness: 0.6, roughness: 0.35 }),
  orange: () => std({ color: 0xf28c38, metalness: 0.2, roughness: 0.4, emissive: 0x6a2a00 }),
  grain: (t) => std({ color: 0xffffff, metalness: 0.9, roughness: 0.3, map: t }),
  dial: () => std({ color: 0xffffff, metalness: 0, roughness: 0.55, map: tex().dial }),
  dateRing: () => std({ color: 0xffffff, metalness: 0, roughness: 0.6, map: tex().date }),
  heavy: () => std({ color: 0x9aa1ab, metalness: 0.9, roughness: 0.35 }),
  case: () => std({ color: 0xe2e6ec, metalness: 1.0, roughness: 0.16 }),
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
  obj.userData = { id, part };
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
    const stem = mesh(cyl(0.85, 0, 18, 16), MAT.steel());
    stem.rotation.z = Math.PI / 2;
    stem.position.set(X3(860), STEM_Y, 0);
    g.add(stem);
    const crownG = extrude([gearRing(C0, 46, 44, 0, 5)], 0, 3.0, 0.3);
    crownG.translate(0, -1.5, 0);
    const crown = mesh(crownG, MAT.case());
    crown.rotation.z = Math.PI / 2;
    crown.position.set(X3(1050), STEM_Y, 0);
    g.add(crown);
    const cap = mesh(cyl(3.6, 0, 0.4, 32), MAT.case());
    cap.rotation.z = -Math.PI / 2;
    cap.position.set(X3(1050) - 1.5, STEM_Y, 0);
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
    const geo = extrude([gearRing(C0, r, 10)], -len / 2, len, 0.04);
    const m = mesh(geo, MAT.steel());
    m.rotation.z = Math.PI / 2;
    m.position.set(X3(pt[0]), STEM_Y, Z3(pt[1]));
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
    const hourA = -Math.PI / 2 - Math.PI / 3, minA = -Math.PI / 2 + Math.PI / 3, secA = Math.PI / 2;
    g.add(mesh(extrude(taper(C0, polar(C0, 250, hourA), 30, 10), -8.2, 0.2, 0.03), MAT.hands()));
    g.add(mesh(extrude(taper(C0, polar(C0, 370, minA), 22, 8), -8.7, 0.2, 0.03), MAT.hands()));
    g.add(mesh(extrude(bar(polar(C0, 80, secA + Math.PI), polar(C0, 400, secA), 6), -9.1, 0.12, 0.02), MAT.orange()));
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
  outer.add(spin);
  outer.name = def.id;
  outer.userData = { id: def.id, part: 'viti' };
  screws[def.id] = { id: def.id, item: res(def.item), lh: !!def.lh, outer, spin, r, base: { p: outer.position.clone(), q: outer.quaternion.clone() } };
  mv.add(outer);
}

// ------------------------------------------------------------------ scena
let renderer, scene, camera, controls, mv, tray, driver, needle, arrow;
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
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch (e) {
    send({ type: 'nogl', msg: String(e) });
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.92;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdfe3ea);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

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
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = -62; key.shadow.camera.right = 62;
  key.shadow.camera.top = 62; key.shadow.camera.bottom = -62;
  key.shadow.camera.near = 10; key.shadow.camera.far = 260;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  scene.add(key);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x7f8798, 0.55));

  const floor = new THREE.Mesh(new THREE.CircleGeometry(170, 96), std({ color: 0x22304d, metalness: 0, roughness: 0.95 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -16;
  floor.receiveShadow = true;
  scene.add(floor);

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
  for (const it of Object.values(items)) {
    resetObj(it, it.obj);
    if (it.id === 'cricchetto' || it.id === 'rocchetto_cricco' || it.id === 'racchetta') resetObj(it, it.obj);
    it.obj.visible = isPresent(it.id);
    setOpacity(it.obj, xray && it.cover ? 0.22 : 1);
  }
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

async function liftItems(ids, down) {
  const objs = [...new Set(ids.map(res))].map((id) => items[id]).filter(Boolean);
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
      }
    } catch (e) {
      if (e === ABORT) { send({ type: 'aborted', seq }); return; }
      send({ type: 'error', msg: String(e && e.stack || e) });
    }
    send({ type: 'done', seq });
  });
}

// ------------------------------------------------------------------ ciclo
const _v = new THREE.Vector3();
function loop(now) {
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

// ------------------------------------------------------------------ API per Flutter
window.W3D = {
  setup(cfg) {
    try {
      for (const d of cfg.screws || []) if (!screws[d.id]) buildScrew(d);
      send({ type: 'setup', items: Object.keys(items), screws: Object.keys(screws) });
    } catch (e) { send({ type: 'error', msg: String(e && e.stack || e) }); }
  },
  show(st) {
    try { applyState(st); } catch (e) { send({ type: 'error', msg: String(e && e.stack || e) }); }
  },
  play(action, seq) { play(action, seq); },
  focus(ids, zoom) { focusOn(ids, true, zoom); },
  setXray(v) {
    xray = !!v;
    for (const it of Object.values(items)) setOpacity(it.obj, xray && it.cover ? 0.22 : 1);
  },
  _i() { return { driver, screws, scene, camera, mv, arrow, items }; },
  _slow(k) { SPEED = k; },
  _debug() { return { driver: driver.visible, dpos: driver.position.toArray(), tweens: tweens.length, arrow: arrow.visible, cam: camera.position.toArray(), tgt: controls.target.toArray() }; },
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
