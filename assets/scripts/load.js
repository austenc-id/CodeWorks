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
const ELEM_upgrade1 = document.getElementById('1')
const ELEM_upgrade2 = document.getElementById('2')
const ELEM_upgrade3 = document.getElementById('3')
const ELEM_upgrade4 = document.getElementById('4')

var distance = 0
var energy = 100
var tokens = 0
var upgrades = [
    {id: '1', name: 'upgrade 1', price: 1, benefit: 1.1, quantity: 0},
    {id: '2', name: 'upgrade 2', price: 1, benefit: 1.1, quantity: 0},
    {id: '3', name: 'upgrade 3', price: 1, benefit: 1.1, quantity: 0},
    {id: '4', name: 'upgrade 4', price: 1, benefit: 1.1, quantity: 0}
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

//SECTION click functions
function runner(){
   distance += 1
   energy -= 1
   tokens += .25
   drawClicker()
}

function purchaseUpgrade(){
    tokens -= 0
    // upgrades[i] += 1
    drawPurchase()
    drawClicker()
    
}

//SECTION data functions
function locateUpgradeById(){
    let foundUpgrade = upgrades.find(upgrade => upgrade.id === id)
    console.log(foundUpgrade)
}


