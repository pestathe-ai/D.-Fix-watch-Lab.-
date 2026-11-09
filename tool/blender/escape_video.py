"""Video fotorealistico in loop dello scappamento (un'oscillazione completa del bilanciere).
Uso: python escape_video.py OUTDIR [frames W H spp]"""
import math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from mathutils import Vector
import movement as M
import full as F
from movement import BX, BY, G
from steps import parse_screws

TAU = math.tau
AMP, WIN, FORK = 4.6, 0.42, 0.16

def esc_state(phase):
    theta = AMP * math.sin(phase)
    u = phase / math.pi
    n = math.floor(u + 0.5)
    d = (u - n) * math.pi
    w = math.asin(min(1, WIN / AMP))
    x = min(1, max(0, (d + w) / (2 * w)))
    steps = n - 0.5 + x * x * (3 - 2 * x)
    fork = -FORK * max(-1, min(1, theta / WIN))
    return theta, steps, fork

def pivot(item, pt):
    e = bpy.data.objects.new('pv_' + item, None)
    e.location = (BX(pt[0]), BY(pt[1]), 0)
    bpy.context.scene.collection.objects.link(e)
    bpy.context.view_layer.update()
    for ob in F.ITEMS[item].objects:
        mw = ob.matrix_world.copy()
        ob.parent = e
        ob.matrix_parent_inverse = e.matrix_world.inverted()
        ob.matrix_world = mw
    bpy.context.view_layer.update()
    return e

def main():
    out = sys.argv[1]
    frames = int(sys.argv[2]) if len(sys.argv) > 2 else 48
    W = int(sys.argv[3]) if len(sys.argv) > 3 else 640
    H = int(sys.argv[4]) if len(sys.argv) > 4 else 480
    spp = int(sys.argv[5]) if len(sys.argv) > 5 else 32
    os.makedirs(out, exist_ok=True)
    screws, _ = parse_screws()
    F.build_all(screws)
    keep = {'platina', 'ruota_scappamento', 'ancora', 'bilanciere', 'spirale', 'ruota_secondi'}
    for iid, col in F.ITEMS.items():
        col.hide_render = iid not in keep
    sc = bpy.context.scene
    floor = bpy.data.objects['floor']; floor.location.z = -3.05
    target = Vector(((BX(G['escape'][0]) + BX(G['balance'][0])) / 2 + 1.0, (BY(G['escape'][1]) + BY(G['balance'][1])) / 2, 4.5))
    M.lights_camera(sc, target=tuple(target), dist=88, elev=60, az=-12, lens=85, fstop=9, focus=tuple(target))
    # perlage alla scala giusta per il primo piano
    pm = bpy.data.materials['perlage']
    for nd in pm.node_tree.nodes:
        if nd.type == 'TEX_VORONOI':
            nd.inputs['Scale'].default_value = 0.9
        if nd.type == 'MATH' and nd.operation == 'MULTIPLY':
            nd.inputs[1].default_value = 70
        if nd.type == 'BUMP':
            nd.inputs['Strength'].default_value = 0.12
    if os.environ.get('DEBUG'):
        for iid in keep:
            print('COL', iid, [(o.name, o.type, tuple(round(v, 2) for v in o.matrix_world.translation)) for o in F.ITEMS[iid].objects][:4])
    sc.cycles.device = 'CPU'; sc.cycles.use_denoising = True; sc.cycles.samples = spp
    sc.cycles.max_bounces = 8; sc.cycles.glossy_bounces = 6; sc.cycles.transmission_bounces = 6
    sc.render.engine = 'CYCLES'
    sc.render.resolution_x, sc.render.resolution_y = W, H
    sc.view_settings.view_transform = 'AgX'; sc.view_settings.exposure = -0.35
    sc.render.image_settings.file_format = 'PNG'
    pe = pivot('ruota_scappamento', G['escape'])
    pp = pivot('ancora', G['pallet'])
    pb = pivot('bilanciere', G['balance'])
    ps = pivot('spirale', G['balance'])
    pf = pivot('ruota_secondi', G['fourth'])
    for f in range(frames):
        path = os.path.join(out, f'f{f:03d}.png')
        if os.path.exists(path):
            continue
        phase = TAU * f / frames
        theta, steps, fork = esc_state(phase)
        escA = -steps * (TAU / 20) / 2
        pe.rotation_euler = (0, 0, escA)
        pp.rotation_euler = (0, 0, fork)
        pb.rotation_euler = (0, 0, theta)
        ps.rotation_euler = (0, 0, theta * 0.4)
        k = 1 + 0.035 * theta / AMP
        ps.scale = (k, k, 1)
        pf.rotation_euler = (0, 0, -escA / 12)
        sc.render.filepath = path
        bpy.ops.render.render(write_still=True)
        print('FRAME', f, flush=True)
    print('ALL DONE', flush=True)

if __name__ == '__main__':
    main()
