import { ProxyDash } from "../dash-state.js"
import { User } from "../models/User.js"

class UserService{
	setUser(userName){
		ProxyDash.user = [new User(userName)]
		return ProxyDash.user
	}
	findTemplate(){
		let found = ProxyDash.user.shift()
		console.log(found, found.UserForm)
		return found.UserForm
	}
}

export const userService = new UserService