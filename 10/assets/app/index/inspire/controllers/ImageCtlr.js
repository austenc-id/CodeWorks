import { imgService } from "../services/ImageService.js"
import { sandboxService } from "../services/SandboxAPIService.js"
import { drawDashboard } from "./DashboardCtlr.js"
import { reqQuote } from "./QuoteCtlr.js"

function _injectURL(image){
	try {
	var imageUrl = imgService.injectURL(image)
	}	catch{}
	_createDashboard(imageUrl)
}

function _createDashboard(imageUrl){
		try {
		var dash = imgService.createDashboard(imageUrl)
	} catch{}
	drawDashboard(dash)
}





export class ImageCtlr{
	injectImageUrl(image){
		_injectURL(image)
	}
	async reqDashboard(){
		try {
		await	sandboxService.getBackdrop()
		.then(image => {
			_injectURL(image)
		}).catch((err) => {});}
		catch {}
		}
}