import { ProxyState } from "../../../state/app-data.js"
import { generateId } from "../../../utilities/generateId.js"
import { Task } from "./task.js"

export class List {
	constructor(listInput){
		this.listId = listInput.listId || generateId()
		this.listname = listInput.listname
		this.color = listInput.color
		this.progress = Boolean
		this.tasklist = []
	}

	get CardTemplate() {
			return /*html*/`
	<div class="">
		<itemcard class="card text-center">
			<itemcard class="card-header" style="background-color: ${this.color};">
				<div class="col-lg">${this.listname}</div>
				<div class="col-lg-1"><img src="style/images/main/list-minus.png" alt="remove-list" onclick="app.listsController.attemptRemoveList('${this.listId}')"></div>
			</itemcard>
			<itemcard class="card-body">
				<div class="container">
					<div class="row">
						<p class="col-lg">Tasks:</p>
						<div class="col-lg-1">
							<img src="style/images/main/list-plus.png" id="add-item" onclick="app.showTasks.toggleTaskEntryTemplate()">
						</div>
					</div>
					<div class="row visually-hidden" id="toggle-task-form">
						<div class="container">
							<form class="row" onsubmit="app.tasksController.attemptTaskEntry('${this.listId}')" id="${this.listId}">
								<div class="form-group">
									<label for="taskname">task:</label>
									<input type="text" class="form-control" name="taskname" id="taskname">
								</div>
								<div class="button-group my-3">
									<button type="reset" class="btn btn-dark">clear</button>
									<button type="submit" class="btn btn-dark">submit</button>
								</div>
							</form>
						</div>
					</div>	
					<div class="row">
						<ol class="col-lg" id="tasks">
							${this.Tasks}
						</ol>
					</div>
					</div>
			</itemcard>
			<itemcard class="card-footer">
				${this.progress}
			</itemcard>
		</itemcard>
	</div>
			`
	}

	get Tasks(){
		let template = ''
		let foundTasks = ProxyState.tasks.filter(task => task.listId === this.listId)
		foundTasks.forEach(task => template += task.CardTemplate)

		return template
	}
}

