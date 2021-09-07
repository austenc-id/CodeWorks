export function getTaskEntryTemplate(){
	return /*html*/ `
	<form class="row" onsubmit="app.tasksController.attemptTaskEntry()" id="">
		<div class="form-group">
			<label for="taskname">task:</label>
			<input type="text" class="form-control" name="taskname" id="taskname">
		</div>
		<div class="button-group my-3">
			<button type="reset" class="btn btn-dark">clear</button>
			<button type="submit" class="btn btn-dark">submit</button>
		</div>
	</form>
	`
}