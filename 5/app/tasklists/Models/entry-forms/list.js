export function getNewListTemplate(){
	return /*html*/ `
	<form class="col-lg-4" onsubmit="app.tasklistsController.submitList()" id="tasklist-form">
	<field class="form-group">
		<label for="listname">title:</label>
		<input type="text" class="form-control" name="listname" id="listname" required>
	</field>
	<field class="button-group my-3">
    <button type="reset" class="btn btn-dark">clear</button>
    <button type="submit" class="btn btn-dark">submit</button>
  </field>
</form>
	`
}