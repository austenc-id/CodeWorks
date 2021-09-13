import { ProxyState } from "../../../appstate.js";


class AppsService {

	findApp(title){
	return ProxyState.apps.find(app => title === app.title)
	}

	findJournal(){
		let journal = ''
		return ProxyState.journal.find(j => journal = j.Template)
	}
}

export const appsService = new AppsService