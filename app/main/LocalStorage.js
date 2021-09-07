import { TaskList } from "../tasklists/Models/TaskList.js";
import { ProxyState } from "./AppState.js";


export function saveTaskLists(){
	localStorage.setItem('tasklists', JSON.stringify({tasklists: ProxyState.tasklists}))
}

export function loadTaskLists(){
	let data = JSON.parse(localStorage.getItem('tasklists'))
	if (data != null){
		ProxyState.tasklists = data.tasklists.map(tasklists => new TaskList(tasklists))
	}
}