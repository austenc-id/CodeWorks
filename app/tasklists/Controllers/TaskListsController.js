import { ProxyState } from "../../main/AppState.js"
import { tasklistsLogic } from "../Logic/TaskListsLogic.js"
import { getNewListTemplate } from "../Models/entry-forms/list.js"
import { Task } from "../Models/Task.js"

function _drawLists(){
	let template = ''
	ProxyState.lists.forEach(list => template += list.CardTemplate)
	document.getElementById('tasklists-cards').innerHTML = template
}
function sortTasks(){
	try {tasklistsLogic.sortTask()}
	catch (e) {}
}
		
		
	
			
			
	
// function _drawTasks(){
// 	let template = ''
// 	// ProxyState.lists.forEach(task => template +=task.ListTemplate)
// 	// // document.getElementById('tasks').innerHTML = template
// 	console.log(template)
// }


export class TaskListsController {
	showTaskLists(){
		sortTasks()
		_drawLists()
		console.log('lists drawn')
		// _drawTasks()
		// console.log('tasks drawn')
	}
	newList(){
		document.getElementById('List-form').classList.toggle('visually-hidden')
		document.getElementById('List-form').innerHTML = getNewListTemplate()
		console.log('new list toggle')
	}
	newTask(listId){
		let elementId = 'new-task-' + listId
		document.getElementById(elementId).classList.toggle('visually-hidden')
		console.log('new task toggle')
	}
	submitList (){
		document.getElementById('List-form').classList.toggle('visually-hidden')
				event.preventDefault()
		  /**
     * @type {HTMLFormElement}
     */
    
    // @ts-ignore
		const form = event.target

		const listData = {
			listname: form.listname.value,
			// color: form.color.value,
		}

		try{
			tasklistsLogic.addList(listData)
			
		} catch (e) {
			form.listname.classList.add('border-danger')
		}
		console.log('new list created')
		form.reset()
		_drawLists()
	}
	submitTask(listId){
		console.log(listId)
				event.preventDefault()
		  /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
		const form = event.target
		const taskData = {
			listId: listId,
			taskname: form.taskname.value,
		}
		try{
			tasklistsLogic.addTask(taskData)
		} catch (e) {}
		
		console.log('new task created')
		form.reset()
		sortTasks()
		_drawLists()
		// _drawTasks()
	}
	completeTask(taskId){
		document.getElementById(taskId).classList.toggle('task-complete')
	}
}