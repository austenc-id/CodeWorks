// TODO this one is tricky

import { ProxyState } from "../AppState.js";

function _drawCurrentSpell() {
  console.log('did it work', ProxyState.currentSpell);
  document.getElementById('current-spell').innerHTML = ProxyState.currentSpell.Template
}


export class SpellDetailsController {
  constructor() {
    ProxyState.on('currentSpell', _drawCurrentSpell)
  }
}