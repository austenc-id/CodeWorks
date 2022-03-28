export class Journal {
	constructor(){
		this.name = 'journal'
	}

	get Template (){
		return /*html*/`
		<colm class="col-md-2" id="weekly-list">
		</colm>
		<colm class="col-md-3" id="entry-list"></colm>
		<colm class="col-md" id="journal-entry"></colm>
		`
	}
}