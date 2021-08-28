//TITLE checkpoint 2 runner 
//SECTION data
var x = 0

const buttons = [
    {id: 0, name: 'main'},
    {id: 1, name: 'upgrade-1'},
    {id: 2, name: 'upgrade-2'},
    {id: 3, name: 'upgrade-3'},
    {id: 4, name: 'upgrade-4'}
]
const ELEM_distance = document.getElementById('d')
const ELEM_energy = document.getElementById('e')
const ELEM_tokens = document.getElementById('t')
const ELEM_upgrade1 = document.getElementById('u1')
const ELEM_upgrade2 = document.getElementById('u2')
const ELEM_upgrade3 = document.getElementById('u3')
const ELEM_upgrade4 = document.getElementById('u4')

var distance = 0
var energy = 100
var tokens = 0

var upgrades = [
    {id: 'u1', name: 'upgrade 1', quantity: 0, when: 'click',
        tokens: -1, distance: 0, energy: 0}
]


//SECTION on-load functions
drawClicker()

//SECTION draw functions
function drawClicker(){
    ELEM_distance.innerText = 'distance: ' + `${distance}` 
    ELEM_energy.innerText = 'energy: ' + `${energy}` 
    ELEM_tokens.innerText = 'tokens: ' + `${tokens}` 
}

function drawPurchase(){
    ELEM_upgrade1.innerText = 'purchased: '// + `${upgrades}`
}

//SECTION game functions
function runner() {
    //TODO if (when === 'click'){x + (quantity * x)
    distance += 1  
    energy -= 1 
    tokens += .25
    drawClicker()
}

function purchaseUpgrade(id) {
    locateUpgradeById(id);
    id += 1 // id = quantity
    console.log(tokens)
    
}

function applyUpgradeAtInterval() {
    //TODO if (when === 'interval'){x +(quantity * x)
    distance += 0   
    energy -= 0
    drawClicker()
}
//SECTION data functions

function locateUpgradeById(id){
    let foundUpgrade = upgrades.find(upgrade => upgrade.id === id);
    console.log(foundUpgrade)
}