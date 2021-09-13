import { quoteService } from "../services/QuoteService.js";
import { sandboxService } from "../services/SandboxAPIService.js";

function _injectQuote(quoteData){
	let quote = quoteData.data.content
	let author = quoteData.data.author
	try {
		quoteService.injectQuote(quote)
		quoteService.injectAuthor(author)
	} catch {}
	console.log(quote)
	_drawQuoteWidget(quote)
	_drawQuoteAuthor(author)
}

function _drawQuoteWidget(quote){
	document.getElementById('quote-widget').innerHTML = quote
}
function _drawQuoteAuthor(author){
	document.getElementById('author').innerHTML = author
}

export function reqQuote(){
		try {
			 sandboxService.getQuote()
			.then(quoteData => {
				_injectQuote(quoteData)
			}).catch((err) => {});
		} catch {}
	}


export class QuoteCtlr {


}