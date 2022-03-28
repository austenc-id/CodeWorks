import { Material } from '../data/models/material.js';
import { Quest } from '../data/models/quest.js';
import { EventEmitter } from "../utilities/event-emitter.js";
import { isValidProp } from "../utilities/is-valid-property.js";
import { List } from '../data/models/tasklists/list.js';
import { Task } from '../data/models/tasklists/task.js';

class AppState extends EventEmitter {
  /** @type {import('../data/models/value').Value[]} */
  values = []
  materials = [
    new Material(
      {consoleId:'106e1b', materialname: 'abecean longfin', category: '???', weight: 0.5, price: 15, source: 'vanilla', acq: 'critter-collection-water', vendorid: 'fish', img: 'abecean-longfin.png'}),
    new Material(
      {consoleId:'6bc02', materialname: 'bear claws', category: '???', weight: 0.1, price: 2, source: 'vanilla', acq: 'loot-animal-bear', vendorid: 'mammal', img: 'bear-claws.png'}),
    new Material(
      {consoleId:'4da20', materialname: 'bleeding crown', category: '???', weight: 0.3, price: 10, source: 'vanilla', acq: 'harvest-fungi', vendorid: 'fungi', img: 'bleeding-crown.png'}),
    new Material(
      {consoleId:'77e1c', materialname: 'blue mountain flower', category: '???', weight: 0.1, price: 2, source: 'vanilla', acq: 'harvest-flora', vendorid: 'flower', img: 'blue-mountain-flower.png'}),
  ]
  quests = [
    new Quest(
      {consoleId: 'unknown', questline: 'main', quest: 'unbound', stage: 'MQ101'})
  ]

  lists = [
    new List(
      {listId: 1, listname: 'checkpoint 3 requirements', color: 'red',}),
    new List(
      {listId: 2, listname: 'checkpoint 3 stretch goals', color: 'orange',}),
  ]


  tasks = [
    new Task({listId: 1, taskId: 1, taskname: "All lists and tasks are rendered on load/reload",}),
    new Task({listId: 1, taskId: 2, taskname: "Lists can be created", complete: false}),
    new Task({listId: 1, taskId: 3, taskname: "Tasks can be marked complete, this will persist on reload", complete: false}),
    new Task({listId: 1, taskname: "Lists are displayed out in columns across the page", complete: false}),
    new Task({listId: 1, taskname: "Lists and tasks each have a delete button", complete: false}),
    new Task({listId: 1, taskname: "List creation must include a title limited to 3-15 characters", complete: false}),
    new Task({listId: 1, taskname: "List creation must include a color picker or minimum 5 different colors", complete: false}),
    new Task({listId: 1, taskname: "Lists include a count of all tasks compared to uncompleted tasks", complete: false,}),
    new Task({listId: 1, taskname: "Each List must have its own Task form", complete: false,}),
    new Task({listId: 1, taskname: "Task title/body must be between 3-50 characters", complete: false,}),
    new Task({listId: 1, taskname: "Forms should not submit unless the fields adhere to the requirements", complete: false,}),
    new Task({listId: 1, taskname: "Lists can be Deleted", complete: false,}),
    new Task({listId: 1, taskname: "Tasks can be Deleted (separate from being marked complete)", complete: false,}),
    new Task({listId: 1, taskname: "Users are prompted to confirm any delete (search window.confirm)", complete: false,}),
    new Task({listId: 1, taskname: "All Data persists through local storage", complete: false,}),
    new Task({listId: 2, taskname: "Use something like masonry to render the lists more elegantly", complete: false,}),
    new Task({listId: 2, taskname: "Use a better popup than window.confirm for a more clean user experience", complete: false,}),
    new Task({listId: 2, taskname: "Play with the styling on 'completed' tasks to include a strike-through", complete: false,}),
    new Task({listId: 2, taskname: "Add Toast notifications to encourage completed tasks", complete: false,}),
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


