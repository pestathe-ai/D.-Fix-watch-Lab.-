"""Movimento completo fotorealistico, un pezzo per collezione (stessi id dell'app).
Schema generico e originale (calibro di fantasia "D. CAL. 01")."""
import math, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy, bmesh
from mathutils import Vector, Matrix
from shapely.geometry import Point, Polygon
from shapely.ops import unary_union
import movement as M
from movement import BX, BY, polar, circle, taper, bar, gear_ring, spoke_holes, wheel_poly, soften, G

TAU = math.tau
STEM_Z = -3.9
SCREW_FACE = {  # come in web3d/src/main.js
    'ponte_treno': (7.4, 1), 'ponte_ancora': (7.4, 1), 'ponte_bariletto': (7.4, 1), 'ponte_bilanciere': (8.9, 1),
    'rocchetto_cricco': (8.2, 1), 'ruota_carica': (8.2, 1), 'cricchetto': (8.0, 1), 'ponte_automatico': (10.9, 1),
    'rotore': (13.8, 1), 'cassa': (0.6, 1), 'molla_tiretto': (-6.0, -1), 'tiretto': (-3.55, -1),
    'placca_calendario': (-6.6, -1), 'saltarello': (-5.95, -1),
}
ALIAS = {'p_platina': 'platina', 'q_platina': 'platina', 'p_stelo': 'stelo', 'q_stelo': 'stelo', 'p_cassa': 'cassa', 'q_cassa': 'cassa'}
def res(i): return ALIAS.get(i, i)

ITEMS = {}       # id -> collection
SCREW_TIPS = {}  # id vite -> punto (coordinate locali del movimento) della testa

def begin(item_id):
    col = bpy.data.collections.new(item_id)
    bpy.context.scene.collection.children.link(col)
    lc = bpy.context.view_layer.layer_collection.children[col.name]
    bpy.context.view_layer.active_layer_collection = lc
    ITEMS[item_id] = col
    return col

def shp(name, geom, z0, h, mat, bevel=0.12, origin=None):
    return M.shape_obj(name, geom, z0, h, mat, bevel, origin)

def cyl(name, x, y, r, z0, z1, mat, verts=48, bevel=0.0):
    return M.cyl(name, x, y, r, z0, z1, mat, verts, bevel)

def box(name, loc, size, rot_z, mat, bevel=0.05):
    me = bpy.data.meshes.new(name); bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1.0); bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me); ob.location = loc; ob.scale = size; ob.rotation_euler = (0, 0, rot_z)
    if bevel:
        b = ob.modifiers.new('b', 'BEVEL'); b.width = bevel; b.segments = 2
    me.materials.append(mat); bpy.context.collection.objects.link(ob)
    return ob

def tube_x(name, x0, x1, z, r, mat, y=0.0, verts=32):
    """Cilindro lungo l'asse X (stelo, pignoni)."""
    me = bpy.data.meshes.new(name); bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=verts, radius1=r, radius2=r, depth=abs(x1 - x0))
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me)
    ob.location = ((x0 + x1) / 2, y, z); ob.rotation_euler = (0, math.pi / 2, 0)
    for p in me.polygons: p.use_smooth = True
    me.materials.append(mat); bpy.context.collection.objects.link(ob)
    return ob

def gear_x(name, cx_blender, y, z, r, length, mat, teeth=10):
    """Pignone con denti, asse lungo X."""
    geom = Polygon(gear_ring((500, 500), r, teeth))
    ob = shp(name, geom, -length / 2, length, mat, 0.03)
    ob.location = (cx_blender, y, z)
    ob.rotation_euler = (0, math.pi / 2, 0)
    return ob

def screw(sid, pt, item, r, mats, slot):
    z, d = SCREW_FACE[item]
    zz0, zz1 = (z, z + 0.7) if d > 0 else (z - 0.7, z)
    head = cyl('screw_' + sid, pt[0], pt[1], r, zz0, zz1, mats['blue'], 64, 0.12)
    me = bpy.data.meshes.new('slot'); bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1.0); bm.to_mesh(me); bm.free()
    cutter = bpy.data.objects.new('slotcut', me)
    cutter.scale = (r * 2.4, r * 0.32, 0.6)
    cutter.location = (BX(pt[0]), BY(pt[1]), (zz1 + 0.05) if d > 0 else (zz0 - 0.05))
    cutter.rotation_euler = (0, 0, slot)
    bpy.context.collection.objects.link(cutter); cutter.hide_render = True; cutter.hide_viewport = True
    bo = head.modifiers.new('slot', 'BOOLEAN'); bo.object = cutter; bo.operation = 'DIFFERENCE'
    head.modifiers.move(1, 0)
    SCREW_TIPS[sid] = Vector((BX(pt[0]), BY(pt[1]), zz1 + 0.1 if d > 0 else zz0 - 0.1))

