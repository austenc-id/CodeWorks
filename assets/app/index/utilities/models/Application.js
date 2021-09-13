export class Application{
		constructor(data){
		this.index = data.index
		this.title = data.title
		this.img = data.img
		this.selection = data.selection
		}
 
		get NavTemplate(){
		return /*html*/ `
			<ul class="list-group nav text-uppercase">
				<li class="list-group-item nav-link selectable" id="${this.index}" 
				onclick="app.utilities.content.showApp('${this.title}'),${this.selection}">
					${this.title}
				</li>
			</ul>
		`
}
		get AppTemplate(){
			return /*html*/`
			<h1 class="text-capitalize">${this.title}</h1>
			<row class="row" id="draw-content">
			`
		}
}