import { playerService } from "../Services/PlayerService.js"

export class PlayerController {

  constructor() {
    this.setPlayer()
  }

  async setPlayer() {
    // @ts-ignore
    const result = await Swal.fire({
      title: 'What is your name',
      input: 'text'
    })
    if (result.isConfirmed && result.value.length) {
      playerService.setPlayer(result.value)
    }else{
      this.setPlayer()
    }

  }
}