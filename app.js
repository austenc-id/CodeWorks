const choices = [
	{id: 0, name: 'jon', beats: 2},
	{id: 1, name: 'ken', beats: 0},
	{id: 2, name: 'po', beats: 1}
];
var selectionUser = [];
var selectionAI = [];

function locateSelectionById(id){
	debugger
	let found = choices.find(selection => selection.id === id);
	if(!found){throw new Error('Invalid selection id')}
		return found;
}

// function AISelector(max){
// 	let AISelection = Math.floor(Math.random() * 3);
// 	locateSelectionById(AISelection);
// 	selectionAI.push (AISelection);
	
// 	console.log(selectionAI)
// }

function userSelector(choiceId){
	locateSelectionById(choiceId);
	selectionUser.push(choiceId);
	
	console.log(selectionUser);
}

// function select(){
// 	AISelector()
// 	userSelector()
// }

// function select(choiceId){
// 	const playerChoice = locateSelectionById(choiceId);
// 	const computerChoice = locateSelectionById('rock'); // temporary
// 	console.log(playerChoice, computerChoice);
	
	// figure out who wins
// }