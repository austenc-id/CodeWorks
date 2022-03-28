import { quoteService } from "../services/QuoteService.js";
import { sandboxService } from "../services/SandboxAPIService.js";
import { reqWeather } from "./WeatherCtlr.js";

function _injectQuote(apiQuote){
	try {
		var quote = quoteService.injectQuote(apiQuote)
	} catch {}
	_drawQuoteWidget(quote)
}

function _drawQuoteWidget(quote){
	let template = ''
	try { 
		template = quoteService.findTemplate()
	}catch{}
	document.getElementById('quote-widget').innerHTML = template
}
export function reqQuote(){
		try {
			 sandboxService.getQuote()
			.then(apiQuote => {
				_injectQuote(apiQuote)
			}).catch((err) => {});
		} catch {}
	}


export class QuoteCtlr {
	revealAuthor(){
		document.getElementById('author').classList.toggle('visually-hidden')
	}

}