import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // FIXME do not hardcode the user
  user = 'billy'
  /** @type {import('./Models/SandboxSpell').SandboxSpell[]} */
  sandboxSpells = []
  /** @type {import('./Models/ListItemSpell.js').ListItemSpell[]} */
  apiSpells = []

  /** @type {import('./Models/SpellDetail.js').SpellDetail} */
  currentSpell = null

}

export const ProxyState = new Proxy(new AppState(), {
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
