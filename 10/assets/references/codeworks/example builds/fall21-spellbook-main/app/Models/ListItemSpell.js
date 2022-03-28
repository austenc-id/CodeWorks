export class ListItemSpell {
  constructor(spellData) {
    this.id = spellData.index
    this.index = spellData.index
    this.name = spellData.name
    this.url = spellData.url
  }

  get Template() {
    return /*html*/`
      <li class="list-group-item py-2 selectable" onclick="app.spellListController.getSpellDetails('${this.url}')">${this.name}</li>
    `
  }

}