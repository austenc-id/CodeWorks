import { ProxyDash } from "../dash-state.js"
import { sandboxService } from "../services/SandboxAPIService.js"
import { tasklistService } from "../services/TasklistService.js"
import { intializeUser } from "./DashboardCtlr.js"

async function _pushTasks(task){
try{
	//let res = await sandboxService.postTask(task)
	//console.log(res)
}catch{}
}

export function drawTasklist(){
	let template = ''
	try{tasklistService.getTemplate()}catch{}
	console.log(template)
	document.getElementById('tasks').innerHTML = ''
}
export class TasklistCtlr{
	constructor(){
		ProxyDash.on('tasks', _pushTasks)
		//sandboxService.getTasks()
	}
	addTask(){
		document.getElementById('task-button').classList.toggle('visually-hidden')
		document.getElementById('task-form').classList.toggle('visually-hidden')
	}
	async submitTask(){
		console.log('WAT')
		event.preventDefault() 
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    const task = {
      description: form.description.value,
    }
    try {
      await sandboxService.postTask(task)
    } catch (e) {console.log('push task fail')}
    form.reset()
		intializeUser()
	}
	completeTask(id){
		document.getElementById(id).classList.toggle('task-complete')
		tasklistService.completeTask(id)
	}
	deleteTask(id){
		var result = confirm("You sure?")
		if(result){
		sandboxService.deleteTask(id)
		intializeUser()
		}
		intializeUser()
	}
}