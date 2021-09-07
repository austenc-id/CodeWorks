import { NavbarController } from "./main/Controllers/NavbarController.js"
import { loadTaskLists } from "./main/LocalStorage.js";
import { TaskListsController } from "./tasklists/Controllers/TaskListsController.js"


class App {
	navbarController = new NavbarController();
	tasklistsController = new TaskListsController();
}

loadTaskLists()

window["app"] = new App