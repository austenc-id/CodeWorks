import { appsService } from "../services/AppsService.js"


function _drawApp(found){
	document.getElementById('draw-app').innerHTML = found.AppTemplate
	}

export class AppsCtlr{
	showApp(title){
			try { var found = appsService.findApp(title)} 
			catch (error) {}
			_drawApp(found)
	}
}