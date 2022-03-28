import { EventEmitter } from '../utilities/services/utilities/EventEmitter.js'
import { isValidProp } from '../utilities/services/utilities/isValidProp.js'
import { Pokemon } from './models/Pokemon.js'



class DexState extends EventEmitter {
	/** @type {import('./models/Pokemon.js').Pokemon[]} */
  values = []
	dexEntries = [
    new Pokemon
    ({id: 1, name:'bulbasaur'})
  ]
}
export const ProxyDex = new Proxy(new DexState(), {
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

