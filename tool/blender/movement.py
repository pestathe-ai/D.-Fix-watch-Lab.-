"""Movimento meccanico fotorealistico (generico, originale) per D. Fix Watch Lab.
Stesse coordinate dello schema dell'app: spazio 1000x1000 visto dal quadrante.
Uso: python movement.py out.png [larghezza altezza campioni]"""
import math, sys
import bpy
from mathutils import Vector
from shapely.geometry import Point, Polygon
from shapely.ops import unary_union

TAU = math.tau
S = 0.1
def BX(x): return -(x - 500) * S          # three X
def BY(y): return -(y - 500) * S          # -three Z
def polar(c, r, a): return (c[0] + r * math.cos(a), c[1] + r * math.sin(a))

# ------------------------------------------------------------------ geometria 2D
def circle(c, r, q=48): return Point(c).buffer(r, quad_segs=q)
def taper(a, b, wa, wb):
    dx, dy = b[0] - a[0], b[1] - a[1]
    L = math.hypot(dx, dy) or 1
    nx, ny = -dy / L, dx / L
    quad = Polygon([(a[0] + nx * wa / 2, a[1] + ny * wa / 2), (b[0] + nx * wb / 2, b[1] + ny * wb / 2),
                    (b[0] - nx * wb / 2, b[1] - ny * wb / 2), (a[0] - nx * wa / 2, a[1] - ny * wa / 2)])
    return unary_union([quad, circle(a, wa / 2, 12), circle(b, wb / 2, 12)])
def bar(a, b, w): return taper(a, b, w, w)
def gear_ring(c, r, teeth, rot=0.0, depth=0.0):
    d = depth if depth > 0 else max(2.0, r * TAU / teeth * 0.45)
    rr, pitch, pts = r - d, TAU / teeth, []
    for i in range(teeth):
        a = rot + i * pitch
        # dente con fianchi leggermente curvi
        pts += [polar(c, rr, a), polar(c, rr + d * 0.55, a + pitch * 0.1), polar(c, r, a + pitch * 0.2),
                polar(c, r, a + pitch * 0.4), polar(c, rr + d * 0.55, a + pitch * 0.5), polar(c, rr, a + pitch * 0.6)]
    return pts
def spoke_holes(c, rim, hub, n, w, rot=0.0):
    out = []
    for i in range(n):
        a1, a2 = rot + i * TAU / n, rot + (i + 1) * TAU / n
        dr, dh = math.asin(min(0.9, w / 2 / rim)), math.asin(min(0.9, w / 2 / hub))
        pts = [polar(c, rim, a1 + dr + (a2 - dr - a1 - dr) * k / 24) for k in range(25)]
        pts += [polar(c, hub, a2 - dh - (a2 - dh - a1 - dh) * k / 8) for k in range(9)]
        out.append(Polygon(pts).buffer(-w * 0.12).buffer(w * 0.12))
    return out
def wheel_poly(c, r, teeth, spokes=4):
    p = Polygon(gear_ring(c, r, teeth))
    if r > 24 and spokes:
        for h in spoke_holes(c, r * 0.74, max(r * 0.24, 10), spokes, r * 0.12):
            p = p.difference(h)
    return p

G = dict(barrel=(640, 330), crown_wheel=(780, 410), click=(548, 214), center=(500, 500), third=(370, 610),
         fourth=(470, 705), escape=(580, 730), pallet=(660, 690), balance=(760, 640), cock_foot=(815, 728))
G['fork_tip'] = (G['pallet'][0] + (G['balance'][0] - G['pallet'][0]) * 0.62, G['pallet'][1] + (G['balance'][1] - G['pallet'][1]) * 0.62)
G['entry'] = polar(G['escape'], 52, -2.2)
G['exit'] = polar(G['escape'], 52, 0.55)

# ------------------------------------------------------------------ materiali
def node_mat(name):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes['Principled BSDF']
    return m, nt, bsdf

def set_in(b, key, v):
    if key in b.inputs:
        b.inputs[key].default_value = v

