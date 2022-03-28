import { fakeDb } from '../db/fakeDb.js'
import { puppiesService } from '../services/PuppiesService.js'
import BaseController from '../utils/BaseController.js'

export class PuppiesController extends BaseController {
  constructor() {
    super('api/puppies')
    this.router
      .get('', this.getPuppies)
      .get('/:id', this.getPuppy)
      .post('', this.createPuppy)
  }

  async getPuppies(req, res, next) {
    // TODO watch Paw Patrol
    res.send(fakeDb.pups)
  }

  async getPuppy(req, res, next) {
    try {
      const id = req.params.id
      const pup = await puppiesService.getById(id)
      res.send(pup)
    } catch (error) {
      next(error)
    }
  }

  async createPuppy(req, res, next) {
    try {
      const newPup = await puppiesService.createPuppy(req.body)
      res.send(newPup)
    } catch (error) {
      next(error)
    }
  }
}
