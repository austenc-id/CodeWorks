export class Pokemon {
	constructor(dexEntry){
		this.dexId = dexEntry.dex
		this.name = dexEntry.n
		this.click = 'app.dex.dexDisplay.drawData' + '(' + this.dexId + ')'
		this.url = '/api/v2/pokemon-species/' + this.dexId
	}
	get ListTemplate(){
		return /*html*/`
			<ol class="list-group">
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.click}">${this.dexId}</li>
			</ol>
		`}
	get DataTemplate(){
		return /*html*/`
		<card>
			<h2 class="text-capitalize">${this.dexId} - ${this.name}</h1>
		</card>
		`}
}