import { Quest } from '../data/models/quest.js';	
import { ProxyState } from './app-data.js';
	

export function saveQuests(){
		localStorage.setItem('quests', JSON.stringify({
		quests: ProxyState.quests
	}))
}
	
export function loadQuests(){
	let data = JSON.parse(localStorage.getItem('quests'))
	if (data != null){
		ProxyState.quests = data.quests.map(quests => new Quest(quests))
	}
}