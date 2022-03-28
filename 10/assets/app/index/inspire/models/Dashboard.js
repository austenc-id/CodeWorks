import { ProxyDash } from "../dash-state.js"

export class Dashboard {
	constructor ( apiData ) {
		this.image = ProxyDash.image
	}

	get Template () {
		return /*html*/`
<backdrop class="bg-image container-fluid" style="background-image: url(${this.image});">
	<row class="row">
		<colm class="col-md-4 weather-widget" id="weather-widget">
		</colm>
		<colm class="col-md-4">
			<div class="container-fluid">
				<row class="row" id="time-widget">
				</row>
				<row class="row">
					<colm class="visually-hidden" id="tasklist">
						<card class='card'>
							<card class='card-body'>
								My Tasks:
								<ol id="tasks"></ol>
							</card>
								<button class="btn-dark" onclick="app.inspire.tasks.addTask()" id="task-button">add Task</button>
								<form class="bg-black rounded p-3 shadow visually-hidden" onsubmit="app.inspire.tasks.submitTask()"id="task-form">
									<label for="description">task:</label>
									<input type="text" name="description" id="description" required>
								</form>
						</card>
					</colm>
				</row>
			</div>
		</colm>
		<colm class="col-md-4">
		<div class="container-fluid">
			<row class="row" id="userform">
				<card class="card text-center" onclick="app.inspire.user.showUserForm()">"Login"</card>
				<card class="card visually-hidden" id="user-display">Username</card>
			</row>
			<row class="row">
				<card class="card" id="quote-widget"></card>
			</row>
		</div>
		</colm>
	</row>
</backdrop>
`
	}
}