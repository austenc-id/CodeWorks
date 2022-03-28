import { ProxyState } from "../../../../state/app-data.js";
import { tasksLogic } from "../../../logic/tasklists/logic-tasks.js";
import { _drawTasks } from "../../render/tasklists/render-tasks.js";

export class TasksController {

	attemptTaskEntry(listId){
			event.preventDefault()
		   /**
     * @type {HTMLFormElement}
     */
    
    // @ts-ignore

		const form = event.target

			const taskInput = {
			taskname: form.taskname.value,
			listId: listId,

		}
		  try {
      tasksLogic.addTask(taskInput)
    } catch (e) {
      form.make.classList.add('border-danger')
      return
    }
		console.log('task sent to logic')
    form.reset()
		_drawTasks()
	}


	attemptCompleteTask(taskId){

		try {
			tasksLogic.saveTaskState(taskId)
		} catch (e) {
		}
	}
}
