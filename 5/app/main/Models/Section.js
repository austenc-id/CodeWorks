export class Section{
		constructor(sectionData){
		this.title = sectionData.title
		this.model = sectionData.model
		this.action = sectionData.action
		this.icon = sectionData.icon
		this.controller = this.title + 'Controller'
		}
	get ContentTemplate(){
		return /*html*/ `
			<row class="row visually-hidden" id="${this.model}-form">
			</row>
			<row class="row" id="${this.model}-content">
				<colm class='col-lg-1' id="${this.title}-icon">
					<img src="style/images/main/${this.icon}" onload="app.${this.action}" onclick="app.${this.controller}.new${this.model}()">
				</colm>
				<colm class='col-lg' id=${this.title}-cards></colm>
			</row>
		`
	} 
}