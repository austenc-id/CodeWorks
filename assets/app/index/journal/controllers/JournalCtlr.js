import { ProxyJournal } from "../journal-state.js"
import { EntriesCtlr } from "./EntriesCtlr.js"
import { ListsCtlr } from "./ListsCtlr.js"

var weeks = ProxyJournal.journals

function _drawJournal(){
document.getElementById('draw-content').innerHTML = `<colm class="col-md-1" id="weekly-list">
																											</colm>
																											<colm class="col-md-2" id="entry-list"></colm>
																											<colm class="col-md" id="journal-entry"></colm>
																											`}

function _drawWeeks(){
	let template = ''
	weeks.forEach(week => template += week.Template)
	document.getElementById('weekly-list').innerHTML = template
}
export class JournalCtlr {
showJournal (){
	_drawJournal()
	_drawWeeks()
	
}
lists = new ListsCtlr
entries = new EntriesCtlr

}