import { ProxyState } from "../AppState.js";
import { Clue } from "../Models/Clue.js";

// @ts-ignore
const api = axios.create({
  baseURL: 'https://jservice.io/api'
})

class JService {
  async getRandomClue(count = 10) {

    let res = await api.get(`random?count=${count}`)
    console.log('random question response', res);
    ProxyState.clues = res.data.map(c => new Clue(c))
    this.setNextQuestion()
  }

  setNextQuestion() {
    ProxyState.currentClue = ProxyState.clues.shift()
    if (!ProxyState.currentClue) {
      ProxyState.gameover = true
    }
  }

  constructor() {
    console.log('jservice working');
  }
}

export const jService = new JService()