import { ProxyDash } from "../dash-state.js"

export class Dashboard {
	constructor(apiData){
		this.image = ProxyDash.image
		this.time = apiData.time
		this.tasklist = apiData.tasklist
	}

	get Template(){
		return /*html*/`
			<backdrop class="bg-image" style="background-image: url(${this.image});">
				<container class="container-fluid" id="">
					<row class="row" id="" >
						<colm class="col-md" id="weather-widget"></colm>
						<colm class="col-md" id="quote-widget"></colm>
						<colm class="col-md" id="time-widget"></colm>
						<colm class="col-md" id="tasklist-widget">
							<container class="container">
								<row class="row" id="userform">
									<card class="card" onclick="app.inspire.user.showUserForm()">"Login"</card>
								</row>
								<row class="row visually-hidden" id="tasklist">
								</row>
							</container>
						</colm>
					</row>
				</container>
			</backdrop>
		`
	}
}