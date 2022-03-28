import { MaterialsController } from "./data/controllers/runner/ctlr-materials.js";
import { loadMaterials } from './state/local-materials.js';
import { QuestsController } from './data/controllers/runner/ctlr-quests.js';
import { ShowQuests } from "./data/controllers/render/render-quests.js";
import { loadQuests } from './state/local-quests.js';
import { ShowMaterials } from "./data/controllers/render/render-materials.js";
import { ShowLists } from "./data/controllers/render/tasklists/render-lists.js";
import { loadLists } from './state/tasklists/local-lists.js';
import { ListsController } from "./data/controllers/runner/tasklists/ctlr-lists.js";
import { ShowTasks } from "./data/controllers/render/tasklists/render-tasks.js";
import { loadTasks } from './state/tasklists/local-tasks.js';
import { TasksController } from "./data/controllers/runner/tasklists/ctlr-tasks.js";

class App {
  showMaterials = new ShowMaterials();
  materialsController = new MaterialsController();
  showQuests = new ShowQuests();
  questsController = new QuestsController();
  showLists = new ShowLists();
  listsController = new ListsController();
  showTasks = new ShowTasks();
  tasksController = new TasksController();
}

loadMaterials()
loadQuests()
loadLists()
loadTasks()

window["app"] = new App();