def jewel(pt, z, r, mats, down=False):
    if not down:
        return M.jewel(pt, z, r, mats)
    cyl('sink', pt[0], pt[1], r * 1.75, z - 0.04, z + 0.02, mats['polish'], 64, 0.03)
    cyl('ruby', pt[0], pt[1], r, z - 0.12, z + 0.05, mats['ruby'], 48, 0.04)

def build_all(screw_defs):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    mats = dict(
        cotes=M.mat_cotes(), perlage=M.mat_perlage(), ruby=M.mat_ruby(),
        gold=M.mat_metal('gold', (1.0, 0.74, 0.36), 0.26, aniso=0.6),
        steel=M.mat_metal('steel', (0.86, 0.87, 0.89), 0.12),
        polish=M.mat_metal('polish', (0.9, 0.91, 0.93), 0.04),
        matte=M.mat_metal('matte', (0.78, 0.8, 0.83), 0.38),
        blue=M.mat_metal('blue', (0.1, 0.25, 0.85), 0.2, thin=300),
        spring=M.mat_metal('spring', (0.18, 0.22, 0.42), 0.15, thin=250),
        soleil=M.mat_metal('soleil', (0.88, 0.89, 0.91), 0.16, aniso=0.9),
        heavy=M.mat_metal('heavy', (0.55, 0.57, 0.6), 0.3),
        case=M.mat_metal('case', (0.92, 0.93, 0.95), 0.07),
        dark=M.mat_plain('dark', (0.02, 0.02, 0.02), 0.5),
        engr=M.mat_metal('engr', (1.0, 0.72, 0.3), 0.35),
        dial=M.mat_plain('dial', (0.93, 0.91, 0.86), 0.45),
        ink=M.mat_plain('ink', (0.05, 0.07, 0.14), 0.4, 0.3),
        hands=M.mat_metal('hands', (0.06, 0.09, 0.2), 0.2),
        orange=M.mat_plain('orange', (0.95, 0.42, 0.08), 0.35),
        mat=M.mat_mat(),
    )
    c = (500, 500)
    # ---------------- lato ponti
    begin('platina')
    shp('platina', circle(c, 440, 64), -3, 3, mats['perlage'], bevel=0.3)
    begin('bariletto')
    shp('barrel_teeth', Polygon(gear_ring(G['barrel'], 135, 90)), 0.5, 0.6, mats['gold'], 0.04, origin=G['barrel'])
    cyl('barrel', *G['barrel'], 12.4, 1.1, 4.6, mats['gold'], 96, 0.15)
    cyl('barrel_arbor', *G['barrel'], 2.2, 0, 7.4, mats['steel'], 32)
    for key, r, teeth, z, pin in (('center', 115, 80, 1.0, 18), ('third', 85, 75, 2.0, 14), ('fourth', 72, 70, 3.0, 12)):
        begin({'center': 'ruota_centro', 'third': 'ruota_terzo', 'fourth': 'ruota_secondi'}[key])
        shp('w_' + key, wheel_poly(G[key], r, teeth), z, 0.42, mats['gold'], 0.05, origin=G[key])
        shp('p_' + key, Polygon(gear_ring(G[key], pin, 10)), max(0.3, z - 1.0), 1.0, mats['polish'], 0.03, origin=G[key])
        cyl('arb_' + key, *G[key], 0.35, -8.2 if key == 'center' else 0, 7.6, mats['polish'], 16)
        cyl('hub_' + key, *G[key], r * 0.22 * M.S, z - 0.05, z + 0.6, mats['gold'], 32, 0.05)
    begin('ruota_scappamento')
    pts = []
    for i in range(20):
        a = i * TAU / 20; pt = TAU / 20
        pts += [polar(G['escape'], 37, a), polar(G['escape'], 44, a + pt * 0.18), polar(G['escape'], 50, a + pt * 0.48),
                polar(G['escape'], 50.5, a + pt * 0.62), polar(G['escape'], 47, a + pt * 0.7), polar(G['escape'], 38, a + pt * 0.78)]
    esc = Polygon(pts)
    for h in spoke_holes(G['escape'], 32, 11, 4, 6):
        esc = esc.difference(h)
    shp('escape', esc, 3.85, 0.32, mats['polish'], 0.03, origin=G['escape'])
    cyl('esc_pinion', *G['escape'], 0.9, 3.0, 3.86, mats['polish'], 24)
    cyl('esc_arbor', *G['escape'], 0.3, 0, 7.6, mats['polish'], 16)
    begin('ancora')
    body = unary_union([taper(G['pallet'], G['fork_tip'], 30, 14), taper(G['pallet'], G['entry'], 24, 14), taper(G['pallet'], G['exit'], 24, 14), circle(G['pallet'], 18)])
    shp('pallet', soften(body, 3), 3.85, 0.38, mats['polish'], 0.04, origin=G['pallet'])
    for pt in (G['entry'], G['exit']):
        dx, dy = BX(pt[0]) - BX(G['pallet'][0]), BY(pt[1]) - BY(G['pallet'][1])
        box('stone', (BX(G['pallet'][0]) + dx * 1.04, BY(G['pallet'][1]) + dy * 1.04, 4.05), (1.7, 0.55, 0.6), math.atan2(dy, dx), mats['ruby'], 0.06)
    d = (G['balance'][0] - G['pallet'][0], G['balance'][1] - G['pallet'][1]); L = math.hypot(*d); n = (-d[1] / L, d[0] / L)
    for side in (-1, 1):
        a = (G['fork_tip'][0] + n[0] * 7 * side, G['fork_tip'][1] + n[1] * 7 * side)
        b2 = (a[0] + d[0] / L * 12 + n[0] * 3 * side, a[1] + d[1] / L * 12 + n[1] * 3 * side)
        shp('horn', bar(a, b2, 5), 3.85, 0.38, mats['polish'], 0.03)
    cyl('pal_arbor', *G['pallet'], 0.3, 0, 7.6, mats['polish'], 16)
    begin('bilanciere')
    bal = Polygon(list(circle(G['balance'], 100, 64).exterior.coords))
    for h in spoke_holes(G['balance'], 86, 15, 3, 13, 0.4):
        bal = bal.difference(h)
    shp('balance', bal, 4.7, 0.6, mats['gold'], 0.08, origin=G['balance'])
    for i in range(10):
        cyl('bscrew', *polar(G['balance'], 101, i / 10 * TAU), 0.42, 4.7, 5.3, mats['gold'], 16)
    cyl('staff', *G['balance'], 0.3, 3.4, 9.0, mats['polish'], 16)
    cyl('roller', *G['balance'], 2.1, 3.9, 4.25, mats['polish'], 48, 0.04)
    pin = polar(G['balance'], 16, math.atan2(G['pallet'][1] - G['balance'][1], G['pallet'][0] - G['balance'][0]))
    cyl('ipin', *pin, 0.33, 3.55, 4.3, mats['ruby'], 16)
    begin('spirale')
    cu = bpy.data.curves.new('hair', 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = 0.05; cu.bevel_resolution = 2
    sp = cu.splines.new('POLY'); nn = 1400; sp.points.add(nn - 1)
    for i in range(nn):
        t = i / (nn - 1); a = t * 11 * TAU; r = 1.6 + 4.6 * t
        sp.points[i].co = (BX(G['balance'][0]) + math.cos(a) * r, BY(G['balance'][1]) + math.sin(a) * r, 5.75, 1)
    ob = bpy.data.objects.new('hair', cu); ob.data.materials.append(mats['spring']); bpy.context.collection.objects.link(ob)
    cyl('collet', *G['balance'], 0.9, 5.4, 6.0, mats['polish'], 32, 0.05)
    # ponti
    begin('ponte_treno')
    train = unary_union([
        circle(G['center'], 46), circle(G['third'], 40), circle(G['fourth'], 40), circle(G['escape'], 36),
        bar(G['center'], G['third'], 58), bar(G['third'], G['fourth'], 54), bar(G['fourth'], G['escape'], 50),
        bar(G['center'], G['escape'], 50), circle((420, 560), 27), circle((560, 640), 27), circle((400, 680), 27)])
    train = train.difference(Polygon([(478, 612), (515, 626), (512, 668), (484, 662)]).buffer(10, quad_segs=16))
    shp('train_bridge', soften(train, 14), 5.4, 2.0, mats['cotes'], 0.22)
    for k in ('center', 'third', 'fourth', 'escape'):
        jewel(G[k], 7.4, 0.95, mats)
    for p in ((420, 560), (560, 640), (400, 680)):
        cyl('pillar', *p, 1.6, 0, 5.4, mats['matte'], 24)
    M.text('D. CAL. 01', (500, 715), 7.4, 1.4, math.radians(-28), mats['engr'])
    begin('ponte_ancora')
    shp('pallet_bridge', soften(bar((G['pallet'][0] - 30, G['pallet'][1] + 35), (G['pallet'][0] + 25, G['pallet'][1] - 30), 44), 6), 5.4, 2.0, mats['cotes'], 0.2)
    jewel(G['pallet'], 7.4, 0.75, mats)
    cyl('pillar', 636, 718, 1.4, 0, 5.4, mats['matte'], 24)
    begin('ponte_bariletto')
    bb = unary_union([circle(G['barrel'], 150), circle(G['crown_wheel'], 72), Polygon([(700, 230), (830, 350), (790, 470), (650, 470)])])
    shp('barrel_bridge', soften(bb, 12), 5.0, 2.4, mats['cotes'], 0.22)
    for p in ((520, 240), (760, 250), (705, 455)):
        cyl('pillar', *p, 1.6, 0, 5.0, mats['matte'], 24)
    M.text('TWENTY-FIVE 25 JEWELS', (700, 300), 7.4, 0.95, math.radians(18), mats['engr'])
    begin('ponte_bilanciere')
    shp('cock', soften(unary_union([circle(G['balance'], 44), taper(G['balance'], G['cock_foot'], 70, 82)]), 8), 7.0, 1.9, mats['cotes'], 0.2)
    cyl('foot', *G['cock_foot'], 4.0, 0, 7.0, mats['cotes'], 48)
    cyl('shock', *G['balance'], 2.3, 8.9, 9.12, mats['polish'], 64, 0.05)
    cyl('cap', *G['balance'], 1.15, 9.1, 9.25, mats['ruby'], 48, 0.04)
    begin('racchetta')
    shp('regulator', bar((G['balance'][0] - 14, G['balance'][1] - 14), (G['balance'][0] - 82, G['balance'][1] - 82), 12), 8.9, 0.35, mats['steel'], 0.06)
    begin('rocchetto_cricco')
    shp('ratchet', Polygon(gear_ring(G['barrel'], 105, 60)), 7.4, 0.8, mats['soleil'], 0.06, origin=G['barrel'])
    begin('ruota_carica')
    shp('crownwheel', Polygon(gear_ring(G['crown_wheel'], 55, 40)), 7.4, 0.8, mats['soleil'], 0.06, origin=G['crown_wheel'])
    begin('cricchetto')
    shp('click', unary_union([taper(G['click'], polar(G['barrel'], 109, -2.2), 30, 12), circle(G['click'], 18)]), 7.4, 0.6, mats['steel'], 0.06)
    begin('ponte_automatico')
    ab = unary_union([Polygon([(320, 215), (560, 200), (585, 300), (560, 395), (345, 395), (300, 300)]), circle((420, 270), 48), circle((505, 335), 48)])
    shp('auto_bridge', soften(ab, 12), 9.4, 1.5, mats['cotes'], 0.18)
    for p in ((345, 300), (560, 240)):
        cyl('pillar', *p, 1.5, 0, 9.4, mats['matte'], 24)
    for iid, pt in (('invertitore_1', (420, 270)), ('invertitore_2', (505, 335))):
        begin(iid)
        shp('rev', Polygon(gear_ring(pt, 40, 36)), 10.9, 0.5, mats['gold'], 0.05, origin=pt)
        jewel(pt, 11.4, 0.6, mats)
    begin('rotore')
    rot = [polar(c, 425, math.pi + i / 64 * math.pi) for i in range(65)] + [polar(c, 62, math.pi + i / 64 * math.pi) for i in range(64, -1, -1)]
    shp('rotor', Polygon(rot), 12.6, 0.7, mats['soleil'], 0.08, origin=c)
    rim = [polar(c, 425, math.pi + i / 64 * math.pi) for i in range(65)] + [polar(c, 378, math.pi + i / 64 * math.pi) for i in range(64, -1, -1)]
    shp('rotor_rim', Polygon(rim), 12.0, 2.0, mats['heavy'], 0.15, origin=c)
    cyl('bearing', *c, 5.6, 11.2, 13.6, mats['polish'], 64, 0.1)
    M.text('D. AUTOMATIC', (500, 220), 13.3, 2.4, 0, mats['engr'])
    # stelo e corona
    begin('stelo')
    tube_x('stem', BX(860), BX(1040), STEM_Z, 0.85, mats['polish'])
    box('stem_sq', ((BX(885) + BX(935)) / 2, 0, STEM_Z), (5, 1.2, 1.2), 0, mats['polish'], 0.02)
    gear_x('crown', BX(1050), 0, STEM_Z, 46, 3.0, mats['case'], teeth=44)
    tube_x('crown_cap', BX(1050) - 1.6, BX(1050) - 1.2, STEM_Z, 3.6, mats['case'])
    # ---------------- lato quadrante
    begin('tiretto')
    shp('setting_lever', unary_union([taper((820, 405), (905, 470), 34, 18), circle((820, 405), 22)]), -3.55, 0.55, mats['steel'], 0.05)
    cyl('sl_pin', 900, 476, 0.5, -4.6, -3.5, mats['matte'], 16)
    begin('pignone_carica'); gear_x('wpin', BX(935), 0, STEM_Z, 13, 2.8, mats['polish'])
    begin('pignone_scorrevole'); gear_x('clutch', BX(885), 0, STEM_Z, 14, 3.4, mats['polish'])
    begin('ruota_rinvio'); shp('setwheel', Polygon(gear_ring((860, 572), 28, 20)), -3.6, 0.6, mats['steel'], 0.05)
    begin('bascula'); shp('yoke', unary_union([taper((790, 610), (870, 530), 30, 16), circle((790, 610), 20)]), -3.5, 0.5, mats['matte'], 0.05)
    begin('molla_tiretto')
    shp('spring_plate', soften(Polygon([(760, 385), (850, 380), (915, 430), (845, 455), (800, 520), (830, 640), (760, 660), (735, 560)]), 6), -6.0, 0.6, mats['matte'], 0.08)
    for p in ((770, 420), (770, 620)):
        cyl('pillar', *p, 1.4, -5.4, -3.0, mats['matte'], 16)
    begin('chaussee')
    cyl('cannon', *c, 2.3, -8.0, -3.0, mats['polish'], 32)
    shp('cannon_p', Polygon(gear_ring(c, 26, 12)), -4.0, 1.0, mats['polish'], 0.04)
    begin('ruota_minuteria')
    shp('minwheel', Polygon(gear_ring((425, 580), 50, 36)), -3.9, 0.5, mats['steel'], 0.05)
    shp('minpin', Polygon(gear_ring((425, 580), 14, 10)), -4.8, 0.95, mats['polish'], 0.03)
    begin('ruota_ore')
    shp('hourwheel', Polygon(gear_ring(c, 66, 48)).difference(circle(c, 30)), -5.3, 0.45, mats['gold'], 0.05)
    cyl('hourtube', *c, 3.0, -7.8, -4.85, mats['gold'], 48)
    begin('ruota_datario'); shp('datewheel', Polygon(gear_ring((380, 410), 44, 30)), -4.6, 0.5, mats['steel'], 0.05)
    begin('disco_datario')
    ringg = Polygon(list(circle(c, 428, 96).exterior.coords), [gear_ring(c, 362, 31, 0, 9)])
    shp('datering', ringg, -5.9, 0.3, mats['dial'], 0.03)
    for i in range(31):
        a = i / 31 * TAU
        p = polar(c, 400, a)
        t = M.text(str(i + 1), p, -5.92, 2.2, 0, mats['ink'])
        t.rotation_euler = (math.pi, 0, -(a + math.pi / 2))
        t.location.z = -5.93
    begin('saltarello'); shp('jumper', unary_union([taper((620, 300), polar(c, 368, -1.25), 26, 10), circle((620, 300), 16)]), -5.95, 0.4, mats['steel'], 0.05)
    begin('placca_calendario')
    shp('date_plate', circle(c, 352, 64).difference(circle(c, 80)), -6.6, 0.55, mats['matte'], 0.08)
    for p in ((300, 420), (640, 700), (560, 220)):
        cyl('pillar', *p, 1.3, -6.05, -3.0, mats['matte'], 16)
    begin('quadrante')
    cyl('dial', *c, 43.6, -7.6, -7.2, mats['dial'], 128, 0.15)
    for i in range(60):
        a = i / 60 * TAU; big = i % 5 == 0
        p = polar(c, 405 if big else 430, a)
        box('idx', (BX(p[0]), BY(p[1]), -7.66), (6.0 if big else 2.6, 1.1 if big else 0.35, 0.12), -a, mats['ink'], 0.0)
    box('datewin', (BX(837), BY(500), -7.62), (6.6, 6.0, 0.05), 0, M.mat_plain('white', (0.98, 0.98, 0.98), 0.4), 0.0)
    t = M.text('9', (837, 500), -7.66, 4.2, 0, mats['ink']); t.rotation_euler = (math.pi, 0, math.pi / 2 * 0); t.location.z = -7.68
    begin('lancette')
    def hand(name, length, wa, wb, z, mat, ang):
        g = taper(c, polar(c, length, ang), wa, wb)
        shp(name, g, z, 0.2, mat, 0.03)
    hand('hour', 250, 30, 10, -8.2, mats['hands'], -math.pi / 2 - math.pi / 3)
    hand('minute', 370, 22, 8, -8.7, mats['hands'], -math.pi / 2 + math.pi / 3)
    shp('second', bar(polar(c, 80, math.pi / 2 + math.pi), polar(c, 400, math.pi / 2), 6), -9.1, 0.12, mats['orange'], 0.02)
    cyl('hub', *c, 1.2, -9.2, -7.6, mats['hands'], 32, 0.1)
    # ---------------- cassa e fondello
    begin('cassa')
    outer = cyl('case_o', *c, 49.4, -9.6, 14.5, mats['case'], 160, 0.6)
    me = bpy.data.meshes.new('cut'); bm = bmesh.new(); bmesh.ops.create_cone(bm, cap_ends=True, segments=160, radius1=44.4, radius2=44.4, depth=30); bm.to_mesh(me); bm.free()
    cut = bpy.data.objects.new('case_cut', me); cut.location = (0, 0, 2.5); bpy.context.collection.objects.link(cut); cut.hide_render = True; cut.hide_viewport = True
    bo = outer.modifiers.new('hole', 'BOOLEAN'); bo.object = cut; bo.operation = 'DIFFERENCE'; outer.modifiers.move(1, 0)
    for p in ((164, 193), (833, 810)):
        a = math.atan2(BY(p[1]), BX(p[0]))
        box('clamp', (BX(p[0]), BY(p[1]), 0.3), (5.5, 3.2, 0.6), a, mats['matte'])
    tube_x('crown_tube', BX(1000) - 4, BX(1000) + 0.5, STEM_Z, 1.8, mats['case'])
    begin('fondello')
    cyl('back', *c, 47.2, 14.5, 15.9, mats['case'], 160, 0.4)
    cyl('back_c', *c, 37, 15.9, 16.3, mats['soleil'], 160, 0.2)
    for i in range(6):
        a = i / 6 * TAU
        box('notch', (math.cos(a) * 44, math.sin(a) * 44, 15.8), (3, 2.4, 0.5), a, mats['dark'], 0.0)
    # ---------------- viti
    for sd in screw_defs:
        item = res(sd['item'])
        begin(sd['id'])
        screw(sd['id'], (sd['x'], sd['y']), item, sd['r'] * M.S, mats, (sd['x'] * 0.031 + sd['y'] * 0.017) % 3)
    # radice per ribaltare il movimento
    root = bpy.data.objects.new('root', None)
    bpy.context.scene.collection.objects.link(root)
    for col in ITEMS.values():
        for ob in col.objects:
            if ob.parent is None:
                ob.parent = root
    # tappetino
    bpy.context.view_layer.active_layer_collection = bpy.context.view_layer.layer_collection
    me = bpy.data.meshes.new('floor'); bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=500); bm.to_mesh(me); bm.free()
    fl = bpy.data.objects.new('floor', me); me.materials.append(mats['mat']); bpy.context.scene.collection.objects.link(fl)
    return mats, root, fl
