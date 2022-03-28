import { ProxyState } from '../app-data.js';
import { Task } from '../../data/models/tasklists/task.js';	

export function saveTasks(){
		localStorage.setItem('tasks', JSON.stringify({
		tasks: ProxyState.tasks
	}))
}
	
export function loadTasks(){
	let data = JSON.parse(localStorage.getItem('tasks'))
	if (data != null){
		ProxyState.tasks = data.tasks.map(tasks => new Task(tasks))
	}
}