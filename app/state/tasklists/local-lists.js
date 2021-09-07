import { ProxyState } from '../app-data.js';
import { List } from '../../data/models/tasklists/list.js';	

export function saveLists(){
		localStorage.setItem('lists', JSON.stringify({
		lists: ProxyState.lists
	}))
}
	
export function loadLists(){
	let data = JSON.parse(localStorage.getItem('lists'))
	if (data != null){
		ProxyState.lists = data.lists.map(lists => new List(lists))
	}
}