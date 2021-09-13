import { sandboxService } from "../services/SandboxAPIService.js";
import { weatherService } from "../services/WeatherService.js";
import { displayTime } from "./TimeCtlr.js";

function _injectWeather(apiWeather){
	try {
		var weather = weatherService.injectWeather(apiWeather)
	} catch {}
	_drawWeather(weather)
}

function _drawWeather(weather){
	console.log(weather)
	let template = ''
	try {
		template = weatherService.findTemplate()
	} catch{}
	document.getElementById('weather-widget').innerHTML = template
	displayTime()
	
}

export function reqWeather(){
			try {
			 sandboxService.getWeather()
			.then(apiWeather => {
				_injectWeather(apiWeather)
			}).catch((err) => {});
		} catch {}
}

export class WeatherCtlr{
toggleTemperature(){
	document.getElementById('tempF').classList.toggle('visually-hidden')
	document.getElementById('tempC').classList.toggle('visually-hidden')
} 
}
