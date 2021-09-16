function _drawHouses() {
  document.getElementById('listings').innerHTML = '<h1>TODO build the houses template</h1>'
}

export class HousesController {
  constructor() {
    // TODO register the listener for houses
  }

  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `
    // TODO build the house form
    // abstract it if you want
    document.getElementById('forms').innerHTML = /*html*/`
      <form></form>
    `
  }

  toggleHouseForm() {
    console.log('[TODO fill me in]')
  }

}