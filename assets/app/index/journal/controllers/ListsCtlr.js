import { entriesService } from "../services/EntriesService.js"

function _drawEntries(week){
	console.log(week)
try {
	var found =	entriesService.findEntries(week)
	} catch {}
	console.log(found)
	document.getElementById('entry-list').innerHTML = found.Template
}

export class ListsCtlr {
	showEntries(week){
		_drawEntries(week)
	}
}