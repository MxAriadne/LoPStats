//Order = [Motivity, Technique, Advance]
//Scaling = [-, D, C, B, A, S]
const handles = {
    acidic_crystal_spear: {
        name: "Acidic Crystal Spear",
        light_mult: 0.75,
        heavy_mult: 1.4,
        ch_heavy_mult: 2.4,
        scaling: [1, 1, 4]
    },
    acidic_great_curved_sword: {
        name: "Acidic Great Curved Sword",
        light_mult: 1.4,
        heavy_mult: 1.55,
        ch_heavy_mult: 2.35,
        scaling: [1, 2, 3]
    },
    big_pipe_wrench: {
        name: "Big Pipe Wrench",
        light_mult: 1.55,
        heavy_mult: 1.85,
        ch_heavy_mult: 3.1,
        scaling: [3, 1, 0]
    },
    black_steel_cutter_blade: {
        name: "Black Steel Cutter",
        light_mult: 1.25,
        heavy_mult: 1.55,
        ch_heavy_mult: 2.5,
        scaling: [1, 1, 4]
    },
    blind_mans_double_sided_spear: {
        name: "Blind-Man's Double-sided Spear",
        light_mult: 1,
        heavy_mult: 1.4,
        ch_heavy_mult: 2.05,
        scaling: [1, 3, 0]
    },
    bone_cutting_sawblade: {
        name: "Bone-Cutting Sawblade",
        light_mult: 1.45,
        heavy_mult: 2.05,
        ch_heavy_mult: 2.75,
        scaling: [3, 1, 0]
    },
    booster_glaive: {
        name: "Booster Glaive",
        light_mult: 1.4,
        heavy_mult: 1.5,
        ch_heavy_mult: 2.15,
        scaling: [1, 3, 0]
    },
    bramble_curved: {
        name: "Bramble Curved",
        light_mult: 1.05,
        heavy_mult: 1.4,
        ch_heavy_mult: 2.4,
        scaling: [2, 2, 0]
    },
    carcass_crystal_axe: {
        name: "Carcass Crystal Axe",
        light_mult: 1.4,
        heavy_mult: 1.35,
        ch_heavy_mult: 2.45,
        scaling: [2, 1, 3]
    },
    circular_electric_saw: {
        name: "Circular Electric Saw",
        light_mult: 1.4,
        heavy_mult: 1.75,
        ch_heavy_mult: 2.35,
        scaling: [1, 1, 4]
    },
    city_longspear: {
        name: "City Longspear",
        light_mult: 1.4,
        heavy_mult: 1.5,
        ch_heavy_mult: 2.25,
        scaling: [1, 3, 0]
    },
    clock_sword: {
        name: "Clock Sword",
        light_mult: 1,
        heavy_mult: 1.1,
        ch_heavy_mult: 1.8,
        scaling: [2, 2, 0]
    },
    coil_mjolnir: {
        name: "Coil Mjolnir",
        light_mult: 1.5,
        heavy_mult: 1.65,
        ch_heavy_mult: 4,
        scaling: [3, 1, 0]
    },
    cursed_knight_halberd: {
        name: "Cursed Knight Halberd",
        light_mult: 1.4,
        heavy_mult: 1.5,
        ch_heavy_mult: 5.1,
        scaling: [2, 2, 0]
    },
    dancers_curved_sword: {
        name: "Dancer's Curved Sword",
        light_mult: 1.15,
        heavy_mult: 1.35,
        ch_heavy_mult: 2.55,
        scaling: [2, 3, 0]
    },
    electric_coil_stick: {
        name: "Electric Coil Stick",
        light_mult: 1.15,
        heavy_mult: 1.35,
        ch_heavy_mult: 2.4,
        scaling: [2, 1, 3]
    },
    exploding_pickaxe: {
        name: "Exploding Pickaxe",
        light_mult: 1.4,
        heavy_mult: 1.8,
        ch_heavy_mult: 2.9,
        scaling: [3, 1, 0]
    },
    fire_axe: {
        name: "Fire Axe",
        light_mult: 1.15,
        heavy_mult: 1.5,
        ch_heavy_mult: 2.4,
        scaling: [2, 2, 0]
    },
    greatsword_of_fate: {
        name: "Greatsword of Fate",
        light_mult: 1.25,
        heavy_mult: 1.55,
        ch_heavy_mult: 2.4,
        scaling: [3, 1, 0]
    },
    krat_p_baton: {
        name: "Krat P-Baton",
        light_mult: 1.1,
        heavy_mult: 1.45,
        ch_heavy_mult: 2.25,
        scaling: [3, 1, 0]
    },
    live_puppets_axe: {
        name: "Live Puppet's Axe",
        light_mult: 1.65,
        heavy_mult: 2.25,
        ch_heavy_mult: 3.25,
        scaling: [3, 1, 0]
    },
    master_chef_knife: {
        name: "Master Chef Knife",
        light_mult: 0.95,
        heavy_mult: 1.25,
        ch_heavy_mult: 2.4,
        scaling: [1, 3, 0]
    },
    military_shovel: {
        name: "Military Shovel",
        light_mult: 1.35,
        heavy_mult: 1.5,
        ch_heavy_mult: 2.55,
        scaling: [2, 2, 0]
    },
    pistol_rock_drill: {
        name: "Pistol Rock Drill",
        light_mult: 1.3,
        heavy_mult: 3,
        ch_heavy_mult: 2.8,
        scaling: [3, 1, 0]
    },
    puppet_saber: {
        name: "Puppet Saber",
        light_mult: 1.05,
        heavy_mult: 1.15,
        ch_heavy_mult: 1.95,
        scaling: [2, 2, 0]
    },
    salamander_dagger: {
        name: "Salamander Dagger",
        light_mult: 0.9,
        heavy_mult: 1.3,
        ch_heavy_mult: 3,
        scaling: [1, 2, 3]
    },
    spear_of_honor: {
        name: "Spear of Honor",
        light_mult: 1.3,
        heavy_mult: 1.6,
        ch_heavy_mult: 3.3,
        scaling: [1, 3, 0]
    },
    tyrant_murderers_dagger: {
        name: "Tyrant Murderer's Dagger",
        light_mult: 0.75,
        heavy_mult: 1.1,
        ch_heavy_mult: 2.3,
        scaling: [1, 3, 0]
    },
    wintry_rapier: {
        name: "Wintry Rapier",
        light_mult: 0.85,
        heavy_mult: 1.3,
        ch_heavy_mult: 2.25,
        scaling: [1, 3, 0]
    },
    arches_guardian_handle: {
        name: "Arches Guardian Handle",
        light_mult: 1,
        heavy_mult: 1.35,
        ch_heavy_mult: 2.7,
        scaling: [1, 2, 3]
    },
    la_vendetta_handle: {
        name: "La Vendetta Handle",
        light_mult: 1.3,
        heavy_mult: 1.5,
        ch_heavy_mult: 2.6,
        scaling: [3, 2, 0]
    },
    lorenzini_bolt_handle: {
        name: "Lorenzini Bolt Handle",
        light_mult: 1.2,
        heavy_mult: 1.5,
        ch_heavy_mult: 2.45,
        scaling: [2, 3, 0]
    },
    maniacs_pinwheel_handle: {
        name: "Maniac's Pinwheel Handle",
        light_mult: 1.5,
        heavy_mult: 1.5,
        ch_heavy_mult: 2.5,
        scaling: [4, 1, 0]
    },
    puppet_of_the_future_welder_handle: {
        name: "Puppet of the Future Welder Handle",
        light_mult: 0.75,
        heavy_mult: 2,
        ch_heavy_mult: 3.15,
        scaling: [2, 1, 3]
    },
    silent_evangelists_mace_handle: {
        name: "Silent Evangelist's Mace Handle",
        light_mult: 1.2,
        heavy_mult: 1.65,
        ch_heavy_mult: 3.05,
        scaling: [3, 2, 0]
    }
};