import { ProxyState } from "../AppState.js";
import { jService } from "../Services/JService.js";
import { playerService } from "../Services/PlayerService.js";

// function _drawClues() {
//   console.log('draw the clue', ProxyState.clues);
//   let template = ''
//   ProxyState.clues.forEach(c => template += c.Template)
//   document.getElementById('clues').innerHTML = template
// }

async function _drawCurrentClue() {
  if (ProxyState.currentClue) {
    document.getElementById('current-clue').innerHTML = ProxyState.currentClue.Template
  } else {
    document.getElementById('current-clue').innerHTML = ''
  }
}

async function onGameOver() {
  // @ts-ignore
  const playAgain = await Swal.fire({
    title: 'Play Again?',
    icon: 'question',
    confirmButtonText: 'Yes',
    cancelButtonText: 'Heck no',
    showCancelButton: true,
  })
  if (playAgain.isConfirmed) {
    _startGame()
  } else {
    document.getElementById('current-clue').innerHTML = 'fine go away'
  }
}

async function _startGame() {
  // @ts-ignore
  const questions = await Swal.fire({
    title: 'How many questions do you want',
    input: 'number'
  })

  if (questions.isConfirmed && questions.value > 0) {
    jService.getRandomClue(questions.value)
  } else {
    _startGame()
  }
}


export class ClueController {
  constructor() {
    // ProxyState.on('clues', _drawClues) // probably remove this later but i dont know
    ProxyState.on('currentClue', _drawCurrentClue)
    ProxyState.on('startGame', _startGame)
    ProxyState.on('gameover', onGameOver)
  }

  showAnswer(clueId) {
    document.getElementById(clueId + '-answer').classList.toggle('visually-hidden')
  }

  next(points) {
    try {
      playerService.updatePlayer(points)
      jService.setNextQuestion()
    } catch (e) {
      // @ts-ignore
      Swal.fire('ERROR', e.message, 'error')
    }
  }

}


