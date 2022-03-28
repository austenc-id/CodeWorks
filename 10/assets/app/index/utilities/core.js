import { AppsCtlr } from "./controllers/AppsCtlr.js";
import { NavCtlr } from "./controllers/NavCtlr.js";
import ValuesCtlr from "./controllers/ValuesCtlr.js";

export class UtilityCore {
	nav = new NavCtlr
	content = new AppsCtlr
	values = new ValuesCtlr
}