import { ProxyState } from "../../../../state/app-data.js";
import { getNewListTemplate } from "../../../models/entry-forms/tasklists/new-list.js";
import { _drawTasks } from "./render-tasks.js";

function toggleToListContent(){
	document.getElementById('content-row').innerHTML = `
	<div class="row" id="lists-content">
		
		<div class="col-lg">
			<div class="container">
				<div id="list-form"></div>
				<div class="row" id="lists"></div>
			</div>
		</div>
		<div class="col-lg-1">
			<img src="style/images/main/list-plus.png" alt="add-item" onclick="app.showLists.showNewListTemplate()">
		</div>
	</div>
	`
}

export function _drawLists(){
	let listTemplate = '';
	ProxyState.lists.forEach(list => listTemplate += list.CardTemplate)
	document.getElementById('lists').innerHTML = listTemplate
	document.getElementById('list-form').innerHTML = ''
}



export class ShowLists {
	showLists(){
		toggleToListContent()
		_drawLists()
		_drawTasks()
	}
	showNewListTemplate(){
		let listForm = getNewListTemplate()
		document.getElementById('list-form').innerHTML = listForm
	}
}
