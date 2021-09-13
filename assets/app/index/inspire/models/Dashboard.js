import { ProxyDash } from "../state.js"

export class Dashboard {
	constructor(apiData){
		this.image = ProxyDash.image
		this.weather = apiData.weather
		this.quote = ProxyDash.quote
		this.time = apiData.time
		this.tasklist = apiData.tasklist
	}

	get Template(){
		return /*html*/`
			<backdrop class="bg-image" style="background-image: url(${this.image});">
				<container class="container-fluid" id="">
					<row class="row" id="">
						<colm class="col-md" id="weather-widget"></colm>
						<colm class="col-md text-black" id="quote-widget">${this.quote}</colm>
						<colm class="col-md" id="time-widget"></colm>
						<colm class="col-md" id="tasklist-widget"></colm>
					</row>
				</container>
			</backdrop>
		`
	}
}