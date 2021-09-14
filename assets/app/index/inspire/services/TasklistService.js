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
}
	getTemplate(){
		let template = ''
		ProxyDash.tasks.forEach(t => template += t.TaskTemplate)
		return template
	}
	completeTask(id){
		console.log(id)
		let found = ProxyDash.tasks.find(t => t.id === id)
		console.log(found)
		//found.complete = !found.complete
		console.log(found, ProxyDash.tasks)
		sandboxService.putComplete(id)
	}

}

export const tasklistService = new TasklistService