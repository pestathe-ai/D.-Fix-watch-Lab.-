"""Calcola un'immagine fotorealistica per ogni passo della guida.
Uso: python steps.py OUTDIR [W H SPP] [solo,questi,passi]"""
import json, math, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageChops
import movement as M
import full as F

ROOT = '/home/claude/d-fix-watch-lab'

# ------------------------------------------------------------------ dati della guida (letti dal codice Dart)
def read(p): return open(os.path.join(ROOT, p)).read()

def parse_steps():
    src = read('lib/data/steps.dart')
    body = src[src.index('const List<ServiceStep> universalSteps'):]
    out = []
    for m in re.finditer(r"ServiceStep\(\s*id: '([^']+)',(.*?)\n  \),", body, re.S):
        out.append((m.group(1), 'Applies.automaticOnly' in m.group(2)))
    return out

def parse_ops():
    src = read('lib/art/scene_steps.dart')
    body = src[src.index('const Map<String, SceneOp> sceneOps'):src.index('};', src.index('const Map<String, SceneOp> sceneOps'))]
    ops = {}
    for m in re.finditer(r"'(\w+)': SceneOp\(Side\.(\w+)(.*?)\),\n", body, re.S):
        rest = m.group(3)
        def lst(key):
            mm = re.search(key + r": \[([^\]]*)\]", rest)
            return re.findall(r"'([^']+)'", mm.group(1)) if mm else []
        ops[m.group(1)] = dict(side=m.group(2), remove=lst('remove'), add=lst('add'), highlight=lst('highlight'))
    return ops

def parse_screws():
    src = read('lib/art/actions.dart')
    geo = {'Geo.cockFoot': (815, 728), 'Geo.crownWheel': (780, 410), 'Geo.barrel': (640, 330), 'Geo.click': (548, 214),
           'Geo.jumper': (620, 300), 'Geo.settingLeverPivot': (820, 405)}
    out = []
    for m in re.finditer(r"ScrewDef\('([^']+)', '([^']+)', (Offset\((\d+), (\d+)\)|Geo\.\w+), (\d+)(, leftHand: true)?\)", src):
        x, y = (int(m.group(4)), int(m.group(5))) if m.group(4) else geo[m.group(3)]
        out.append(dict(id=m.group(1), item=m.group(2), x=x, y=y, r=int(m.group(6)), lh=bool(m.group(7))))
    lw = dict(re.findall(r"'(\w+)': '(\w+)',", src[src.index('const Map<String, String> liftWith'):src.index('};', src.index('const Map<String, String> liftWith'))]))
    return out, lw

def scene_ids():
    s = read('lib/art/scene.dart')
    ids = set(re.findall(r"id: '([a-z_0-9]+)'", s)) | set(re.findall(r"_wheel\('([a-z_0-9]+)'", s))
    for a, b in re.findall(r"side == Side.ponti \? '([a-z_]+)' : '([a-z_]+)'", s):
        ids |= {a, b}
    ids |= set(re.findall(r"\('(invertitore_\d)'", s))
    return ids

# ------------------------------------------------------------------ stati dei passi
def plan():
    steps = parse_steps()
    ops = parse_ops()
    screws, lift_with = parse_screws()
    items = scene_ids()
    sof = {}
    for s in screws:
        sof.setdefault(s['item'], []).append(s['id'])
    present = items | {s['id'] for s in screws}
    jobs = []
    for sid, _auto in steps:
        op = ops.get(sid)
        before = set(present)
        if op:
            for i in op['remove']:
                present.discard(i)
                for v in sof.get(i, []): present.discard(v)
            for i in op['add']:
                present.add(i)
                for v in sof.get(i, []): present.add(v)
        if not op:
            continue
        if op['add']:
            state, hl = set(present), op['add']
            order = [v for i in op['add'] for v in sof.get(i, [])]
        else:
            state, hl = before, op['remove'] + op['highlight']
            order = [v for i in op['remove'] for v in sof.get(i, []) if v in before]
        jobs.append(dict(id=sid, side=op['side'], state=sorted(state), highlight=hl, numbered=order))
    return jobs, screws

