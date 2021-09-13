	export class Week {
		constructor(data){
			this.week = data.week
			this.mon = data.mon
			this.tues = data.tues 
			this.wed = data.wed 
			this.thurs = data.thurs 
			this.fri = data.fri
			this.quiz = data.quiz
			this.selectday = 'app.journal.entries.showEntry('
		}

	
		get Template (){
		return `
		<h4 class="text-capitalize">entries</h4>
			<ol class="list-group">
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.selectday}'${this.mon}')">${this.mon}</li>
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.selectday}'${this.tues}')">${this.tues}</li>
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.selectday}'${this.wed}')">${this.wed}</li>
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.selectday}'${this.thurs}')">${this.thurs}</li>
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.selectday}'${this.quiz}')">${this.quiz}</li>
			</ol>
		`
	}
}