import { ProxyState } from "../../../state/app-data.js";
import { List } from "../../models/tasklists/list.js";
import { saveLists } from '../../../state/tasklists/local-lists.js';

class ListsLogic {
	constructor(){
		ProxyState.on('lists', saveLists)
	}

	addList(listInput){
		ProxyState.lists = [...ProxyState.lists, new List(listInput)];
		console.log('list added',ProxyState.lists)
	}

	removeList(listId){
		ProxyState.lists = [ProxyState.lists.find(list => list.listId !== listId)];
		console.log(ProxyState.lists)
}
}

function sortLists(){

}

export const listsLogic = new ListsLogic
export const sortedTasks = new sortLists()
