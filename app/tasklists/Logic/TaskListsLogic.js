import { ProxyState } from '../../main/AppState.js';
import { saveTaskLists } from '../../main/LocalStorage.js';
import { TaskList } from '../Models/TaskList.js';

class TaskListsLogic {
	constructor(){
		ProxyState.on('tasklists', saveTaskLists)
	}

	addTaskList(listData){
		ProxyState.tasklists = [...ProxyState.tasklists, new TaskList(listData)]
		console.log('added new tasklist')
	}
}

export const tasklistsLogic = new TaskListsLogic
