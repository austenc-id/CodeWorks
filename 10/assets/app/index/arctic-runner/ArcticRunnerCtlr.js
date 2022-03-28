import { ArticRunnerPage } from "./drawArticRunner.js"

var resources = [
	{ when: 'current', distance: 0, energy: 100, tokens: 1, capacity: 20 },
	{ when: 'click', tokens: 1, distance: 1, energy: 20 },
	{ when: 'interval', energy: 1 },
]
var upgrades = [
	{ id: 'spacer' },
	{ id: 'pouch', price: 7, resource: 'capacity', modifier: 5, inventory: 0, capacity: 5 },
	{ id: 'snack', price: 5, resource: 'energy', modifier: 1, inventory: 0 },
	{ id: 'endurance', price: 1, resource: 'energy', modifier: 2, inventory: 0 },
	{ id: 'friend', price: 10, resource: 'tokens', modifier: 1, inventory: 0 },
]
const page = new ArticRunnerPage

function _drawResources () {
	document.getElementById( 'd' ).innerText = 'distance: ' + `${resources[ 0 ].distance}`
	document.getElementById( 'e' ).innerText = 'energy: ' + `${resources[ 0 ].energy}` + '%'
	document.getElementById( 't' ).innerText = 'tokens: ' + `${resources[ 0 ].tokens}`
	document.getElementById( 'c' ).innerText = 'capacity: ' + `${resources[ 0 ].capacity}`
	document.getElementById( 'b1' ).innerText = '+' + `${upgrades[ 1 ].modifier}` + ` ${upgrades[ 1 ].resource}`
	document.getElementById( 'b2' ).innerText = '+' + `${upgrades[ 2 ].modifier}` + '%' + ` ${upgrades[ 2 ].resource}`
	document.getElementById( 'b3' ).innerText = '-' + `${upgrades[ 3 ].modifier}` + '%' + ` ${upgrades[ 3 ].resource}`
	document.getElementById( 'b4' ).innerText = '+' + `${upgrades[ 4 ].modifier}` + ` ${upgrades[ 4 ].resource}`
}
function _drawPrices () {
	if ( upgrades[ 1 ].price === 1 ) {
		document.getElementById( 'p1' ).innerText = 'price: ' + `${upgrades[ 1 ].price}` + ' token'
	}
	if ( upgrades[ 1 ].price > 1 ) {
		document.getElementById( 'p1' ).innerText = 'price: ' + `${upgrades[ 1 ].price}` + ' tokens'
	}
	if ( upgrades[ 1 ].inventory >= upgrades[ 1 ].capacity ) {
		document.getElementById( 'p1' ).hidden = true
	}
	if ( upgrades[ 2 ].price === 1 ) {
		document.getElementById( 'p2' ).innerText = 'price: ' + `${upgrades[ 2 ].price}` + ' token'
	}
	else {
		document.getElementById( 'p2' ).innerText = 'price: ' + `${upgrades[ 2 ].price}` + ' tokens'
	}
	if ( upgrades[ 3 ].price === 1 ) {
		document.getElementById( 'p3' ).innerText = 'price: ' + `${upgrades[ 3 ].price}` + ' token'
	}
	else {
		document.getElementById( 'p3' ).innerText = 'price: ' + `${upgrades[ 3 ].price}` + ' tokens'
	}
	if ( upgrades[ 4 ].price === 1 ) {
		document.getElementById( 'p4' ).innerText = 'price: ' + `${upgrades[ 4 ].price}` + ' token'
	}
	else {
		document.getElementById( 'p4' ).innerText = 'price: ' + `${upgrades[ 4 ].price}` + ' tokens'
	}
}
function _drawUpgrades () {
	if ( upgrades[ 1 ].inventory > 0 ) {
		document.getElementById( 'u1' ).innerText = 'inventory: ' + `${upgrades[ 1 ].inventory}` + '/5'
	}
	if ( upgrades[ 2 ].inventory > 0 ) {
		document.getElementById( 'u2' ).innerText = 'inventory: ' + `${upgrades[ 2 ].inventory}`
	}
	if ( upgrades[ 3 ].inventory > 0 ) {
		document.getElementById( 'u3' ).innerText = 'inventory: ' + `${upgrades[ 3 ].inventory}`
	}
	if ( upgrades[ 4 ].inventory > 0 ) {
		document.getElementById( 'u4' ).innerText = 'inventory: ' + `${upgrades[ 4 ].inventory}`
	}
	_drawResources()
}
function _locateUpgradeById ( id ) {
	let found = upgrades.find( upgrade => upgrade.id === id );
	console.log( found )
}
function _restoreEnergy () {
	if ( resources[ 0 ].energy < 100 ) {
		resources[ 0 ].energy += resources[ 2 ].energy
		if ( resources[ 0 ].energy > 100 ) {
			resources[ 0 ].energy = 100
		}
	}
	_drawResources()
}
export class ArticRunnerCtlr {
	drawPage () {
		let template = page.template
		document.getElementById( 'draw-content' ).innerHTML = template
		_drawResources()
		_drawPrices()
		_drawUpgrades()
		setInterval( _restoreEnergy, 1000 )
	}
	runner () {
		if ( resources[ 0 ].energy >= resources[ 1 ].energy ) {
			resources[ 0 ].distance += ( resources[ 1 ].distance );
			resources[ 0 ].energy -= ( resources[ 1 ].energy );
			if ( resources[ 0 ].tokens < ( resources[ 0 ].capacity ) ) {
				resources[ 0 ].tokens += resources[ 1 ].tokens
				if ( resources[ 0 ].tokens > resources[ 0 ].capacity ) {
					resources[ 0 ].tokens = resources[ 0 ].capacity
				};
			};
		};
	}
	purchaseUpgrade ( upgradeId ) {
		_locateUpgradeById( upgradeId )
		if ( upgradeId === 'pouch' ) {
			if ( resources[ 0 ].tokens >= upgrades[ 1 ].price ) {
				if ( upgrades[ 1 ].inventory < upgrades[ 1 ].capacity ) {
					upgrades[ 1 ].inventory += 1;
					resources[ 0 ].tokens -= upgrades[ 1 ].price;
					upgrades[ 1 ].price += 1;
					resources[ 0 ].capacity += upgrades[ 1 ].modifier;
					upgrades[ 1 ].modifier += 1;
				}
			}
		}
		if ( upgradeId === 'snack' ) {
			if ( resources[ 0 ].tokens >= upgrades[ 2 ].price ) {
				upgrades[ 2 ].inventory += 1;
				resources[ 0 ].tokens -= upgrades[ 2 ].price;
				upgrades[ 2 ].price += 1;
				resources[ 2 ].energy += upgrades[ 2 ].modifier;
				upgrades[ 2 ].modifier += 1;
			}
		}
		if ( upgradeId === 'endurance' ) {
			if ( resources[ 0 ].tokens >= upgrades[ 3 ].price ) {
				upgrades[ 3 ].inventory += 1;
				resources[ 0 ].tokens -= upgrades[ 3 ].price;
				upgrades[ 3 ].price += 1;
				resources[ 1 ].energy -= upgrades[ 3 ].modifier;
				upgrades[ 3 ].modifier += 1;
			}
		}
		if ( upgradeId === 'friend' ) {
			if ( resources[ 0 ].tokens >= upgrades[ 4 ].price ) {
				upgrades[ 4 ].inventory += 1;
				resources[ 0 ].tokens -= upgrades[ 4 ].price;
				upgrades[ 4 ].price += 1;
				resources[ 1 ].tokens += upgrades[ 4 ].modifier;
				upgrades[ 4 ].modifier += 1;
			}
		}
		_drawResources()
		_drawUpgrades()
		_drawPrices()
	}
}