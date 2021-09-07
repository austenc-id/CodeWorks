import { ProxyState } from "../../../../state/app-data.js";

export function _drawTasks(){
	let taskTemplate = '';
	ProxyState.tasks.forEach(task => taskTemplate += task.CardTemplate)
}

export class ShowTasks{

	toggleTaskEntryTemplate(){
		document.getElementById('toggle-task-form').classList.toggle('visually-hidden')	
	}

}