import { ProxyState } from "../../state/app-data.js";
import { Quest } from "../models/quest.js";
import { saveQuests } from '../../state/local-quests.js';

class QuestsLogic {
	constructor(){
		ProxyState.on('quests', saveQuests)
	}

	addQuest(questDetails){
		ProxyState.quests = [...ProxyState.quests, new Quest(questDetails)];
	}

	removeQuest(questId){
		ProxyState.quests = ProxyState.quests.filter(quest => quest.id !== questId);
		console.log(ProxyState.quests)
}
}

export const questsLogic = new QuestsLogic