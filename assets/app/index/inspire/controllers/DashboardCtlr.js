import { dashboardService } from "../services/DashboardService.js";
import { reqImage } from "./ImageCtlr.js";
import { reqQuote } from "./QuoteCtlr.js";

function _createDashboard(imageUrl){
	try {
		var dash = dashboardService.createDashboard(imageUrl)
	} catch{}
	_drawDashboard(dash)
}

function _drawDashboard(dash){
	try {
var template = 	dashboardService.findTemplate(dash)
} catch {}
document.getElementById('draw-content').innerHTML = template
}

export class DashboardCtlr {
	async drawDashboard(){
		reqImage()
		.then(imageUrl =>{
				_createDashboard(imageUrl)})
			.catch((err) => {});
		reqQuote()
		}
}