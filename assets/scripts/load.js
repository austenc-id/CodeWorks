//TODO restore energy over time
//TODO upgrades 1-4

// SECTION global data
const ELEMENTS = {
    image: document.getElementById('img'),
    distance: document.getElementById('d'),
    energy: document.getElementById('e'),
    tokens: document.getElementById('t'),
    capacity: document.getElementById('c'),
    upgrade1: document.getElementById('u1'),
    bonus1: document.getElementById('b1'),
    up1price: document.getElementById('p1'), 
    upgrade2: document.getElementById('u2'),
    bonus2: document.getElementById('b2'),
    up2price: document.getElementById('p2'), 
    upgrade3: document.getElementById('u3'),
    bonus3: document.getElementById('b3'),
    up3price: document.getElementById('p3'), 
    upgrade4: document.getElementById('u4'),
    bonus4: document.getElementById('b4'),
    up4price: document.getElementById('p4'), 
}

var resources = [
    { when: 'current', distance: 0, energy: 100, tokens: 20, capacity: 20},
    { when: 'click', tokens: 1, distance: 1, energy: 20 },
    { when: 'interval', energy: 1 },
]

var upgrades = [
    {id: 'spacer'},
    {id: 'pouch', price: 7, resource: 'capacity', modifier: 5, inventory: 0, capacity: 5},
    {id: 'snack', price: 5, resource: 'energy', modifier: 1, inventory: 0},
    {id: 'endurance', price: 1, resource: 'energy', modifier: 2, inventory: 0},
    {id: 'friend', price: 10, resource: 'tokens', modifier: 1, inventory: 0},
]
drawResources()
drawPrices()
setInterval(restoreEnergy, 2000)

// SECTION functions
function drawResources() {
    ELEMENTS.distance.innerText = 'distance: ' + `${resources[0].distance}`
    ELEMENTS.energy.innerText = 'energy: ' + `${resources[0].energy}` + '%'
    ELEMENTS.tokens.innerText = 'tokens: ' + `${resources[0].tokens}`
    ELEMENTS.capacity.innerText = 'capacity: ' + `${resources[0].capacity}`
    ELEMENTS.bonus1.innerText = '+' + `${upgrades[1].modifier}` + ` ${upgrades[1].resource}`
    ELEMENTS.bonus2.innerText = '+' + `${upgrades[2].modifier}` +'%' + ` ${upgrades[2].resource}`
    ELEMENTS.bonus3.innerText = '-' + `${upgrades[3].modifier}` +'%' + ` ${upgrades[3].resource}`
    ELEMENTS.bonus4.innerText = '+' + `${upgrades[4].modifier}` + ` ${upgrades[4].resource}`
}

function drawPrices() {
    if (upgrades[1].price === 1) {
        ELEMENTS.up1price.innerText = 'price: ' + `${upgrades[1].price}` + ' token'
    }
    if (upgrades[1].price > 1) {
        ELEMENTS.up1price.innerText = 'price: ' + `${upgrades[1].price}` + ' tokens'
    }
    if (upgrades[1].inventory >= upgrades[1].capacity) {
        ELEMENTS.up1price.hidden = true
    }
    if (upgrades[2].price === 1) {
        ELEMENTS.up2price.innerText = 'price: ' + `${upgrades[2].price}` + ' token'
    }
    else {
        ELEMENTS.up2price.innerText = 'price: ' + `${upgrades[2].price}` + ' tokens'
    }
    if (upgrades[3].price === 1) {
        ELEMENTS.up3price.innerText = 'price: ' + `${upgrades[3].price}` + ' token'
    }
    else {
        ELEMENTS.up3price.innerText = 'price: ' + `${upgrades[3].price}` + ' tokens'
    }
    if (upgrades[4].price === 1) {
        ELEMENTS.up4price.innerText = 'price: ' + `${upgrades[4].price}` + ' token'
    }
    else {
        ELEMENTS.up4price.innerText = 'price: ' + `${upgrades[4].price}` + ' tokens'
    }
}
function drawUpgrades() {
    if (upgrades[1].inventory > 0) {
        ELEMENTS.upgrade1.innerText = 'inventory: ' + `${upgrades[1].inventory}` + '/5'
    }
    if (upgrades[2].inventory > 0) {
        ELEMENTS.upgrade2.innerText = 'inventory: ' + `${upgrades[2].inventory}`
    }
    if (upgrades[3].inventory > 0) {
        ELEMENTS.upgrade3.innerText = 'inventory: ' + `${upgrades[3].inventory}`
    }
    if (upgrades[4].inventory > 0) {
        ELEMENTS.upgrade4.innerText = 'inventory: ' + `${upgrades[4].inventory}`
    }
}

function runner() {
    if (resources[0].energy > resources[1].energy) {
        resources[0].distance += (resources[1].distance);
        resources[0].energy -= (resources[1].energy);
        if (resources[0].tokens < (resources[0].capacity)) {
            resources[0].tokens += resources[1].tokens
        }
    };
    //TODO if (energy === 0) {display message}
    drawResources();
}

function restoreEnergy() {
    //TODO add 1 sec interval
    if (resources[0].energy < 100) {
        resources[0].energy += resources[2].energy
        if (resources[0].energy > 100) {
            resources[0].energy = 100
        }
    }
    drawResources()
}

function purchaseUpgrade(upgradeId) {
    locateUpgradeById(upgradeId)
    if (upgradeId === 'pouch'){
        if (resources[0].tokens >= upgrades[1].price) {
            if (upgrades[1].inventory < upgrades[1].capacity) {
                upgrades[1].inventory += 1;
                resources[0].tokens -= upgrades[1].price;
                upgrades[1].price += 1;
                resources[0].capacity += upgrades[1].modifier;
                upgrades[1].modifier += 1;
            }
        }
    }
    if (upgradeId === 'snack'){
        if (resources[0].tokens >= upgrades[2].price) {
            upgrades[2].inventory += 1;
            resources[0].tokens -= upgrades[2].price;
            upgrades[2].price += 1;
            resources[2].energy += upgrades[2].modifier;
            upgrades[2].modifier += 1;
            }
    }
    if (upgradeId === 'endurance'){
        if (resources[0].tokens >= upgrades[3].price) {
            upgrades[3].inventory += 1;
            resources[0].tokens -= upgrades[3].price;
            upgrades[3].price += 1;
            resources[1].energy -= upgrades[3].modifier;
            upgrades[3].modifier += 1;
            }
    }
    if (upgradeId === 'friend'){
        if (resources[0].tokens >= upgrades[4].price) {
            upgrades[4].inventory += 1;
            resources[0].tokens -= upgrades[4].price;
            upgrades[4].price += 1;
            resources[1].tokens += upgrades[4].modifier;
            upgrades[4].modifier += 1;
            }
    }
    
    drawResources()
    drawUpgrades()
    drawPrices()
}

function locateUpgradeById(id){
    let found = upgrades.find(upgrade => upgrade.id === id);
    console.log(found)
}