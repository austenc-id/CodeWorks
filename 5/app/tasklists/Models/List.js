import { ProxyState } from '../../main/AppState.js';
import { generateId } from '../../main/Utilities/generateIds.js';
import { Task } from './Task.js';

export class List {

	constructor(listData){

		this.listId = listData.listId || generateId()
		this.listname = listData.listname
		this.color = listData.color
		this.tasks = []

	}

	get CardTemplate() {
		return /*html*/`

	<card class="card col-lg-6 text-center">
		<card class='card-header' style="background-color: ${this.color};">
			<colm class='col-lg'>
				${this.listname}
			</colm>
			<colm class='col-lg-1'>
				<img src="" alt="">
			</colm>
		</card>
		<card class='card-body'>
			<div class="container">
				<row class='row'>
					<colm class='col-lg'>
						Tasks:
					</colm>
					<colm class='col-lg-1'>
						<img src="style/images/tasklists/list-plus.png" alt="add-task" onclick="app.tasklistsController.newTask('${this.listId}')">
					</colm>
				</row>
				<row class='row visually-hidden' id="new-task-${this.listId}">
					<form onsubmit="app.tasklistsController.submitTask('${this.listId}')">
						<field class="form-group">
							<label for="taskname">task:</label>
							<input type="text" class="form-control" name="taskname" id="taskname" required>
						</field>
						<field class="button-group my-3">
							<button type="reset" class="btn btn-dark">clear</button>
							<button type="submit" class="btn btn-dark">submit</button>
						</field>
					</form>
				</row>
				<ol class="text-start">
					${this.Tasks}
				</ol>
			</div>
		</card>
		<card class='card-footer'></card>
	</card>

		`
}
	get Tasks(){
		let template = ''
		this.tasks.forEach(task => template += task.ListTemplate)
		console.log(template)
		return template
		
	}
}