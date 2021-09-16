import { AudioController } from "./Controllers/AudioController.js";
import { ClueController } from "./Controllers/ClueController.js";
import { PlayerController } from "./Controllers/PlayerController.js";
import { StatsController } from "./Controllers/StatsController.js";

class App {
  clueController = new ClueController()
  statsController = new StatsController()
  audioController = new AudioController()
  playerController = new PlayerController()
}

window["app"] = new App();
