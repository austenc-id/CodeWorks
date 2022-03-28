import { generateId } from "../../../utilities/generateId.js"


export class Task {
	constructor(taskInput){
		this.listId = taskInput.listId
		this.taskId = generateId()
		this.taskname = taskInput.taskname
		this.complete = false
		// this.priority = taskInput.priority
		// this.deadline = taskInput.deadline 
	}

	get CardTemplate(){
		return /*html*/`
			<div class="container">
				<div class="row text-start">
					<li class="col-lg" id="${this.taskId}">${this.taskname}</li>
					<img src="style/images/main/list-check.png" alt="task-completed" onclick="app.tasksController.attemptCompleteTask('${this.taskId}')" class="col-lg-1">
					<!--<img src="style/images/main/list-minus.png" alt="remove-task" onclick="app.tasksController.attemptRemoveTask('${this.taskId}')" class="col-lg-1">-->
				</div>
			</div>
		`
	}
}