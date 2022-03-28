import { generateId } from "../Utils/generateId.js"


export class Topping{
  constructor(toppingData){
    this.name = toppingData.name
    this.foodItemId = toppingData.foodItemId
    this.id = toppingData.id || generateId()
    this.cost = 10.00
  }

  get Template(){
    return /*html*/ `
    <ul>
      <li>${this.name}</li>
      <li>$${this.cost}</li>
    </ul>
    `
  }
}