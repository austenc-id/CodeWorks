export class Weather {
	constructor ( api ) {
		this.humidity = api.data.main.humidity
		this.pressure = api.data.main.pressure
		this.tempK = api.data.main.temp
		this.tempC = Math.round( this.tempK - 273.16 )
		this.tempF = Math.round( 9 / 5 * this.tempC + 32 )
		this.formulaSource = 'https://www.weather.gov/media/epz/wxcalc/tempConvert.pdf'
		this.location = api.data.name
		this.weather = api.data.weather[ 0 ].main
		this.icon = api.data.weather[ 0 ].icon
		this.description = api.data.weather[ 0 ].description
	}

	get WeatherTemplate () {
		return /*html*/`
			<card class='card'>
	<card class='card-header'>
		<h3>${this.weather}</h3>
		<span>${this.location}</span>
	</card>
	<card class='card-body'>
		<row class="row">
			<p class="col-md-9" id="tempF">
			${this.tempF} degrees F
		</p>
		<p class="col-md-9 visually-hidden" id="tempC">
			${this.tempC} degrees C
		</p>
		<button class="col-md-3 btn-dark" onclick="app.inspire.weather.toggleTemperature()">
			C/F
		</button>
		</row>
		<p>
			${this.humidity}% humidity
		</p>
		<p>${this.description}</p>
	</card>
</card>
		`
	}
}