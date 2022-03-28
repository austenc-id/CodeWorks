import { ProxyState } from "../data/appstate.js"
import { getTemplate } from '../data/models/Material.js';

function _drawMaterials(){
	let template = ''
	ProxyState.materials.forEach(material => template += material.Template)
	document.getElementById('materials').innerHTML = template
}
export class MaterialsController {
	constructor(){
		console.log('MaterialsController.js imported')
		ProxyState.on('materials', _drawMaterials)
		 //             ^^^^ magic string must match a property on the appstate
	}
	showMaterials(){
		_drawMaterials()
		document.getElementById('materials').innerHTML = getTemplate()
	}
}