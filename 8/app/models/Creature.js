export class Creature {
	constructor(
		name = '',
		type = '',
		species = '',
		subspecies = '',
		)
		{
		this.name = name
		this.type = type
		this.species = species
		this.subspecies = subspecies
		}
}

let commonSpriggan = new Creature('spriggan', 'spriggan', 'spriggan', 'common')
let elderSpriggan = new Creature('elder spriggan', 'spriggan','spriggan', 'elder')
let ashenSpriggan = new Creature('ashen spriggan', 'spriggan', 'spriggan', 'ashen')
let motherWisp = new Creature('wispmother', 'spirit', 'wisp', 'mother')
let spawnWisp = new Creature('wisp', 'spirit', 'wisp', 'spawn')
let iceWraith = new Creature('ice wraith', 'spirit', 'wraith', 'ice')
let fireAtronach = new Creature('flame atronach', 'daedra', 'atronach', 'fire')
let frostAtronach = new Creature('frost atronach', 'daedra', 'atronach', 'frost')
let shockAtronach = new Creature('shock atronach', 'daedra', 'atronach', 'shock')
