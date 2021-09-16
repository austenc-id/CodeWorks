import { toppingsService } from "../Services/ToppingsService.js";

export class ToppingsController{
  constructor(){
  }

  createTopping(foodItemId){
    event.preventDefault()
    let form = event.target
    
    let toppingData = {
      name: form.toppingName.value,
      foodItemId: foodItemId
    }
    toppingsService.createTopping(toppingData)
    console.log('topping creation', toppingData);
  }
}