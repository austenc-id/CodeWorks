import { EntriesCtlr } from "./controllers/EntriesCtlr.js";
import { JournalCtlr } from "./controllers/JournalCtlr.js";
import { ListsCtlr } from "./controllers/ListsCtlr.js";

export class JournalCore{
	dash = new JournalCtlr
	lists = new ListsCtlr
	entries = new EntriesCtlr
}