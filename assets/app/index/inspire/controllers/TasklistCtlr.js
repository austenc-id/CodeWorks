import { tasklistService } from "../services/TasklistService.js"

function _injectTasks(apiTasks){
	console.log('injecting tasks')
	try {
		var tasks = tasklistService.injectTasks(apiTasks)
	}catch{}
	_drawTasklist(tasks)
}
function _drawTasklist(tasks){
	console.log(tasks)
	try {
		var template = tasklistService.findTemplate()
	}catch{}
	document.getElementById('tasklist').innerHTML = template
}

export function	loadTasklist(apiTasks){
		console.log(apiTasks)
	_injectTasks(apiTasks)
	}

export class TasklistCtlr {

}