def mat_metal(name, color, rough, aniso=0.0, thin=0.0):
    m, nt, b = node_mat(name)
    set_in(b, 'Base Color', (*color, 1))
    set_in(b, 'Metallic', 1.0)
    set_in(b, 'Roughness', rough)
    if aniso:
        set_in(b, 'Anisotropic', aniso)
    if thin:
        set_in(b, 'Thin Film Thickness', thin)
        set_in(b, 'Thin Film IOR', 1.6)
    # variazioni lente (aloni, ditate leggere)
    lf = nt.nodes.new('ShaderNodeTexNoise'); lf.inputs['Scale'].default_value = 0.35; lf.inputs['Detail'].default_value = 4
    rr = nt.nodes.new('ShaderNodeMapRange'); rr.inputs['To Min'].default_value = max(0.0, rough - 0.05); rr.inputs['To Max'].default_value = rough + 0.08
    nt.links.new(lf.outputs['Fac'], rr.inputs['Value']); nt.links.new(rr.outputs['Result'], b.inputs['Roughness'])
    tint = nt.nodes.new('ShaderNodeMix'); tint.data_type = 'RGBA'; tint.inputs['Factor'].default_value = 0.12
    tint.inputs['A'].default_value = (*color, 1); tint.inputs['B'].default_value = (color[0] * 0.8, color[1] * 0.8, color[2] * 0.82, 1)
    nt.links.new(lf.outputs['Fac'], tint.inputs['Factor'])
    mf = nt.nodes.new('ShaderNodeMath'); mf.operation = 'MULTIPLY'; mf.inputs[1].default_value = 0.25
    nt.links.new(lf.outputs['Fac'], mf.inputs[0]); nt.links.new(mf.outputs[0], tint.inputs['Factor'])
    nt.links.new(tint.outputs['Result'], b.inputs['Base Color'])
    # micrograffi
    tex = nt.nodes.new('ShaderNodeTexNoise'); tex.inputs['Scale'].default_value = 900; tex.inputs['Detail'].default_value = 2
    bump = nt.nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = 0.03
    nt.links.new(tex.outputs['Fac'], bump.inputs['Height'])
    nt.links.new(bump.outputs['Normal'], b.inputs['Normal'])
    return m

def mat_cotes():
    """Rodio con righe di Ginevra (bande spazzolate) — su coordinate oggetto."""
    m, nt, b = node_mat('cotes')
    set_in(b, 'Base Color', (0.80, 0.82, 0.85, 1)); set_in(b, 'Metallic', 1.0)
    tc = nt.nodes.new('ShaderNodeTexCoord')
    mp = nt.nodes.new('ShaderNodeMapping'); mp.inputs['Rotation'].default_value = (0, 0, math.radians(35))
    nt.links.new(tc.outputs['Object'], mp.inputs['Vector'])
    sep = nt.nodes.new('ShaderNodeSeparateXYZ'); nt.links.new(mp.outputs['Vector'], sep.inputs['Vector'])
    # bande larghe 3.2 unità: fase dentro la banda
    mod = nt.nodes.new('ShaderNodeMath'); mod.operation = 'PINGPONG'; mod.inputs[1].default_value = 1.15
    nt.links.new(sep.outputs['X'], mod.inputs[0])
    curve = nt.nodes.new('ShaderNodeMath'); curve.operation = 'POWER'; curve.inputs[1].default_value = 0.5
    nt.links.new(mod.outputs[0], curve.inputs[0])
    rough = nt.nodes.new('ShaderNodeMapRange'); rough.inputs['To Min'].default_value = 0.16; rough.inputs['To Max'].default_value = 0.3
    rough.inputs['From Max'].default_value = 1.07
    nt.links.new(curve.outputs[0], rough.inputs['Value']); nt.links.new(rough.outputs['Result'], b.inputs['Roughness'])
    # spazzolatura fine lungo le bande
    nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = 40; nz.inputs['Detail'].default_value = 8
    stretch = nt.nodes.new('ShaderNodeMapping'); stretch.inputs['Scale'].default_value = (60, 0.8, 1)
    nt.links.new(mp.outputs['Vector'], stretch.inputs['Vector']); nt.links.new(stretch.outputs['Vector'], nz.inputs['Vector'])
    add = nt.nodes.new('ShaderNodeMath'); add.operation = 'ADD'
    nt.links.new(curve.outputs[0], add.inputs[0]); nt.links.new(nz.outputs['Fac'], add.inputs[1])
    bump = nt.nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = 0.05; bump.inputs['Distance'].default_value = 0.03
    nt.links.new(add.outputs[0], bump.inputs['Height']); nt.links.new(bump.outputs['Normal'], b.inputs['Normal'])
    return m

