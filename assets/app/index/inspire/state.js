import { EventEmitter } from '../utilities/services/utilities/EventEmitter.js';
import { isValidProp } from '../utilities/services/utilities/isValidProp.js';



class DashState extends EventEmitter {
/** @type {import('../../index/utilities/models/Value').Value[]} */
values = [];
user = ''
/**@type {import('./models/Dashboard.js').Dashboard[]} */
dashboard = [];
image = {}
quote = {}

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