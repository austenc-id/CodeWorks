export class Arthropod {
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

let larvaChaurus = new Arthropod('chaurus', 'chaurus', 'larva')
let pupaChaurus = new Arthropod('cacoon', 'chaurus', 'pupa')
let hunterChaurus = new Arthropod('chaurus hunter', 'chaurus', 'mature')
let mudCrab = new Arthropod('mud crab', 'crab', 'mud')
let stoneCrab = new Arthropod('stone crab', 'crab', 'stone')
let commonSpider = new Arthropod('frostbite spider', 'spider', 'common')
let tundraSpider = new Arthropod('frostbite spider', 'spider', 'tundra')
let ashHopper = new Arthropod('ash hopper', 'hopper', 'ash')
let bee = new Arthropod('bee', 'bee', 'bee')
let blueButterfly = new Arthropod('blue flutter', 'butterfly', 'blue')
let monarchButterfly = new Arthropod('monarch butterfly', 'butterfly', 'monarch')
let lunaMoth = new Arthropod('luna moth', 'moth', 'luna')
let ancestorMoth = new Arthropod('ancestor moth', 'moth', 'ancestor')
let blueDragonfly = new Arthropod('blue dovmal', 'dragonfly', 'blue')
let orangeDragonfly = new Arthropod('orange dovmal', 'dragonfly', 'orange')
let torchbug = new Arthropod('torchbug', 'torchbug', 'torchbug')