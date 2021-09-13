import { ProxyDash } from "../dash-state.js"
import { Task } from "../models/Task.js"

class TasklistService {
	injectTasks(apiTasks){
		console.log(apiTasks)
		for(let i = 0; i <= apiTasks.data.length; i++){
			let task = apiTasks.data.shift()
			ProxyDash.tasks.unshift(task)
		}
		//FIXME get tasklist to populate 
		console.log(ProxyDash.tasklist)
		return ProxyDash.tasklist
	}
	findTemplate(){
		let found = ProxyDash.tasklist.shift()
		console.log(found.Tasklist)
		return found.Tasklist
	}
}

export const tasklistService = new TasklistService