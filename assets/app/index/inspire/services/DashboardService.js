import { Dashboard } from "../models/Dashboard.js"
import { ProxyDash } from "../state.js"

var dash = ProxyDash.dashboard

class DashboardService {
	createDashboard(imageUrl){
		dash = [...ProxyDash.dashboard, new Dashboard(imageUrl)]
		return dash
	}
		findTemplate(dash){
		let found = dash.shift()
		return found.Template
	}
}

export const dashboardService = new DashboardService