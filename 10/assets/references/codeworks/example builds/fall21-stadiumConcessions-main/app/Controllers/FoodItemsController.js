import { ProxyState } from "../AppState.js"
import { foodItemsService } from "../Services/FoodItemsService.js"
import { toppingsService } from "../Services/ToppingsService.js"

function _drawFoodItems(){
  let template = ''
  ProxyState.foodItems.forEach(f => template += f.Template)
  document.getElementById('foodItems').innerHTML = template
}

export class FoodItemsController {
  constructor(){
    console.log("hello from the food items controller")
    ProxyState.on('foodItems', _drawFoodItems)
    ProxyState.on('toppings', _drawFoodItems)
    _drawFoodItems()
  }

  createFoodItem(){
    event.preventDefault()
    let form = event.target

    let foodItemData = {
      type: form.foodType.value,
      customer: form.customer.value,
      quantity: form.quantity.value
    }
    foodItemsService.createFoodItem(foodItemData)
    form.reset()
  }

  deleteFoodItem(foodItemId){
    foodItemsService.deleteFoodItem(foodItemId)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your expensive food is delorted',
      showConfirmButton: false,
      timer: 1500
    })
  }
}