import { MaterialsController } from "./control/MaterialsController.js";

class App {
  materialsController = new MaterialsController();
}

window["app"] = new App();