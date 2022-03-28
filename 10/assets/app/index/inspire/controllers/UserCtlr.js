import { userService } from "../services/UserService.js"
import { intializeUser } from "./DashboardCtlr.js"


function _hideUserForm(){
	try{
		var displayName = userService.getDisplayName()
	}catch{}
	document.getElementById('userform').classList.toggle('visually-hidden')
	//document.getElementById('user-display').classList.toggle('visually-hidden')
	//document.getElementById('user-display').innerHTML = `${displayName.user}`
	document.getElementById('tasklist').classList.toggle('visually-hidden')
	intializeUser()
}

export class UserCtlr {
	showUserForm(){
		try{
			var template = userService.findTemplate()}catch{}
		document.getElementById('userform').innerHTML = template
		}

	setUser(){
		event.preventDefault() 
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    const user = {
      user: form.user.value,
    }
    try {
      userService.setUser(user)
    } catch (e) {console.log('fail')}
    form.reset()
		_hideUserForm()
	}
}