import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";


function _drawSpellbook() {
  let template = ''
  ProxyState.sandboxSpells.forEach(s => template += s.Template)
  document.getElementById('sandbox-spells').innerHTML = template
}

export class SpellbookController {
  constructor() {
    ProxyState.on('sandboxSpells', _drawSpellbook)
    sandboxService.getSpells()
  }

  async learnSpell() {
    try {
      await sandboxService.learnSpell()
    } catch (error) {
      // TODO sweetalert
      console.error('⚠ [LEARN_SPELL]', error)
    }
  }

  async togglePrepared(spellId) {
    try {
      await sandboxService.togglePrepared(spellId)
    } catch (error) {
      // TOOD sweetalert
      console.error('⚠ [TOGGLE_PREPARED]', error)
    }
  }


}