def mat_perlage():
    m, nt, b = node_mat('perlage')
    set_in(b, 'Base Color', (0.74, 0.76, 0.79, 1)); set_in(b, 'Metallic', 1.0)
    tc = nt.nodes.new('ShaderNodeTexCoord')
    vor = nt.nodes.new('ShaderNodeTexVoronoi'); vor.inputs['Scale'].default_value = 2.8; vor.inputs['Randomness'].default_value = 0.35
    nt.links.new(tc.outputs['Object'], vor.inputs['Vector'])
    rings = nt.nodes.new('ShaderNodeMath'); rings.operation = 'SINE'
    mul = nt.nodes.new('ShaderNodeMath'); mul.operation = 'MULTIPLY'; mul.inputs[1].default_value = 34
    nt.links.new(vor.outputs['Distance'], mul.inputs[0]); nt.links.new(mul.outputs[0], rings.inputs[0])
    rr = nt.nodes.new('ShaderNodeMapRange'); rr.inputs['From Min'].default_value = -1; rr.inputs['To Min'].default_value = 0.24; rr.inputs['To Max'].default_value = 0.34
    nt.links.new(rings.outputs[0], rr.inputs['Value']); nt.links.new(rr.outputs['Result'], b.inputs['Roughness'])
    bump = nt.nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = 0.22; bump.inputs['Distance'].default_value = 0.015
    nt.links.new(rings.outputs[0], bump.inputs['Height']); nt.links.new(bump.outputs['Normal'], b.inputs['Normal'])
    return m

def mat_ruby():
    m, nt, b = node_mat('ruby')
    set_in(b, 'Base Color', (0.75, 0.02, 0.16, 1)); set_in(b, 'Roughness', 0.02); set_in(b, 'IOR', 1.77)
    set_in(b, 'Transmission Weight', 1.0)
    return m

def mat_plain(name, color, rough, metal=0.0):
    m, nt, b = node_mat(name)
    set_in(b, 'Base Color', (*color, 1)); set_in(b, 'Roughness', rough); set_in(b, 'Metallic', metal)
    return m

def mat_mat():
    m, nt, b = node_mat('tappetino')
    set_in(b, 'Base Color', (0.035, 0.05, 0.09, 1)); set_in(b, 'Roughness', 0.9)
    nz = nt.nodes.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = 300
    bump = nt.nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = 0.3
    nt.links.new(nz.outputs['Fac'], bump.inputs['Height']); nt.links.new(bump.outputs['Normal'], b.inputs['Normal'])
    return m

# ------------------------------------------------------------------ costruttori 3D
def soften(g, r=10):
    """Profilo morbido: arrotonda angoli convessi e concavi."""
    return g.buffer(r, quad_segs=16).buffer(-2 * r, quad_segs=16).buffer(r, quad_segs=16)

