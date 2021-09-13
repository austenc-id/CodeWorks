import { sandboxService } from "../services/SandboxAPIService.js";
import { userService } from "../services/UserService.js"
import { loadTasklist } from "./TasklistCtlr.js";

function _hideUserForm(){
	document.getElementById('userform').classList.toggle('visually-hidden')
	document.getElementById('tasklist').classList.toggle('visually-hidden')
}
async function _reqTasklist(setUser){
	try {
			 sandboxService.getTasks()
			.then(apiTasks => {
				loadTasklist(apiTasks)
			}).catch((err) => {});
		} catch {}
}

export class UserCtlr {
		showUserForm(){
	let template = `
						<card class="card">
							<card class="card-body" id="name-entry">
								<form class="bg-black rounded p-3 shadow" onsubmit="app.inspire.user.setUser()">
									<label for="user">Who are you?</label>
									<input type="text" name="user" id="user" required>
									<button type="submit" class="btn-dark btn-primary">get my tasks</button>
								</form>
							</card>
						</card>
							`
	document.getElementById('userform').innerHTML = template
	}
	setUser(){
		console.log('hello')
		event.preventDefault() // do not forget this line on form submissions
    /**
     * @type {HTMLFormElement}
     */
    
    // @ts-ignore
    const form = event.target
    // TODO get data from form

    const userName = {
      name: form.user.value,
    }

    try {
      var setUser = userService.setUser(userName)
			console.log(setUser)
			
    } catch (e) {console.log('fail')
    }
    form.reset()
		_hideUserForm()
		_reqTasklist(setUser)
	}

}