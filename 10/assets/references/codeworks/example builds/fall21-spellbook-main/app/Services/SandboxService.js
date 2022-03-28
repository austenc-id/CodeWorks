import { ProxyState } from "../AppState.js"
import { SandboxSpell } from "../Models/SandboxSpell.js"

// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandboxService {
  async togglePrepared(spellId) {
    // find the spell
    const spell = ProxyState.sandboxSpells.find(s => s.id === spellId)
    // update the spell
    spell.prepared = !spell.prepared
    await sandboxApi.put(`${ProxyState.user}/spells/${spellId}`, spell)
  }
  async learnSpell() {

    const spellToLearn = new SandboxSpell(ProxyState.currentSpell)
    console.log(spellToLearn, ProxyState.sandboxSpells)
    let res = await sandboxApi.post(`${ProxyState.user}/spells`, spellToLearn)
    console.log('LOOKATME', res)
    ProxyState.sandboxSpells = [...ProxyState.sandboxSpells, new SandboxSpell(res.data)]
  }

  async getSpells() {
    let res = await sandboxApi.get(`${ProxyState.user}/spells`)
    console.log('log the res!!!!', res)
    // TODO figure this out
    ProxyState.sandboxSpells = res.data.map(s => new SandboxSpell(s))
  }
}

export const sandboxService = new SandboxService()