# ------------------------------------------------------------------ render
def visible_set(state):
    return {F.res(i) for i in state}

def world_box(cols, root):
    mn = Vector((1e9, 1e9, 1e9)); mx = Vector((-1e9, -1e9, -1e9)); ok = False
    dg = bpy.context.evaluated_depsgraph_get()
    for col in cols:
        for ob in col.objects:
            if ob.hide_render or ob.type not in ('MESH', 'CURVE', 'FONT'):
                continue
            ev = ob.evaluated_get(dg)
            for corner in ev.bound_box:
                p = ob.matrix_world @ Vector(corner)
                mn = Vector(map(min, mn, p)); mx = Vector(map(max, mx, p)); ok = True
    return (mn, mx) if ok else None

def render_job(job, outdir, W, H, spp, sc, root, floor, cam):
    vis = visible_set(job['state'])
    for iid, col in F.ITEMS.items():
        col.hide_render = iid not in vis
        col.hide_viewport = iid not in vis
    root.rotation_euler = (0, math.pi if job['side'] == 'quadrante' else 0, 0)
    bpy.context.view_layer.update()
    allbox = world_box([c for i, c in F.ITEMS.items() if i in vis], root)
    floor.location.z = (allbox[0].z if allbox else -3) - 0.05
    hl = [F.res(i) for i in job['highlight'] if F.res(i) in vis]
    fb = world_box([F.ITEMS[i] for i in hl], root) if hl else None
    box = fb or allbox
    center = (box[0] + box[1]) / 2
    radius = max(9.0, (box[1] - box[0]).length / 2)
    if fb:  # un po' di contesto attorno al pezzo
        radius = max(radius * 1.12, 15)
    dist = radius / math.tan(math.radians(10.5)) * 1.05
    elev, az = math.radians(56), math.radians(-24)
    cam.location = center + Vector((dist * math.cos(elev) * math.sin(az), -dist * math.cos(elev) * math.cos(az), dist * math.sin(elev)))
    cam.rotation_euler = (center - cam.location).to_track_quat('-Z', 'Y').to_euler()
    cam.data.dof.use_dof = True
    cam.data.dof.focus_distance = (center - cam.location).length
    cam.data.dof.aperture_fstop = 8 if fb else 14
    # immagine fotorealistica
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = spp
    sc.render.resolution_x, sc.render.resolution_y = W, H
    base = os.path.join(outdir, job['id'] + '_base.png')
    sc.render.filepath = base
    sc.render.film_transparent = False
    if not (os.environ.get('REUSE') and os.path.exists(base)):
        bpy.ops.render.render(write_still=True)
    # maschera del pezzo evidenziato (Workbench, senza sfocatura)
    mask_path = None
    if hl:
        sc.render.engine = 'BLENDER_WORKBENCH'
        sh = sc.display.shading
        sh.light = 'FLAT'; sh.color_type = 'OBJECT'
        for iid, col in F.ITEMS.items():
            for ob in col.objects:
                ob.color = (1, 1, 1, 1) if iid in hl else (0, 0, 0, 1)
        floor.color = (0, 0, 0, 1)
        cam.data.dof.use_dof = False
        sc.render.film_transparent = False
        sc.display_settings.display_device = 'sRGB'
        old_vt = sc.view_settings.view_transform
        sc.view_settings.view_transform = 'Standard'
        mask_path = os.path.join(outdir, job['id'] + '_mask.png')
        sc.render.filepath = mask_path
        bpy.ops.render.render(write_still=True)
        sc.view_settings.view_transform = old_vt
        cam.data.dof.use_dof = True
    # numeri delle viti
    labels = []
    for k, vid in enumerate(job['numbered']):
        tip = F.SCREW_TIPS.get(vid)
        if tip is None or vid not in vis:
            continue
        wp = root.matrix_world @ tip
        # salta le viti nascoste da altri pezzi
        dg = bpy.context.evaluated_depsgraph_get()
        dirv = (wp - cam.location)
        hit, loc, _n, _i, hob, _m = sc.ray_cast(dg, cam.location, dirv.normalized(), distance=dirv.length + 1)
        if hit and (loc - cam.location).length < dirv.length - 0.05:
            owner = hob.original if hasattr(hob, 'original') else hob
            if F.ITEMS[vid] not in owner.users_collection:
                continue
        p = world_to_camera_view(sc, cam, wp)
        labels.append((k + 1, p.x * W, (1 - p.y) * H))
    compose(base, mask_path, labels, os.path.join(outdir, job['id'] + '.png'), W, H)

