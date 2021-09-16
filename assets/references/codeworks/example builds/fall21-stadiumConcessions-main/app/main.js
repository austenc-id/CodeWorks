import { FoodItemsController } from "./Controllers/FoodItemsController.js";
import { ToppingsController } from "./Controllers/ToppingsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  valuesController = new ValuesController();
  foodItemsController = new FoodItemsController();
  toppingsController = new ToppingsController();
}

loadState()

window["app"] = new App();
