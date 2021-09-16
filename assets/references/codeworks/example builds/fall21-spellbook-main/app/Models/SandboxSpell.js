export class SandboxSpell {
  constructor(spellData) {
    this.id = spellData.id
    this.prepared = spellData.prepared
    this.user = spellData.user
    this.components = spellData.components
    this.duration = spellData.duration
    this.range = spellData.range
    this.level = spellData.level
    this.description = spellData.description
    this.name = spellData.name
  }

  get Template() {
    return /*html*/`
      <li class="list-group-item py-2">
        <input type="checkbox" ${this.prepared ? 'checked' : ''} onclick="app.spellbookController.togglePrepared('${this.id}')">
        <span class="ms-2">${this.name}</span>
      </li>
    `
  }
}