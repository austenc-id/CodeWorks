import { EventEmitter } from "../../app/main/Utilities/EventEmitter.js"
import { isValidProp } from "../../app/main/Utilities/isValidProp.js"
import { NavbarItem } from "./Models/NavbarItem.js"
import { Section } from "./Models/Section.js"


class AppState extends EventEmitter {
/** @type {import('./Models/Value').Value[]} */
    values = [];
navbarItems = [
    new NavbarItem(
      {order: 1, title: 'tasklists', action: 'showTaskLists'}
      )
  ];
sections = [
      new Section(
        {title: 'tasklists', icon: 'list-plus.png', model: 'List', action: 'tasklistsController.showTaskLists()'},
        )
    ];
lists = [];
tasks = [];
sortedTasks = [];
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