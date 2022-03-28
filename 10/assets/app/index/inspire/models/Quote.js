export class Quote {
	constructor ( api ) {
		this.quote = api.data.content
		this.author = api.data.author
	}

	get Template () {
		return /*html*/`
								<card class="card-body">
									<p onmouseover="app.inspire.quote.revealAuthor()">${this.quote}</p>
									<p class="visually-hidden" id="author">${this.author}</p>
								</card>
		`
	}
}