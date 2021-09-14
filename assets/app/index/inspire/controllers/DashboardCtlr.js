import { ImageCtlr } from "./ImageCtlr.js";
import { QuoteCtlr, reqQuote } from "./QuoteCtlr.js";
import { UserCtlr } from "./UserCtlr.js";
import { reqWeather, WeatherCtlr } from "./WeatherCtlr.js";
import { sandboxService } from "../services/SandboxAPIService.js";
import { TasklistCtlr } from "./TasklistCtlr.js";
import { imgService } from "../services/ImageService.js";
import { displayTime } from "./TimeCtlr.js";
import { userService } from "../services/UserService.js";
import { tasklistService } from "../services/TasklistService.js";


export function drawDashboard(dash){
try {
var template = 	imgService.findTemplate(dash)
} catch {}
document.getElementById('draw-content').innerHTML = template
displayTime()
reqWeather()
reqQuote()
}
export async function intializeUser(){
		try{
		userService.getDisplayName()
	}catch{}
	var data = await sandboxService.getTasks()
	tasklistService.injectTasks(data)
	let template = tasklistService.getTemplate()
	document.getElementById('tasks').innerHTML = template
}

export class DashboardCtlr{
	image = new ImageCtlr
	quote = new QuoteCtlr
	weather = new WeatherCtlr
	user = new UserCtlr
	tasks = new TasklistCtlr
}
