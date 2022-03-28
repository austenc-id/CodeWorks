import { ProxyState } from '../../main/AppState.js';
import { saveLists, saveTasks } from '../../main/LocalStorage.js';
import { Task } from '../Models/Task.js';
import { List } from '../Models/List.js';


class TaskListsLogic {
	constructor(){
		ProxyState.on('lists', saveLists)
		ProxyState.on('tasks', saveTasks)
	}

	addList(listData){
		ProxyState.lists = [...ProxyState.lists, new List(listData)]
		console.log('new list submitted')
	}

	addTask(taskData){
		console.log(taskData.listId)
		ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
		// let list = ProxyState.lists.find(list => taskData.listId === list.listId)
		// list.tasks = [...list.tasks, new Task(taskData)]
		console.log('new task submitted')
		// console.log(ProxyState.lists)
	}	
	sortTask(){
				var lists = ProxyState.lists
				var tasks = ProxyState.tasks
				console.log(lists, tasks)
			for (tasks; tasks.length > 0; +tasks){
				var task = tasks.pop()
				let list = lists.find(list => task.listId === list.listId)
				list.tasks = [...list.tasks, new Task(task)]
				ProxyState.tasks = [...ProxyState.tasks, new Task(task)]	
				console.log(tasks, lists)
				return
		}
			
	}
}

export const tasklistsLogic = new TaskListsLogic
