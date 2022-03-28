import { ProxyState } from "../../../../state/app-data.js";
import { listsLogic } from "../../../logic/tasklists/logic-lists.js";
import { _drawLists } from '../../render/tasklists/render-lists.js';
import { _drawTasks } from "../../render/tasklists/render-tasks.js";


export class ListsController {
	constructor(){
		ProxyState.on('lists', _drawLists)
		ProxyState.on('tasks', _drawLists)
		// _drawLists()
	}

	attemptNewList(){
			event.preventDefault()
		   /**
     * @type {HTMLFormElement}
     */
    
    // @ts-ignore

		const form = event.target

		const listInput = {
			listname: form.listname.value,
			color: form.color.value,
			// tasks: form.tasks.value,
			// progress: form.progress.value,
		}
		  try {
      listsLogic.addList(listInput)
    } catch (e) {
      form.make.classList.add('border-danger')
      return
    }
		console.log('list sent to logic')
    form.reset()
		_drawLists()
		_drawTasks()
	}

		attemptRemoveList(){

		const list = ProxyState.lists

		try {
     	listsLogic.removeList(list)
    } catch (e) {
    }
		_drawLists()
		_drawTasks()
	}
}
