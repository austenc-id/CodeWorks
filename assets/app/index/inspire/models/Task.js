import { ProxyDash } from "../dash-state.js"

export class Task {
	constructor(api){
		this.id = api.data.id
		this.name = api.data.description
		this.done = api.data.completed
		this.date = api.data.createdAt
	}
get Task(){
	return /*html*/`
	<li>${this.name}</li>
	`
}

}

export class Tasklist{
	constructor(){
		this.title = 'tasklist'
		this.tasks = {}
	}
	get Tasklist(){
		return /*html*/`
	<card class="card">
		<card class="card-header text-capitalize">
			${this.title}
			<ol id="draw-tasks"></ol>
		</card>
	</card>
	`
	}
}