def shape_obj(name, geom, z0, h, mat, bevel=0.12, origin=None):
    """Estrude un poligono shapely (con fori) come curva 2D con smusso arrotondato."""
    cu = bpy.data.curves.new(name, 'CURVE')
    cu.dimensions = '2D'
    cu.fill_mode = 'BOTH'
    cu.resolution_u = 1
    bev = min(bevel, h * 0.3)
    cu.extrude = max(0.001, h / 2 - bev)
    cu.bevel_depth = bev
    cu.bevel_resolution = 3
    ox, oy = (BX(origin[0]), BY(origin[1])) if origin else (0, 0)
    polys = list(geom.geoms) if hasattr(geom, 'geoms') else [geom]
    for p in polys:
        for ring in [p.exterior, *p.interiors]:
            pts = list(ring.coords)[:-1]
            sp = cu.splines.new('POLY')
            sp.points.add(len(pts) - 1)
            for i, (x, y) in enumerate(pts):
                sp.points[i].co = (BX(x) - ox, BY(y) - oy, 0, 1)
            sp.use_cyclic_u = True
    ob = bpy.data.objects.new(name, cu)
    ob.location = (ox, oy, z0 + h / 2)
    ob.data.materials.append(mat)
    bpy.context.collection.objects.link(ob)
    return ob

def cyl(name, x, y, r, z0, z1, mat, verts=48, bevel=0.0):
    me = bpy.data.meshes.new(name)
    import bmesh
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=verts, radius1=r, radius2=r, depth=z1 - z0)
    bm.to_mesh(me); bm.free()
    ob = bpy.data.objects.new(name, me)
    ob.location = (BX(x), BY(y), (z0 + z1) / 2)
    me.materials.append(mat)
    for p in me.polygons: p.use_smooth = True
    if bevel:
        md = ob.modifiers.new('bev', 'BEVEL'); md.width = bevel; md.segments = 3; md.limit_method = 'ANGLE'
    bpy.context.collection.objects.link(ob)
    return ob

def jewel(pt, z, r, mats):
    """Rubino in una svasatura lucida."""
    sink = cyl('sink', pt[0], pt[1], r * 1.75, z - 0.02, z + 0.04, mats['polish'], 64, 0.03)
    cyl('ruby', pt[0], pt[1], r, z - 0.05, z + 0.12, mats['ruby'], 48, 0.04)
    cyl('hole', pt[0], pt[1], r * 0.22, z + 0.11, z + 0.13, mats['dark'], 16)
    return sink

def screw(pt, z, r, mats, slot_angle=0.4):
    head = cyl('screw', pt[0], pt[1], r, z, z + 0.7, mats['blue'], 64, 0.12)
    import bmesh
    me = bpy.data.meshes.new('slot'); bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0); bm.to_mesh(me); bm.free()
    cutter = bpy.data.objects.new('slotcut', me)
    cutter.scale = (r * 2.4, r * 0.32, 0.6)
    cutter.location = (BX(pt[0]), BY(pt[1]), z + 0.75)
    cutter.rotation_euler = (0, 0, slot_angle)
    bpy.context.collection.objects.link(cutter)
    cutter.hide_render = True
    bo = head.modifiers.new('slot', 'BOOLEAN'); bo.object = cutter; bo.operation = 'DIFFERENCE'
    head.modifiers.move(1, 0)
    # svasatura sotto la testa
    cyl('sinks', pt[0], pt[1], r * 1.22, z - 0.03, z + 0.03, mats['polish'], 48)
    return head

def text(body, pt, z, size, rot, mat):
    cu = bpy.data.curves.new('txt', 'FONT'); cu.body = body; cu.size = size; cu.extrude = 0.01
    cu.align_x = 'CENTER'; cu.align_y = 'CENTER'
    ob = bpy.data.objects.new('txt', cu); ob.location = (BX(pt[0]), BY(pt[1]), z + 0.012)
    ob.rotation_euler = (0, 0, rot)
    ob.data.materials.append(mat)
    bpy.context.collection.objects.link(ob)
    return ob

