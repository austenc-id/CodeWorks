import { ProxyDash } from "../dash-state.js";
import { Dashboard } from "../models/Dashboard.js";

var dash = ProxyDash.dashboard

class ImageService {
	injectURL(apiData){
		ProxyDash.image = apiData.data.url
		return ProxyDash.image
	}
	createDashboard(imageUrl){
		dash = [...ProxyDash.dashboard, new Dashboard(imageUrl)]
		return dash
	}
	findTemplate(dash){
		let found = dash.shift()
		return found.Template
	}
}

export const imgService = new ImageService