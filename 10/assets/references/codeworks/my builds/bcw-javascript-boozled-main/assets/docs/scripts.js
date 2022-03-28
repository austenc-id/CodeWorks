// javascript challenge 04 
const huskers = [{id: 'left'},{id: "right"},{id: 'l-boozle'},{id: "r-boozle"}]
var opponentL = []
var opponentR = []
const L_HUSKER_ELEM = document.getElementById('left')
const R_HUSKER_ELEM = document.getElementById('right')
const L_BOOZLE_ELEM = document.getElementById('l-boozle')
const R_BOOZLE_ELEM = document.getElementById('r-boozle')
var leftBoozlePoints = 0
var rightBoozlePoints = 0
startBoozles()
function locateHuskerById(id){
    let foundHusker = huskers.find(husker => husker.id === id);
    console.log(foundHusker)
}
function startBoozles(huskers){
    L_BOOZLE_ELEM.innerText= `${leftBoozlePoints}` + '% boozled'
    R_BOOZLE_ELEM.innerText= `${rightBoozlePoints}` + '% boozled'
}

function awooo(huskerId){
    locateHuskerById(huskerId);
    if (huskerId === 'left'){
        const rightboozle = locateHuskerById('r-boozle')
        rightBoozlePoints += 10
        R_BOOZLE_ELEM.innerText = `${rightBoozlePoints}` + '% boozled' 
        console.log(rightBoozlePoints)
    }
    if (huskerId === 'right'){
        const leftboozle = locateHuskerById('l-boozle')
        leftBoozlePoints += 10
        L_BOOZLE_ELEM.innerText = `${leftBoozlePoints}` + '% boozled' 
    }
}