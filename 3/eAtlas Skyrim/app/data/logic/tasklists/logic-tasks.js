import { ProxyState } from "../../../state/app-data.js";
import { Task } from "../../models/tasklists/task.js";
import { saveTasks } from '../../../state/tasklists/local-tasks.js';
import { _drawTasks } from "../../controllers/render/tasklists/render-tasks.js";


function findTask(taskId){
		let foundtask = ProxyState.tasks.find(task => taskId += task)
		return foundtask
	}

class TasksLogic {
	constructor(){
		ProxyState.on('tasks', saveTasks)
	}

	addTask(taskInput){
		ProxyState.tasks = [...ProxyState.tasks, new Task(taskInput)];
		console.log('task added', ProxyState.tasks)
	}

	toggleTask(taskId){
		let foundtask = findTask(taskId)
		document.getElementById(taskId).classList.toggle('task-complete')
		foundtask.complete = !foundtask.complete
		let newState = foundtask
		return newState
	}

	saveTaskState(taskId){
		let task = findTask()
		console.log(task)
		let state = this.toggleTask(taskId)
		console.log(state)

	}
	
	}

export const tasksLogic = new TasksLogic