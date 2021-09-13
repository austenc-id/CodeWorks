import { dashAPIService } from "../services/DashboardAPIService.js";
import { quoteService } from "../services/QuoteService.js";



function _injectQuote(quote){
	try {
		quoteService.injectQuote(quote)
	} catch {}
	console.log(quote)
	_drawQuote(quote)
}

function _drawQuote(quote){
	document.getElementById('quote-widget').innerHTML = quote
}


export async function reqQuote(){
			try {
			 dashAPIService.getQuote()
			.then(quote => {
				_injectQuote(quote)
			}).catch((err) => {});
		} catch {}
}