def scatter_dust(mats):
    """Pochi granelli di polvere e un pelucchio, appoggiati sulle superfici."""
    import random
    rnd = random.Random(7)
    dust = mat_plain('dust', (0.55, 0.54, 0.5), 0.9)
    dg = bpy.context.evaluated_depsgraph_get()
    sc = bpy.context.scene
    for i in range(70):
        x, y = rnd.uniform(-38, 38), rnd.uniform(-38, 38)
        if x * x + y * y > 40 * 40: continue
        hit, loc, nor, *_ = sc.ray_cast(dg, Vector((x, y, 40)), Vector((0, 0, -1)))
        if not hit: continue
        r = rnd.uniform(0.025, 0.07)
        me = bpy.data.meshes.new('d'); bm = bmesh_ico(r); bm.to_mesh(me); bm.free()
        ob = bpy.data.objects.new('dust', me); ob.location = loc + Vector((0, 0, r * 0.6))
        ob.scale = (1, rnd.uniform(0.6, 1.4), 0.6); me.materials.append(dust)
        bpy.context.collection.objects.link(ob)
    # un pelucchio
    cu = bpy.data.curves.new('lint', 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = 0.018
    sp = cu.splines.new('POLY'); sp.points.add(29)
    x0, y0 = BX(470), BY(540)
    for i in range(30):
        t = i / 29
        sp.points[i].co = (x0 + t * 3.2, y0 + math.sin(t * 7) * 0.6, 7.43 + 0.05 * math.sin(t * 13), 1)
    ob = bpy.data.objects.new('lint', cu); ob.data.materials.append(dust); bpy.context.collection.objects.link(ob)

def bmesh_ico(r):
    import bmesh
    bm = bmesh.new(); bmesh.ops.create_icosphere(bm, subdivisions=1, radius=r); return bm

# ------------------------------------------------------------------ scena
def build(mode='ponti'):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    mats = dict(
        cotes=mat_cotes(), perlage=mat_perlage(), ruby=mat_ruby(),
        gold=mat_metal('gold', (1.0, 0.74, 0.36), 0.26, aniso=0.6),
        steel=mat_metal('steel', (0.86, 0.87, 0.89), 0.12),
        polish=mat_metal('polish', (0.9, 0.91, 0.93), 0.04),
        blue=mat_metal('blue', (0.1, 0.25, 0.85), 0.2, thin=300),
        spring=mat_metal('spring', (0.18, 0.22, 0.42), 0.15, thin=250),
        soleil=mat_metal('soleil', (0.88, 0.89, 0.91), 0.16, aniso=0.9),
        dark=mat_plain('dark', (0.02, 0.02, 0.02), 0.5),
        engr=mat_metal('engr', (1.0, 0.72, 0.3), 0.35),
        mat=mat_mat(),
    )
    c = (500, 500)
    # platina
    shape_obj('platina', circle(c, 440, 64), -3, 3, mats['perlage'], bevel=0.3)
    # bariletto
    shape_obj('barrel_teeth', Polygon(gear_ring(G['barrel'], 135, 90)), 0.5, 0.6, mats['gold'], 0.04, origin=G['barrel'])
    cyl('barrel', *G['barrel'], 12.4, 1.1, 4.6, mats['gold'], 96, 0.15)
    # treno
    for key, r, teeth, z in (('center', 115, 80, 1.0), ('third', 85, 75, 2.0), ('fourth', 72, 70, 3.0)):
        shape_obj('w_' + key, wheel_poly(G[key], r, teeth), z, 0.42, mats['gold'], 0.05, origin=G[key])
        cyl('pin_' + key, *G[key], 0.35, 0, 7.6, mats['steel'], 16)
        cyl('hub_' + key, *G[key], r * 0.22 * S, z - 0.05, z + 0.6, mats['gold'], 32, 0.05)
    pts = []
    for i in range(20):
        a = i * TAU / 20; pt = TAU / 20
        pts += [polar(G['escape'], 37, a), polar(G['escape'], 44, a + pt * 0.18), polar(G['escape'], 50, a + pt * 0.48),
                polar(G['escape'], 50.5, a + pt * 0.62), polar(G['escape'], 47, a + pt * 0.7), polar(G['escape'], 38, a + pt * 0.78)]
    esc = Polygon(pts)
    for h in spoke_holes(G['escape'], 32, 11, 4, 6):
        esc = esc.difference(h)
    shape_obj('escape', esc, 3.85, 0.32, mats['polish'], 0.03, origin=G['escape'])
    cyl('esc_pinion', *G['escape'], 0.9, 3.0, 3.86, mats['polish'], 24)
    # ancora
    body = unary_union([taper(G['pallet'], G['fork_tip'], 30, 14), taper(G['pallet'], G['entry'], 24, 14), taper(G['pallet'], G['exit'], 24, 14), circle(G['pallet'], 18)])
    shape_obj('pallet', soften(body, 3), 3.85, 0.38, mats['polish'], 0.04, origin=G['pallet'])
    import bmesh
    for pt in (G['entry'], G['exit']):
        me = bpy.data.meshes.new('stone'); bm = bmesh.new(); bmesh.ops.create_cube(bm, size=1.0); bm.to_mesh(me); bm.free()
        ob = bpy.data.objects.new('stone', me)
        dx, dy = BX(pt[0]) - BX(G['pallet'][0]), BY(pt[1]) - BY(G['pallet'][1])
        ob.scale = (1.7, 0.55, 0.6)
        ob.location = (BX(G['pallet'][0]) + dx * 1.04, BY(G['pallet'][1]) + dy * 1.04, 4.05)
        ob.rotation_euler = (0, 0, math.atan2(dy, dx))
        bv = ob.modifiers.new('b', 'BEVEL'); bv.width = 0.06; bv.segments = 2
        me.materials.append(mats['ruby']); bpy.context.collection.objects.link(ob)
    # corna della forchetta e dardo
    tip = G['fork_tip']
    for side in (-1, 1):
        d = (G['balance'][0] - G['pallet'][0], G['balance'][1] - G['pallet'][1]); L = math.hypot(*d)
        n = (-d[1] / L, d[0] / L)
        a = (tip[0] + n[0] * 7 * side, tip[1] + n[1] * 7 * side)
        b2 = (a[0] + d[0] / L * 12 + n[0] * 3 * side, a[1] + d[1] / L * 12 + n[1] * 3 * side)
        shape_obj('horn', bar(a, b2, 5), 3.85, 0.38, mats['polish'], 0.03)
    # bilanciere
    bal = Polygon(list(circle(G['balance'], 100, 64).exterior.coords))
    for h in spoke_holes(G['balance'], 86, 15, 3, 13, 0.4):
        bal = bal.difference(h)
    shape_obj('balance', bal, 4.7, 0.6, mats['gold'], 0.08, origin=G['balance'])
    for i in range(10):
        a = i / 10 * TAU
        p = polar(G['balance'], 101, a)
        cyl('bscrew', *p, 0.42, 4.7, 5.3, mats['gold'], 16)
    cyl('staff', *G['balance'], 0.3, 3.4, 9.0, mats['polish'], 16)
    cyl('roller', *G['balance'], 2.1, 3.9, 4.25, mats['polish'], 48, 0.04)
    cyl('collet', *G['balance'], 0.9, 5.4, 6.0, mats['polish'], 32, 0.05)
    # spirale
    cu = bpy.data.curves.new('hair', 'CURVE'); cu.dimensions = '3D'; cu.bevel_depth = 0.05; cu.bevel_resolution = 2
    sp = cu.splines.new('POLY'); n = 1400
    sp.points.add(n - 1)
    for i in range(n):
        t = i / (n - 1); a = t * 11 * TAU; r = 1.6 + 4.6 * t
        sp.points[i].co = (BX(G['balance'][0]) + math.cos(a) * r, BY(G['balance'][1]) + math.sin(a) * r, 5.75, 1)
    ob = bpy.data.objects.new('hair', cu); ob.data.materials.append(mats['spring']); bpy.context.collection.objects.link(ob)
    # ponti
    train = unary_union([
        circle(G['center'], 46), circle(G['third'], 40), circle(G['fourth'], 40), circle(G['escape'], 36),
        bar(G['center'], G['third'], 58), bar(G['third'], G['fourth'], 54), bar(G['fourth'], G['escape'], 50),
        bar(G['center'], G['escape'], 50),
        circle((420, 560), 27), circle((560, 640), 27), circle((400, 680), 27),
    ])
    # sguscio interno tra i bracci (si vede la platina sotto)
    window = Polygon([(478, 612), (515, 626), (512, 668), (484, 662)]).buffer(10, quad_segs=16)
    train = train.difference(window)
    shape_obj('train_bridge', soften(train, 14), 5.4, 2.0, mats['cotes'], 0.22)
    for k in ('center', 'third', 'fourth', 'escape'):
        jewel(G[k], 7.4, 0.95, mats)
    for p in ((420, 560), (560, 640), (400, 680)):
        screw(p, 7.4, 1.3, mats, slot_angle=p[0] * 0.03)
    pbr = bar((G['pallet'][0] - 30, G['pallet'][1] + 35), (G['pallet'][0] + 25, G['pallet'][1] - 30), 44)
    shape_obj('pallet_bridge', soften(pbr, 6), 5.4, 2.0, mats['cotes'], 0.2)
    jewel(G['pallet'], 7.4, 0.75, mats)
    screw((636, 718), 7.4, 1.1, mats, 1.1)
    barrel_b = unary_union([circle(G['barrel'], 150), circle(G['crown_wheel'], 72), Polygon([(700, 230), (830, 350), (790, 470), (650, 470)])])
    shape_obj('barrel_bridge', soften(barrel_b, 12), 5.0, 2.4, mats['cotes'], 0.22)
    for p in ((520, 240), (760, 250), (705, 455)):
        screw(p, 7.4, 1.3, mats, slot_angle=p[1] * 0.02)
    cock = unary_union([circle(G['balance'], 44), taper(G['balance'], G['cock_foot'], 70, 82)])
    shape_obj('cock', soften(cock, 8), 7.0, 1.9, mats['cotes'], 0.2)
    cyl('shock', *G['balance'], 2.3, 8.9, 9.12, mats['polish'], 64, 0.05)
    cyl('cap', *G['balance'], 1.15, 9.1, 9.25, mats['ruby'], 48, 0.04)
    shape_obj('regulator', bar((G['balance'][0] - 14, G['balance'][1] - 14), (G['balance'][0] - 82, G['balance'][1] - 82), 12), 8.9, 0.35, mats['steel'], 0.06)
    screw(G['cock_foot'], 8.9, 1.4, mats, 0.2)
    # rocchetto e ruota di carica (lucidi, con soleil)
    shape_obj('ratchet', Polygon(gear_ring(G['barrel'], 105, 60)), 7.4, 0.8, mats['soleil'], 0.06, origin=G['barrel'])
    screw(G['barrel'], 8.2, 1.6, mats, 0.9)
    shape_obj('crownwheel', Polygon(gear_ring(G['crown_wheel'], 55, 40)), 7.4, 0.8, mats['soleil'], 0.06, origin=G['crown_wheel'])
    screw(G['crown_wheel'], 8.2, 1.3, mats, 2.0)
    clk = unary_union([taper(G['click'], polar(G['barrel'], 109, -2.2), 30, 12), circle(G['click'], 18)])
    shape_obj('click', clk, 7.4, 0.6, mats['steel'], 0.06)
    screw(G['click'], 8.0, 0.9, mats, 0.5)
    # incisioni dorate (nome di fantasia)
    text('D. CAL. 01', (500, 715), 7.4, 1.4, math.radians(-28), mats['engr'])
    text('TWENTY-FIVE 25 JEWELS', (700, 300), 7.4, 0.95, math.radians(18), mats['engr'])
    text('UNADJUSTED', (720, 390), 7.4, 0.8, math.radians(18), mats['engr'])
    # tappetino
    import bmesh
    scatter_dust(mats)
    me = bpy.data.meshes.new('floor'); bm = bmesh.new(); bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=400); bm.to_mesh(me); bm.free()
    fl = bpy.data.objects.new('floor', me); fl.location = (0, 0, -3.2); me.materials.append(mats['mat']); bpy.context.collection.objects.link(fl)
    return sc

