export class User {
	constructor(userName){
		this.user = userName
	}
	get UserForm (){
	return /*html*/`
						<card class="card">
							<card class="card-body" id="name-entry">
								<form class="bg-black rounded p-3 shadow" onsubmit="app.inspire.user.setUser()">
									<label for="name">Who are you?</label>
									<input type="text" name="name" id="name">
									<button type="submit" class="btn-dark btn-primary">get my tasks</button>
								</form>
							</card>
						</card>
							`
}
}