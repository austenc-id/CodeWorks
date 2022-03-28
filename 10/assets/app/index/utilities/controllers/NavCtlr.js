import { ProxyState } from "../../../appstate.js"


function _drawNavbar(){
	let template = ''
	ProxyState.apps.forEach(title => template += title.NavTemplate)
	document.getElementById('draw-navbar').innerHTML = template
}

export class NavCtlr {
	showNavbar(){
		_drawNavbar()
	}

}