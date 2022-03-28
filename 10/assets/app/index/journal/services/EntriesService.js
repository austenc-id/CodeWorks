import { ProxyJournal } from "../journal-state.js";

class EntriesService {

	findEntries(weekId){
		return ProxyJournal.weeks.find(w=> weekId === w.week)
	}
	findEntry(date){
		return ProxyJournal.entries.find(entry => date === entry.date)
	}
}

export const entriesService = new EntriesService