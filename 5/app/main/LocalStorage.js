import { List } from "../tasklists/Models/List.js";
import { Task } from "../tasklists/Models/Task.js";
import { ProxyState } from "./AppState.js";


export function saveLists(){
	localStorage.setItem('lists', JSON.stringify({tasklists: ProxyState.lists}))
}

export function loadLists(){
	let listdata = JSON.parse(localStorage.getItem('lists'))
	if (listdata != null){
		ProxyState.lists = listdata.tasklists.map(lists => new List(lists))
	}
}

export function saveTasks(){
	localStorage.setItem('tasks', JSON.stringify({tasks: ProxyState.tasks}))
}

export function loadTasks(){
	let taskdata = JSON.parse(localStorage.getItem('tasks'))
	if (taskdata != null){
		ProxyState.tasks = taskdata.tasks.map(tasks => new Task(tasks))
	}
}
export function saveSortedTasks(){
	localStorage.setItem('sortedTasks', JSON.stringify({tasks: ProxyState.sortedTasks}))
}

export function loadSortedTasks(){
	let taskdata = JSON.parse(localStorage.getItem('sortedTasks'))
	if (taskdata != null){
		ProxyState.sortedTasks = taskdata.tasks.map(tasks => new Task(tasks))
	}
}


