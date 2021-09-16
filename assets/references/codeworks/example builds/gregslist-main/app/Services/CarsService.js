import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"

class CarsService {
  addCar(carData) {
    // throw new Error('woops')
    console.log('add car in cars service')
    var testCar = new Car(carData)
    // ProxyState.cars.push(testCar)
    // ProxyState.cars = ProxyState.cars
    ProxyState.cars = [...ProxyState.cars, testCar]
  }
}


// singleton pattern
export const carsService = new CarsService()