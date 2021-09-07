export function getMaterialEntryTemplate(){
		return /*html*/`
		<form class="col-lg-4" onsubmit="app.materialsController.attemptMaterialEntry()" id="material-form">
  <div class="form-group">
    <label for="materialname" class="">name:</label>
    <input type="text" class="form-control" name="materialname" id="materialname">
  </div>
  <div class="form-group">
    <label for="consoleId" class="">console id:</label>
    <input type="text" class="form-control" name="consoleId" id="consoleId">
  </div>
  <div class="form-group">
    <label for="category" class="">category:</label>
    <select name="category" id="category" class="form-control">
      <option disabled selected value="">what kind of material?</option>
      <option>mineral</option>
      <option>flora</option>
      <option>fauna</option>
      <option>metal</option>
      <option>ethereal</option>
    </select>
  </div>
  <div class="form-group">
    <label for="source" class="">source:</label>
    <select name="source" id="source" class="form-control">
      <option disabled selected value="">originally introduced in:</option>
      <option>vanilla</option>
      <option>dawnguard</option>
      <option>hearthfires</option>
      <option>dragonborn</option>
      <option>other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="price" class="">price:</label>
    <input type="number" class="form-control" name="price" id="price" min="0" max="10000">
  </div>
  <div class="form-group">
    <label for="weight" class="">weight:</label>
    <input type="number" class="form-control" name="weight" id="weight" min="0" max="100">
  </div>
  <div class="form-group">
    <label for="img" class="">weight:</label>
    <input type="img" class="form-control" name="img" id="img">
  </div>
  <div class="button-group my-3">
    <button type="reset" class="btn btn-dark">clear</button>
    <button type="submit" class="btn btn-dark">submit</button>
  </div>
</form>
		`
}
