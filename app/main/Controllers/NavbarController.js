import { _drawTaskLists } from "../../tasklists/Controllers/TaskListsController.js"
import { ProxyState } from "../AppState.js"

function _drawNavbar(){
	let template = ''
	ProxyState.navbarItems.forEach(item => template += item.ContentTemplate)
	document.getElementById('draw-navbar').innerHTML = template
}
function _drawSection(section){
	let foundsection = ''
	ProxyState.sections.find(section => foundsection += section.ContentTemplate)
	document.getElementById('draw-content').innerHTML = foundsection
		_drawTaskLists()
	}



export class NavbarController{
	showNavbar(){
		_drawNavbar()
	}
	
	showSection(){
		let section = ProxyState.sections.find(section => section.title)
		console.log(section)
		_drawSection(section)
	}
}