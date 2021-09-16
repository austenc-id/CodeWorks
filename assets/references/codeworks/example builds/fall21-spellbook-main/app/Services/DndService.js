import { ProxyState } from "../AppState.js";
import { ListItemSpell } from "../Models/ListItemSpell.js";
import { SpellDetail } from "../Models/SpellDetail.js";

// @ts-ignore
const dndApi = axios.create({
  baseURL: 'https://www.dnd5eapi.co'
})

class DndService {
  async getSpellDetails(url) {
    let res = await dndApi.get(url)
    ProxyState.currentSpell = new SpellDetail(res.data)
  }
  async getSpells() {
    let res = await dndApi.get('api/spells')
    console.log('log the res!!!!', res.data.results)
    // TODO figure this out
    ProxyState.apiSpells = res.data.results.map(s => new ListItemSpell(s))

  }
}


export const dndService = new DndService()