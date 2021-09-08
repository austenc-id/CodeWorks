import { ProxyState } from "../AppState.js"

function _drawNavbar(){
	let template = ''
	ProxyState.navbarItems.forEach(item => template += item.ContentTemplate)
	document.getElementById('draw-navbar').innerHTML = template
}
function _drawSection(){
	let foundsection = ''
	ProxyState.sections.find(section => foundsection += section.ContentTemplate)
	document.getElementById('draw-content').innerHTML = foundsection
	}



export class NavbarController{
	showNavbar(){
		_drawNavbar()
	}
	
	showSection(){
		ProxyState.sections.find(section => section.title)
		console.log('section loaded')
		_drawSection()
	}
}