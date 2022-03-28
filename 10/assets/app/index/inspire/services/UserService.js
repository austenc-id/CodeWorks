import { ProxyDash } from "../dash-state.js"
import { User } from "../models/User.js"

class UserService{
	setUser(user){
		ProxyDash.user = [new User(user)]
		return ProxyDash.user
	}
	getDisplayName(){
		let display = ProxyDash.user.shift()
		ProxyDash.user.unshift(display)
		return display.user
	}

	findTemplate(){
		let defaultUser = {name: 'default'}
		ProxyDash.user = [new User(defaultUser)]
		let found = ProxyDash.user.shift()
		return found.UserForm
	}
}

export const userService = new UserService