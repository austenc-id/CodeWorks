import { EventEmitter } from "../utilities/services/utilities/EventEmitter.js";
import { isValidProp } from "../utilities/services/utilities/isValidProp.js";
import { journals, weeks, entries, } from "./models/data/journals.js";



class JournalState extends EventEmitter {
/** @type {import('../utilities/models/Value').Value[]} */
  values = [];
  journals = journals
  weeks = weeks
  entries = entries

}

export const ProxyJournal = new Proxy(new JournalState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})