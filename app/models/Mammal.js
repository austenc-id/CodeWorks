export class Mammal {
	constructor(
		name = '',
		species = '',
		subspecies = '',
		)
		{
		this.name = name
		this.species = species
		this.subspecies = subspecies
		}
}
let plainsWolf = new Mammal('wolf', 'wolf', 'plains')
let timberWolf = new Mammal('wolf', 'wolf', 'timber')
let mountainWolf = new Mammal('wolf', 'wolf', 'mountain')
let tundraWolf = new Mammal('tundra wolf', 'wolf', 'tundra')
let caveTroll = new Mammal('cave troll', 'troll', 'cave')
let mountainTroll = new Mammal('mountain troll', 'troll', 'mountain')
let plainsCat = new Mammal('sabre cat', 'sabre cat', 'plains')
let tundraCat = new Mammal('tundra cat', 'sabre cat', 'tundra')
let deer = new Mammal('deer', 'deer', 'common')
let elk = new Mammal('elk', 'deer', 'elk')
let wanderingBear = new Mammal('bear', 'bear', 'wandering')
let caveBear = new Mammal('bear', 'bear', 'cave')
let tundraBear = new Mammal('tundra bear', 'bear', 'tundra')
let mammoth = new Mammal('mammoth', 'mammoth', 'mammoth')
let plainsFox = new Mammal('fox', 'fox', 'plains')
let mountainFox = new Mammal('fox', 'fox', 'mountain')
let tundraFox = new Mammal('fox', 'fox', 'tundra')
let rabbit = new Mammal('rabbit', 'rabbit', 'rabbit')

