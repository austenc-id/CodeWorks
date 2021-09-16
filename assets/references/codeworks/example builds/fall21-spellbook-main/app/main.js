import { SpellbookController } from "./Controllers/SpellbookController.js";
import { SpellDetailsController } from "./Controllers/SpellDetailsController.js";
import { SpellListController } from "./Controllers/SpellListController.js";

class App {
  spellbookController = new SpellbookController()
  spellDetailsController = new SpellDetailsController()
  spellListController = new SpellListController()
}

window["app"] = new App();
