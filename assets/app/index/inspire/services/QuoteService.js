import { ProxyDash } from "../dash-state.js";
import { Quote } from "../models/Quote.js";


class QuoteService {
injectQuote(apiQuote){
	let quote = apiQuote
		ProxyDash.quote = [new Quote(quote)]
		console.log(ProxyDash.quote)
		return ProxyDash.quote
	}
findTemplate(){
	let found = ProxyDash.quote.shift()
	return found.Template
}
}



export const quoteService = new QuoteService