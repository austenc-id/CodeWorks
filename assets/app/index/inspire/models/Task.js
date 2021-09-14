export class Task {
	constructor(taskData){
		this.description = taskData.description
		this.name = taskData.description
		this.id = taskData.id
		this.complete = false
	}
	get TaskTemplate(){
		return `<li id="${this.id}">${this.name}
		<img src="assets/style/images/icons/list-check.png" onclick="app.inspire.tasks.completeTask('${this.id}')">
		<img src="assets/style/images/icons/list-minus.png" onclick="app.inspire.tasks.deleteTask('${this.id}')">
		</li>`
	}
}