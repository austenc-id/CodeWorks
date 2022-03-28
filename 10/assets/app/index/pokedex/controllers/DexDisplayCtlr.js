import { ProxyDex } from "../state.js"

var entries = ProxyDex.dexEntries
function _drawList(){
	let template = ''
	entries.forEach(entry => template += entry.ListTemplate)
	document.getElementById('dex-list').innerHTML = template}

function _drawDex(){
document.getElementById('draw-content').innerHTML = `<colm class="col-md-3" id="dex-list">
																											</colm>
																											<colm class='col-md-6' id="dex-data">
																											</colm>`}

export class DexCtlr {
	showDex(){
		_drawDex()
		_drawList()}

	drawData(i){
		let selection = entries[i].DataTemplate
		
		document.getElementById('dex-data').innerHTML = selection
		// let undiscovered = selection.replace(selection, '???')
		// document.getElementById('false').innerHTML = undiscovered
	}
}