export class Application {
	constructor ( data ) {
		this.index = data.index
		this.title = data.title
		this.img = data.img
		this.selection = data.selection
		this.topic = data.topic
		this.description = data.desc
	}

	get NavTemplate () {
		return /*html*/ `
			<ul class="list-group nav text-uppercase">
				<li class="list-group-item nav-link selectable" id="${this.index}" 
				onclick="app.utilities.content.showApp('${this.title}'),${this.selection}">
					${this.title}
				</li>
			</ul>
		`
	}
	get AppTemplate () {
		return /*html*/`
			
			<row class="row"><h1 class="text-capitalize">${this.title}</h1></row>
			<row class="row"><colm class="col-md-1"></colm>${this.topic}</row>
			<row class="row">${this.description}</row>
			<row class="row" id="draw-content"></row>
			`
	}
}