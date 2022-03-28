import { entriesService } from "../services/EntriesService.js"


function _drawEntry(date){
	try {
	var found =	entriesService.findEntry(date)
	} catch {}
	document.getElementById('journal-entry').innerHTML = found.EntryTemplate
}

export class EntriesCtlr {
	showEntry(date){
		_drawEntry(date)
}
}