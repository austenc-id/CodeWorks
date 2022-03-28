import { Material } from './models/Material.js';
import { EventEmitter } from "../control/utilities/EventEmitter.js";
import { isValidProp } from "../control/utilities/isValidProp.js";

class AppState extends EventEmitter {
  /** @type {import('./Value').Value[]} */
  values = []
  materials = [
    new Material(
      {id:'106e1b', name: 'abecean longfin', category: '???', weight: 0.5, price: 15, source: 'vanilla', acq: 'critter-collection-water', vendorid: 'fish', img: 'abecean-longfin.png'}),
    new Material(
      {id:'6bc02', name: 'bear claws', category: '???', weight: 0.1, price: 2, source: 'vanilla', acq: 'loot-animal-bear', vendorid: 'mammal', img: 'bear-claws.png'}),
    new Material(
      {id:'4da20', name: 'bleeding crown', category: '???', weight: 0.3, price: 10, source: 'vanilla', acq: 'harvest-fungi', vendorid: 'fungi', img: 'bleeding-crown.png'}),
    new Material(
      {id:'77e1c', name: 'blue mountain flower', category: '???', weight: 0.1, price: 2, source: 'vanilla', acq: 'harvest-flora', vendorid: 'flower', img: 'blue-mountain-flower.png'}),
  ]
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