def lights_camera(sc, target=(0, 0, 4), dist=110, elev=48, az=-30, lens=90, fstop=6.3, focus=None):
    world = bpy.data.worlds.new('w'); sc.world = world; world.use_nodes = True
    bg = world.node_tree.nodes['Background']
    grad = world.node_tree.nodes.new('ShaderNodeTexGradient'); grad.gradient_type = 'SPHERICAL'
    ramp = world.node_tree.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = (0.25, 0.27, 0.3, 1); ramp.color_ramp.elements[1].color = (0.85, 0.87, 0.9, 1)
    tc = world.node_tree.nodes.new('ShaderNodeTexCoord')
    world.node_tree.links.new(tc.outputs['Generated'], grad.inputs['Vector'])
    world.node_tree.links.new(grad.outputs['Fac'], ramp.inputs['Fac'])
    world.node_tree.links.new(ramp.outputs['Color'], bg.inputs['Color'])
    bg.inputs['Strength'].default_value = 0.9
    def area(name, loc, size, power, color=(1, 1, 1), strip=None):
        l = bpy.data.lights.new(name, 'AREA'); l.size = size; l.energy = power; l.color = color
        if strip:
            l.shape = 'RECTANGLE'; l.size = size; l.size_y = strip
        o = bpy.data.objects.new(name, l); o.location = loc
        d = Vector(target) - Vector(loc); o.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
        bpy.context.collection.objects.link(o)
    area('key', (-90, -60, 140), 120, 150000, strip=14)
    area('strip2', (60, -110, 110), 140, 60000, strip=8)
    area('fill', (120, -40, 90), 120, 50000, (0.9, 0.95, 1.0))
    area('rim', (20, 140, 70), 60, 60000, (1.0, 0.96, 0.9))
    cam = bpy.data.cameras.new('cam'); cam.lens = lens; cam.sensor_width = 36
    cam.dof.use_dof = True; cam.dof.aperture_fstop = fstop
    co = bpy.data.objects.new('cam', cam)
    e, a = math.radians(elev), math.radians(az)
    co.location = (target[0] + dist * math.cos(e) * math.sin(a), target[1] - dist * math.cos(e) * math.cos(a), target[2] + dist * math.sin(e))
    co.rotation_euler = (Vector(target) - co.location).to_track_quat('-Z', 'Y').to_euler()
    cam.dof.focus_distance = (Vector(focus or target) - co.location).length
    bpy.context.collection.objects.link(co); sc.camera = co

