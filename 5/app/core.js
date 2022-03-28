import { NavbarController } from "./main/Controllers/NavbarController.js"
import { loadLists, loadTasks } from "./main/LocalStorage.js";
import { TaskListsController } from "./tasklists/Controllers/TaskListsController.js"
import { loadSortedTasks } from './main/LocalStorage.js';


class App {
	navbarController = new NavbarController();
	tasklistsController = new TaskListsController();
}

loadLists()
loadTasks()
loadSortedTasks()

window["app"] = new App