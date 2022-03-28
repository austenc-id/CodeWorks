import { ProxyState } from "../AppState.js";
import { FoodItem } from "../Models/FoodItem.js";
import { saveState } from "../Utils/LocalStorage.js";

class FoodItemsService{
  constructor(){
    ProxyState.on('foodItems', saveState)
  }
  createFoodItem(foodItemData){
    ProxyState.foodItems = [...ProxyState.foodItems, new FoodItem(foodItemData)]
    console.log('from hellz kitchen', ProxyState.foodItems)
  }

  deleteFoodItem(foodItemId){
    console.log('food service delete', foodItemId)
    ProxyState.foodItems = ProxyState.foodItems.filter(f => f.id !== foodItemId) 
    ProxyState.toppings = ProxyState.toppings.filter(t => t.foodItemId !== foodItemId)
  }
}

export const foodItemsService = new FoodItemsService();