def render(sc, out, w, h, samples):
    sc.render.engine = 'CYCLES'
    sc.cycles.device = 'CPU'
    sc.cycles.samples = samples
    sc.cycles.use_denoising = True
    sc.cycles.max_bounces = 8; sc.cycles.glossy_bounces = 6; sc.cycles.transmission_bounces = 6
    sc.render.resolution_x = w; sc.render.resolution_y = h
    sc.render.film_transparent = False
    sc.view_settings.view_transform = 'AgX'
    sc.view_settings.look = 'AgX - Medium High Contrast' if 'AgX - Medium High Contrast' in [i.identifier for i in sc.view_settings.bl_rna.properties['look'].enum_items] else 'None'
    sc.view_settings.exposure = -0.35
    sc.render.filepath = out
    sc.render.image_settings.file_format = 'PNG'
    bpy.ops.render.render(write_still=True)

if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else '/tmp/out.png'
    w = int(sys.argv[2]) if len(sys.argv) > 2 else 960
    h = int(sys.argv[3]) if len(sys.argv) > 3 else 720
    spp = int(sys.argv[4]) if len(sys.argv) > 4 else 64
    sc = build()
    lights_camera(sc, target=(BX(600), BY(600), 6), dist=120, elev=40, az=-35, lens=85, fstop=4.5, focus=(BX(600), BY(620), 7.4))
    render(sc, out, w, h, spp)
    print('OK', out)
