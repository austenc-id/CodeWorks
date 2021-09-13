import { ImageCtlr } from "./ImageCtlr.js";
import { QuoteCtlr } from "./QuoteCtlr.js";
import { UserCtlr } from "./UserCtlr.js";
import { WeatherCtlr } from "./WeatherCtlr.js";

export class DashboardCtlr{
	image = new ImageCtlr
	quote = new QuoteCtlr
	weather = new WeatherCtlr
	user = new UserCtlr
}
