export function getQuestEntryTemplate(){
	return /*html*/`
			<form class="col-lg-4" onsubmit="app.questsController.attemptQuestEntry()" id="quest-form">
				<div class="form-group">
					<label for="questline" class="">questline:</label>
					<input type="text" class="form-control" name="questline" id="questline">
				</div>
				<div class="form-group">
					<label for="quest" class="">quest:</label>
					<input type="text" class="form-control" name="quest" id="quest">
				</div>
				<div class="form-group">
					<label for="stage" class="">stage:</label>
					<input type="text" class="form-control" name="stage" id="stage">
				</div>
				<div class="form-group">
					<label for="consoleId" class="">id:</label>
					<input type="text" class="form-control" name="consoleId" id="consoleId">
				</div>
				<div class="button-group my-3">
    			<button type="reset" class="btn btn-dark">clear</button>
    			<button type="submit" class="btn btn-dark">submit</button>
  			</div>
			</form>
	`
}
