export function getNewListTemplate(){
	return /*html*/ `
	<form class="col-lg-4" onsubmit="app.listsController.attemptNewList()" id="list-form">
	<div class="form-group">
		<label for="listname">title:</label>
		<input type="text" class="form-control" name="listname" id="listname">
	</div>
	<div class="form-group">
		<label for="color">color:</label>
		<input type="color" class="form-control" name="color" id="color">
	</div>
	<div class="button-group my-3">
    <button type="reset" class="btn btn-dark">clear</button>
    <button type="submit" class="btn btn-dark">submit</button>
  </div>
</form>
	`
}