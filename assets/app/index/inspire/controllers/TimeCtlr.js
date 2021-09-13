
import { timeService } from "../services/TimeService.js"


function _injectTime(){
	try {
		return timeService.injectTime()
	} catch{}

}

export function displayTime(){
	_injectTime()
	try{
		var clock = timeService.findTemplate()
	} catch{}
		document.getElementById('time-widget').innerHTML = clock
		setTimeout(displayTime, 1000)
	}