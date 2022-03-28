export class Entry {
	constructor(journalData){
		this.date = journalData.date
		this.topic = journalData.topic
		this.title = journalData.title
		this.week = journalData.week
		this.q1 = journalData.q1
		this.q2 = journalData.q2
		this.q3 = journalData.q3
		this.r1 = journalData.r1
		this.r2 = journalData.r2
		this.r3 = journalData.r3
		this.link = journalData.link
		this.build = journalData.build
		this.select = 'app.journal.drawEntry(' + this.date + ')'
	}
	get ListTemplate (){
		return `
		<h4 class="text-capitalize">entries</h4>
			<ol class="list-group">
				<li class="list-group-item nav-link selectable text-capitalize" onclick="${this.select}">
				${this.date} ${this.topic}</li>
			</ol>
		`
	}

	get EntryTemplate() {
		return `
		<h5 class="text-capitalize">${this.title}</h5>
		<p class="text-question">${this.q1}</p>
		<p class="text-response">${this.r1}</p>
		<p class="text-question">${this.q2}</p>
		<p class="text-response">${this.r2}</p>
		<p class="text-question">${this.q3}</p>
		<p class="text-response">${this.r3}</p>
		`
	}
}
