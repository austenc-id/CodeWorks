//TODO restore energy over time
//TODO upgrades 1-4

// SECTION global data
const ELEMENTS = {
    distance: document.getElementById('d'),
    energy: document.getElementById('e'),
    tokens: document.getElementById('t')
}

var resources = [
    { when: 'current', distance: 0, energy: 100, tokens: 0 },
    { when: 'click', distance: 0, energy: 0 },
    { when: 'interval', distance: 0, energy: 0 }
]

drawResources()

// SECTION functions
function drawResources(){
    ELEMENTS.distance.innerText = 'distance: ' + `${resources[0].distance}` 
    ELEMENTS.energy.innerText = 'energy: ' + `${resources[0].energy}` 
    ELEMENTS.tokens.innerText = 'tokens: ' + `${resources[0].tokens}` 
}

function runner() {
    if (resources[0].energy > 0) {
        resources[0].distance += (1 + resources[1].distance);
        resources[0].energy -= (25 - resources[1].energy);
        resources[0].tokens += .25
    };
    //TODO if (energy === 0) {display message}
    drawResources();
}

function restoreEnergyOverTime() {
    //TODO add 1 sec interval
    if (resources[0].energy < 100) {
        resources[0].energy += resources[2].energy
    }
    drawResources()
}