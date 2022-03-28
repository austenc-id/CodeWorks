export class SpellDetail {
  constructor(spellData) {
    this.index = spellData.index
    this.id = spellData.index
    this.name = spellData.name
    this.url = spellData.url
    this.classes = spellData.classes
    this.attackType = spellData.attack_type
    this.level = spellData.level
    this.range = spellData.range
    this.duration = spellData.duration
    this.components = spellData.components
    this.description = spellData.desc.join('<br/><br/>')
  }

  get Template() {
    return /*html*/`
      <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
        </div>
        <div class="card-body scrollable-y" style="max-height:50vh;">
          <p>${this.description}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-success" onclick="app.spellbookController.learnSpell()">Learn</button>
        </div>
      </div>
    `
  }

}