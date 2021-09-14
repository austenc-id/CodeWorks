import { ProxyDash } from "../dash-state.js"
import { Task } from "../models/Task.js"
import { sandboxService } from "./SandboxAPIService.js"

class TasklistService {
	submitTask(task){
		//ProxyDash.tasks = [...ProxyDash.tasks, new Task(task)]
		console.log(ProxyDash.tasks)
		//return ProxyDash.tasks
	}
	injectTasks(data){
		ProxyDash.tasks = data.map(t => new Task(t))
		let completed = ProxyDash.tasks.filter(t => t.completed === true)
		console.log(completed.length)
		
}
	getTemplate(){
		let template = ''
		ProxyDash.tasks.forEach(t => template += t.TaskTemplate)
		return template
	}


}

export const tasklistService = new TasklistService