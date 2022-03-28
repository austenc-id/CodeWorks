import { ProxyDash } from "../dash-state.js"
import { Time } from "../models/Time.js"

class TimeService {
	injectTime(){
		ProxyDash.time = [new Time()]
		return ProxyDash.time
	}
	findTemplate(){
		let found = ProxyDash.time.shift()
			return found.Clock
	}
}

export const timeService = new TimeService