import { generateId } from '../../main/Utilities/generateIds.js';
export class Task {
	constructor(taskData){
		this.listId = taskData.listId
		this.taskId = taskData.taskId || generateId()
		this.taskname = taskData.taskname
		this.status = false
	}
	
	get ListTemplate(){
		return `
			<li id="${this.taskId}">
				${this.taskname}
				<img src="style/images/tasklists/list-check.png" alt="task-completed" 
				onclick="app.tasklistsController.completeTask('${this.taskId}')">
			</li>
		`
	}
}


