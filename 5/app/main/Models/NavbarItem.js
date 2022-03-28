export class NavbarItem {
	constructor(navbarData){
		this.order = navbarData.order
		this.title = navbarData.title 
		this.action = navbarData.action
		}
	get ContentTemplate(){
		return /*html*/ `
			<ul class="list-group nav">
				<li class="list-group-item nav-link selectable" id= "${this.order}" onclick="app.navbarController.showSection()">
					${this.title}
				</li>
			</ul>
		`
	} 
}