import { ProxyState } from "../../../state/app-data.js";
import { getMaterialEntryTemplate } from "../../models/entry-forms/material-entry.js";


function toggleToMaterialContent(){
	document.getElementById('content-row').innerHTML = `
	<row class="row" id="materials-content">
    <div class="col-lg-1">
      <img src="style/images/main/list-plus.png" id="add-item" onclick="app.showMaterials.showMaterialEntryTemplate()">
    </div>
    <div class="col-lg">
      <div class="container">
				<div id="materials-form"></div>
        <div class="row" id="materials"></div>
      </div>
    </div>
    </row>`

}

export function _drawMaterials(){
	let template = ''
	ProxyState.materials.forEach(material => template += material.CardTemplate)
	document.getElementById('materials').innerHTML = template
	document.getElementById('materials-form').innerHTML = ''
}

export class ShowMaterials{
	showMaterials(){
		toggleToMaterialContent()
		_drawMaterials()
	}
	showMaterialEntryTemplate(){
		let materialsForm = getMaterialEntryTemplate()
		document.getElementById('materials-form').innerHTML = materialsForm
		}
	}
