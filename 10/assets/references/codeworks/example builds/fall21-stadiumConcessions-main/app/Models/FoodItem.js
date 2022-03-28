import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class FoodItem{
  constructor(foodData){
    this.type = foodData.type
    this.customer = foodData.customer
    this.quantity = foodData.quantity
    this.id = foodData.id || generateId()
  }

  get Template(){
    return /*html*/ `
    <div class="col-md-4 py-2">
      <div class="card text-center">
        <div class="card-header">
          <div class="d-flex justify-content-between">
          <h4>x ${this.quantity} - ${this.type}</h4>
          <i class="mdi mdi-delete mdi-24px text-primary selectable 
            ${this.quantity >= 4 ? 'mdi-spin' : ''}" 
            onclick="app.foodItemsController.deleteFoodItem('${this.id}')"></i>
          </div>
        </div>
        <div class="card-body">
          <div class="container">
            <div class="row">
              <small>For: ${this.customer}</small>
              <h6>Toppins: </h6>
              ${this.Toppings}
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <form onsubmit="app.toppingsController.createTopping('${this.id}')">
            <label for="toppingName" class="sr-only"></label>
            <input type="text" name="toppingName" minlength="3" maxlength="15" required placeholder="Add A Topping" />
            <button type="submit" class="btn btn-danger">Add</button>
          </form>
        </div>
      </div>
    </div>
    `
  }

  get Toppings(){
    let template = ''
    let foundToppings = ProxyState.toppings.filter(t => t.foodItemId == this.id)
    console.log('after filter', foundToppings)
    foundToppings.forEach(t => template += t.Template)
    return template
  }
}