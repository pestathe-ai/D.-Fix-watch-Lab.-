"""Una foto realistica per ogni pezzo, da solo, per il carosello dei passi.
Uso: python parts.py OUTDIR [W H SPP]"""
import math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy
from mathutils import Vector
import movement as M
import full as F
from steps import parse_screws, world_box


def main():
    out = sys.argv[1]
    W = int(sys.argv[2]) if len(sys.argv) > 2 else 800
    H = int(sys.argv[3]) if len(sys.argv) > 3 else 600
    spp = int(sys.argv[4]) if len(sys.argv) > 4 else 40
    os.makedirs(out, exist_ok=True)
    screws, _ = parse_screws()
    screw_ids = {s['id'] for s in screws}
    mats, root, floor = F.build_all(screws)
    sc = bpy.context.scene
    M.lights_camera(sc, target=(0, 0, 4))
    cam = sc.camera
    sc.cycles.device = 'CPU'; sc.cycles.use_denoising = True; sc.cycles.samples = spp
    sc.cycles.max_bounces = 8; sc.cycles.glossy_bounces = 6; sc.cycles.transmission_bounces = 6
    sc.render.engine = 'CYCLES'
    sc.render.resolution_x, sc.render.resolution_y = W, H
    sc.view_settings.view_transform = 'AgX'; sc.view_settings.exposure = -0.35
    sc.render.image_settings.file_format = 'PNG'
    # una sola vite come esempio per la voce "viti"
    one_screw = sorted(i for i in F.ITEMS if i in screw_ids)[:1]
    todo = [i for i in F.ITEMS if i not in screw_ids] + one_screw
    for iid in todo:
        name = 'vite' if iid in screw_ids else iid
        path = os.path.join(out, name + '.png')
        if os.path.exists(path):
            continue
        for k, col in F.ITEMS.items():
            col.hide_render = k != iid
            col.hide_viewport = k != iid
        # i pezzi sotto al quadrante si guardano dal loro lato
        bpy.context.view_layer.update()
        box = world_box([F.ITEMS[iid]], root)
        if box is None:
            continue
        flip = box[1].z < 0 and iid not in ('stelo', 'cassa')
        root.rotation_euler = (0, math.pi if flip else 0, 0)
        bpy.context.view_layer.update()
        box = world_box([F.ITEMS[iid]], root)
        floor.location.z = box[0].z - 0.05
        center = (box[0] + box[1]) / 2
        radius = max(1.2, (box[1] - box[0]).length / 2)
        dist = radius / math.tan(math.radians(10.5)) * 1.15
        elev, az = math.radians(48), math.radians(-28)
        cam.location = center + Vector((dist * math.cos(elev) * math.sin(az), -dist * math.cos(elev) * math.cos(az), dist * math.sin(elev)))
        cam.rotation_euler = (center - cam.location).to_track_quat('-Z', 'Y').to_euler()
        cam.data.dof.use_dof = True
        cam.data.dof.focus_distance = (center - cam.location).length
        cam.data.dof.aperture_fstop = 11
        sc.render.filepath = path
        bpy.ops.render.render(write_still=True)
        print('DONE', name, flush=True)
    print('ALL DONE', flush=True)


if __name__ == '__main__':
    main()
