//TODO restore energy over time
//TODO upgrades 1-4

// SECTION global data
const ELEMENTS = {
    distance: document.getElementById('d'),
    energy: document.getElementById('e'),
    tokens: document.getElementById('t'),
    capacity: document.getElementById('c'),
    upgrade1: document.getElementById('u1'),
    up1price: document.getElementById('p1'), 
    upgrade2: document.getElementById('u2'),
    up2price: document.getElementById('p2'), 
}

var resources = [
    { when: 'current', distance: 0, energy: 100, tokens: 0, capacity: 1},
    { when: 'click', distance: 1, energy: 5 },
    { when: 'interval', distance: 0, energy: 1 },
]

var upgrades = [
    {id: 'pouch', price: 1, resource: 'tokens', modifier: 1, inventory: 0, capacity: 5},
    {id: 'snack', price: 1, resource: 'energy', modifier: 1, inventory: 0},
]
drawResources()
setInterval(restoreEnergy, 2000)

// SECTION functions
function drawResources() {
    ELEMENTS.distance.innerText = 'distance: ' + `${resources[0].distance}`
    ELEMENTS.energy.innerText = 'energy: ' + `${resources[0].energy}`
    ELEMENTS.tokens.innerText = 'tokens: ' + `${resources[0].tokens}`
    ELEMENTS.capacity.innerText = 'capacity: ' + `${resources[0].capacity}`
    if (upgrades[0].price === 1) {
        ELEMENTS.up1price.innerText = 'price: ' + `${upgrades[0].price}` + ' token.'
    }
    if (upgrades[0].price < 6) {
        ELEMENTS.up1price.innerText = 'price: ' + `${upgrades[0].price}` + ' tokens.'
    }
    if (upgrades[0].price > 5) {
        ELEMENTS.up1price.hidden = true
    }
    if (upgrades[1].price === 1) {
        ELEMENTS.up2price.innerText = 'price: ' + `${upgrades[1].price}` + ' token.'
    }
    else {
        ELEMENTS.up2price.innerText = 'price: ' + `${upgrades[1].price}` + ' tokens.'
    }
}
function drawUpgrades() {
    if (upgrades[0].inventory > 0) {
        ELEMENTS.upgrade1.innerText = 'inventory: ' + `${upgrades[0].inventory}` + '/5'
    }
    if (upgrades[1].inventory > 0) {
        ELEMENTS.upgrade2.innerText = 'inventory: ' + `${upgrades[1].inventory}`
    }
}

function runner() {
    if (resources[0].energy > 0) {
        resources[0].distance += (resources[1].distance);
        resources[0].energy -= (resources[1].energy);
        if (resources[0].tokens < (resources[0].capacity))
            resources[0].tokens += 1
    };
    //TODO if (energy === 0) {display message}
    drawResources();
}

function restoreEnergy() {
    //TODO add 1 sec interval
    if (resources[0].energy < 100) {
        resources[0].energy += resources[2].energy
    }
    drawResources()
}

function purchaseUpgrade(upgradeId) {
    locateUpgradeById(upgradeId)
    if (upgradeId === 'pouch'){
        if (resources[0].tokens >= upgrades[0].price) {
            if (upgrades[0].inventory < upgrades[0].capacity) {
                upgrades[0].inventory += 1;
                resources[0].tokens -= upgrades[0].price;
                upgrades[0].price += 1;
                upgrades[0].modifier += 1;
                resources[0].capacity += upgrades[0].modifier;
            }
        }
    }
    if (upgradeId === 'snack'){
        if (resources[0].tokens >= upgrades[1].price) {
            upgrades[1].inventory += 1;
            resources[0].tokens -= upgrades[1].price;
            upgrades[1].price += 1;
            upgrades[1].modifier += 1;
            resources[2].energy += upgrades[1].modifier;
            }
        }
    drawResources()
    drawUpgrades()
}

function locateUpgradeById(id){
    let found = upgrades.find(upgrade => upgrade.id === id);
    console.log(found)
}