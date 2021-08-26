// javascript challenge 04 
const huskers = [{id: 'left'},{id: "right"}]
var opponent = []
const L_HUSKER_ELEM = document.getElementById('left')
const R_HUSKER_ELEM = document.getElementById('right')
// function locateHuskerById (id){
    
// }
function locateHuskerById(id){
    let found = huskers.find(husker => husker.id === id);
    console.log(found)
}

function awooo(huskerId){
    locateHuskerById(huskerId);
    if (huskerId === 'left'){
        const husker = locateHuskerById('right')
        opponent.push(huskerId)
        R_HUSKER_ELEM.textContent = 'Boozled 1/10'
        console.log(opponent)
    }
    if (huskerId === 'right'){
        const husker = locateHuskerById('left')
        L_HUSKER_ELEM.textContent = 'Boozled 1/10'
        console.log(opponent)
    }
}