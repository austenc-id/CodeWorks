import { ProxyDash } from "../state.js"

class QuoteService {
injectQuote(apiData){
		ProxyDash.quote = apiData.data.content 
		return ProxyDash.quote
	}
}

export const quoteService = new QuoteService