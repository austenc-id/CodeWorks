export class Journal {
	constructor(data){
		this.name = data.name
		this.week = data.week
		this.select = 'app.journal.lists.showEntries('+ this.week +')'
	}
	
	get Template (){
		return /*html*/`
			<ol class="list-group">
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.select}">
				wk${this.week}</li>
			</ol>
		`
	}
}