import { DashboardCore } from "./index/inspire/core.js"
import { JournalCore } from "./index/journal/core.js"
import { DexCore } from "./index/pokedex/core.js"
import { UtilityCore } from "./index/utilities/core.js"


class App {
	utilities = new UtilityCore
	journal = new JournalCore
	inspire = new DashboardCore
	dex = new DexCore
}




console.log('hello from index.js')

window["app"] = new App










//import { AppCtlr } from "./index/0-Main/controllers/AppsCtlr.js"
//import { NavbarCtlr } from "./index/0-Main/controllers/NavbarCtlr.js"
//import { DashboardCtlr } from "./index/inspire/controllers/DashboardCtlr.js"
//import { JournalCtlr } from "./index/journal/controllers/JournalCtlr.js"


//class App {
//	index = new NavbarCtlr
//	apps = new AppCtlr
//	journal = new JournalCtlr
//	dashboard = new DashboardCtlr
//}



//console.log('hello from index.js')

//window["app"] = new App
