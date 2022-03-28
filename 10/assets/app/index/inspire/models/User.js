export class User {
	constructor(user){
		this.user = user
		this.name = user.user
	}
	get UserForm (){
	return /*html*/`
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
}
}