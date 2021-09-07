import { ProxyState } from "../../main/AppState.js"
import { tasklistsLogic } from "../Logic/TaskListsLogic.js"
import { getNewListTemplate } from "../Models/entry-forms/tasklist.js"

export function _drawTaskLists(){
	let template = ''
	ProxyState.tasklists.forEach(list => template += list.CardTemplate)
	document.getElementById('tasklists-cards').innerHTML = template
}

export class TaskListsController {

	showTaskLists(){
		_drawTaskLists()
	}

	newTaskList(){
		document.getElementById('TaskList-form').classList.toggle('visually-hidden')
		document.getElementById('TaskList-form').innerHTML = getNewListTemplate()
	}

	submitTaskList (){
		document.getElementById('TaskList-form').classList.toggle('visually-hidden')
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
			tasklistsLogic.addTaskList(listData)
			console.log('new tasklist sent to logic')
		} catch (e) {
			form.listname.classList.add('border-danger')
		}
		
		form.reset()
		_drawTaskLists()
	}
}