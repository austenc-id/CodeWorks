import { ProxyState } from "../AppState.js";

function _drawStats() {
  console.log('the stats', ProxyState.player)
  document.getElementById('statblock').innerHTML = `
    <div>
      ${ProxyState.player.name}
      ${ProxyState.player.points}
      ${ProxyState.player.correct}/${ProxyState.player.incorrect}
    </div>
  `
}

export class StatsController {
  constructor() {
    console.log('hello stats');
    ProxyState.on('player', _drawStats)
  }
}
