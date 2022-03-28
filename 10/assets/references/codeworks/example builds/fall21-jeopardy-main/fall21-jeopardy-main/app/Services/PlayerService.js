import { ProxyState } from "../AppState.js";

// @ts-ignore
const api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/players'
})

class PlayerService {
  async updatePlayer(points) {

    let playerData = ProxyState.player
    playerData.points += points
    playerData.questions++
    if (points < 0) {
      playerData.incorrect++
    } else {
      playerData.correct++
    }

    let res = await api.put(ProxyState.player.id, playerData)
    // TODO update proxystate.player
    ProxyState.player = res.data
  }
  async setPlayer(playerName) {
    // go get the player if they exist set them if not create one
    let res = await api.get(`?name=${playerName}`)
    if (res.data.length) {
      ProxyState.player = res.data[0]
    } else {
      this.createPlayer(playerName)
    }
    ProxyState.startGame = true
  }

  async createPlayer(playerName) {
    let res = await api.post('', {
      name: playerName,
    })
    ProxyState.player = res.data
  }
}

export const playerService = new PlayerService()