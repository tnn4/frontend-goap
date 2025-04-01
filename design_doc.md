dark_hydra vs grass_dino, fire_lizard, water_turtle

Animons

name:
type:
hp:
power:
move_list: []
moves have a type and power:
we'll use gen 1 damage calculation
see: https://bulbapedia.bulbagarden.net/wiki/Damage

damage = (((2* lvl * crit) /5 + 2) * power * A/D/50 + 2) * STAB * T1 * T2

lvl = lvl : number, constant at 50
crit = 2 or 1 : number
A = attack : number
D = def : number
Power: move's power
STAB: 1.5 is same type
Type1: 3/2 for effective, 2/3 for not
Type2: stacks
random(217..255)/255 = .85 - 1

name: dark_hydra
type: dragon
hp: 10
power: 
