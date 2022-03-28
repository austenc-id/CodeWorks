import { ProxyDash } from "../dash-state.js";
import { Weather } from "../models/Weather.js";

class WeatherService{
	injectWeather(apiWeather){
		let weather = apiWeather
		ProxyDash.weather = [new Weather(weather)]
		return ProxyDash.weather
	}

	findTemplate(){
		let found = ProxyDash.weather.shift()
		return found.WeatherTemplate
	}
}

export const weatherService = new WeatherService