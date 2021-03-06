import { Application } from "./index/utilities/models/Application.js";
import { Journal } from "./index/utilities/models/Journal.js";
import { EventEmitter } from "./index/utilities/services/utilities/EventEmitter.js";
import { isValidProp } from "./index/utilities/services/utilities/isValidProp.js";



class AppState extends EventEmitter {
	/** @type {import('./index/utilities/models/Value').Value[]} */
	values = [];
	apps = [
		new Application(
			{ index: 0, title: 'journal', selection: 'app.journal.dash.showJournal()', topic: '', desc: '', }
		),
		new Application(
			{ index: 1, title: 'thoughts of dog', selection: 'app.thoughts.drawPage()', topic: 'intro to html and css', desc: '', }
		),
		new Application(
			{ index: 2, title: 'arctic runner', selection: 'app.arctic.drawPage()', topic: 'intro to javascript', desc: '', }
		),
		// new Application(
		// 	{ index: 3, title: 'pokedex', selection: 'app.dex.dash.showDex()', topic: '', desc: '', }
		// ),
		new Application(
			{ index: 4, title: 'inspire', selection: 'app.inspire.image.reqDashboard()', topic: 'advancing with js and intro to api requests', desc: '', }
		)
	]
	journal = [ new Journal() ]
}

export const ProxyState = new Proxy( new AppState(), {
	get ( target, prop ) {
		isValidProp( target, prop )
		return target[ prop ]
	},
	set ( target, prop, value ) {
		isValidProp( target, prop )
		target[ prop ] = value
		target.emit( prop, value )
		return true
	}
} )