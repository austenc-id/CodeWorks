export class Weather {
	constructor(api){
		this.humidity = api.data.main.humidity
		this.pressure = api.data.main.pressure
		this.tempK = api.data.main.temp
		this.tempC = Math.round(this.tempK - 273.16)
		this.tempF = Math.round(9 / 5 * this.tempC + 32)
		this.formulaSource = 'https://www.weather.gov/media/epz/wxcalc/tempConvert.pdf'
		this.location =  api.data.name
		this.weather = api.data.weather[0].main
		this.icon = api.data.weather[0].icon
		this.description = api.data.weather[0].description
	}

	get WeatherTemplate(){
		return /*html*/`
			<card class='card'>
	<card class='card-header'>
		<h3>${this.weather}</h3>
		<span>${this.location}</span>
	</card>
	<card class='card-body'>
		<p>${this.tempK} Kelvin</p>
		<p class="" id="tempF">
			temperature: ${this.tempF} deg F
		</p>
		<p class="visually-hidden" id="tempC">
			temperature: ${this.tempC} deg C
		</p>
		<p>
			humidity: ${this.humidity}%
		</p>
		<p>
			pressure: ${this.pressure}mm Hg
		</p>
	</card>
	<card class='card-footer'>
		<button class="btn-dark" onclick="app.inspire.weather.toggleTemperature()">
			Switch to Cel/Far
		</button>
	</card>
</card>
		`
	}
}