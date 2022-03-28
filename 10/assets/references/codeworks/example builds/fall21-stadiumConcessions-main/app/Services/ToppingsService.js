import { ProxyState } from "../AppState.js"
import { Topping } from "../Models/Topping.js"
import { saveState } from "../Utils/LocalStorage.js";


class ToppingsService{
  constructor(){
    ProxyState.on('toppings', saveState)
  }

  createTopping(toppingData){
    ProxyState.toppings = [...ProxyState.toppings, new Topping(toppingData)]
    console.log('toppings in proxy', ProxyState.toppings);
  }
}

export const toppingsService = new ToppingsService()
