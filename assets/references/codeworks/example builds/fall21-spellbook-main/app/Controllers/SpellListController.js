import { ProxyState } from "../AppState.js";
import { dndService } from "../Services/DndService.js";

function _drawSpellList() {
  let template = ''

  ProxyState.apiSpells.forEach(spell => template += spell.Template)
  document.getElementById('spell-list').innerHTML = template
}

export class SpellListController {
  constructor() {
    ProxyState.on('apiSpells', _drawSpellList)
    dndService.getSpells()
  }

  async getSpellDetails(url) {
    try {
      await dndService.getSpellDetails(url)
    } catch (error) {
      // TODO sweetalert
      console.error('⚠ [GET_SPELL_DETAILS]', error)
    }
  }


}