def compose(base, mask_path, labels, out, W, H):
    im = Image.open(base).convert('RGB')
    if mask_path:
        m = Image.open(mask_path).convert('L').point(lambda v: 255 if v > 128 else 0)
        orange = Image.new('RGB', im.size, (242, 140, 56))
        tinted = Image.blend(im, orange, 0.16)
        im = Image.composite(tinted, im, m)
        edge = ImageChops.subtract(m.filter(ImageFilter.MaxFilter(7)), m)
        glow = edge.filter(ImageFilter.GaussianBlur(4))
        im = Image.composite(orange, im, glow.point(lambda v: min(255, v * 2)))
        im = Image.composite(Image.new('RGB', im.size, (255, 170, 90)), im, edge.point(lambda v: 200 if v > 0 else 0))
    d = ImageDraw.Draw(im)
    try:
        font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', int(H * 0.028))
    except Exception:
        font = ImageFont.load_default()
    R = int(H * 0.024)
    for n, x, y in labels:
        cx, cy = x + R * 0.9, y - R * 1.6
        d.line([(x, y), (cx, cy)], fill=(255, 255, 255), width=3)
        d.ellipse([cx - R - 3, cy - R - 3, cx + R + 3, cy + R + 3], fill=(255, 255, 255))
        d.ellipse([cx - R, cy - R, cx + R, cy + R], fill=(242, 140, 56))
        d.text((cx, cy), str(n), fill=(255, 255, 255), font=font, anchor='mm')
    im.save(out)

def main():
    outdir = sys.argv[1]
    W = int(sys.argv[2]) if len(sys.argv) > 2 else 1024
    H = int(sys.argv[3]) if len(sys.argv) > 3 else 768
    spp = int(sys.argv[4]) if len(sys.argv) > 4 else 64
    only = sys.argv[5].split(',') if len(sys.argv) > 5 and sys.argv[5] else None
    os.makedirs(outdir, exist_ok=True)
    jobs, screws = plan()
    json.dump(jobs, open(os.path.join(outdir, 'plan.json'), 'w'), indent=1)
    mats, root, floor = F.build_all(screws)
    sc = bpy.context.scene
    M.lights_camera(sc, target=(0, 0, 4))
    cam = sc.camera
    sc.cycles.device = 'CPU'; sc.cycles.use_denoising = True
    sc.cycles.max_bounces = 8; sc.cycles.glossy_bounces = 6; sc.cycles.transmission_bounces = 6
    sc.view_settings.view_transform = 'AgX'
    sc.view_settings.exposure = -0.35
    sc.render.image_settings.file_format = 'PNG'
    for job in jobs:
        if only and job['id'] not in only:
            continue
        if os.path.exists(os.path.join(outdir, job['id'] + '.png')) and not only:
            print('SKIP', job['id'], flush=True)
            continue
        render_job(job, outdir, W, H, spp, sc, root, floor, cam)
        print('DONE', job['id'], flush=True)
    print('ALL DONE', flush=True)

if __name__ == '__main__':
    main()
