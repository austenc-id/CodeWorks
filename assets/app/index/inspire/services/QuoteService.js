import { ProxyDash } from "../dash-state.js";


class QuoteService {
injectQuote(quote){
		ProxyDash.quote = quote.data.content
		return ProxyDash.quote
	}
injectAuthor(author){
	ProxyDash.author = author.data.author
	return ProxyDash.author
}
}



export const quoteService = new QuoteService