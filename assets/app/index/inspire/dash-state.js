import { EventEmitter } from '../utilities/services/utilities/EventEmitter.js';
import { isValidProp } from '../utilities/services/utilities/isValidProp.js';



class DashState extends EventEmitter {
/** @type {import('../utilities/models/Value').Value[]} */
values = [];
/** @type {import('./models/User').User[]} */
user = []
/**@type {import('./models/Dashboard.js').Dashboard[]} */
dashboard = [];
image = {}
/**@type {import('./models/Quote.js').Quote[]} */
quote = []
/**@type {import('./models/Weather.js').Weather[]} */
weather = []
/**@type {import('./models/Time.js').Time[]} */
time = []
/**@type {import('./models/Task.js').Task[]} */
tasks = []
/**@type {import('./models/Task.js').Tasklist[]} */
tasklist = []
}

export const ProxyDash = new Proxy(new DashState(), {
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