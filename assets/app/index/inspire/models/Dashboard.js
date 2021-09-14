import { ProxyDash } from "../dash-state.js"

export class Dashboard {
	constructor(apiData){
		this.image = ProxyDash.image
	}

	get Template(){
		return /*html*/`
<backdrop class="bg-image container-fluid" style="background-image: url(${this.image});">
	<row class="row">
		<colm class="col-md-4" id="userform">
			<card class="card text-center" onclick="app.inspire.user.showUserForm()">"Login"</card>
			<card class="card visually-hidden" id="user-display">Username</card>
		</colm>
		<colm class="col-md-4">
		</colm>
	</row>
	<row class="row">
		<colm class="col-md"></colm>
		<colm class="col-md" id="time-widget"></colm>
		<colm class="col-md"></colm>
	</row>
	<row class="row">
		<colm class="col-md-4 weather-widget" id="weather-widget"></colm>
		<colm class="col-md-4 visually-hidden" id="tasklist">
			<card class='card'>
				<card class='card-header'>My Tasks:</card>
				<card class='card-body'>
					<ol id="tasks"></ol>
				</card>
				<card class='card-footer'>
					<button class="btn-dark" onclick="app.inspire.tasks.addTask()" id="task-button">add Task</button>
					<form class="bg-black rounded p-3 shadow visually-hidden" onsubmit="app.inspire.tasks.submitTask()"
						id="task-form">
						<label for="description">task:</label>
						<input type="text" name="description" id="description" required>
					</form>
				</card>
			</card>
		</colm>
	</row>
	<row class="row">
		<colm class="col-md-4" id="quote-widget"></colm>
	</row>
</backdrop>
		`
	}
}