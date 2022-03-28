import { ProxyState } from "../../../state/app-data.js";
import { getQuestEntryTemplate } from "../../models/entry-forms/quest-entry.js";

function toggleToQuestContent(){
	document.getElementById('content-row').innerHTML = `
		<row class="row" id="quest-content">
          <div class="col-lg-1">
            <img src="style/images/main/list-plus.png" id="add-item" onclick="app.showQuests.showQuestEntryTemplate()">
          </div>
          <div class="col-lg">
            <div class="container">
							<div id="quest-form"></div>
              <div class="row" id="quests"></div>
            </div>
          </div>
					
    </row>`
}

export function _drawQuests(){
	let template = '';
	ProxyState.quests.forEach(quest => template += quest.CardTemplate)
	document.getElementById('quests').innerHTML = template
	document.getElementById('quest-form').innerHTML = ''
}


export class ShowQuests {
	showQuests(){
		toggleToQuestContent()
		_drawQuests()
	}
	showQuestEntryTemplate(){
		let questForm = getQuestEntryTemplate()
		document.getElementById('quest-form').innerHTML = questForm
	}
}