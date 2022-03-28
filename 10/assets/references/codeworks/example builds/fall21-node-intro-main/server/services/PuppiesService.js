import { fakeDb } from '../db/fakeDb.js'
import { BadRequest, NotFound } from '../utils/Errors.js'

class PuppiesService {
  getById(id) {
    const found = fakeDb.pups.find(p => p.id.toString() === id)
    if (!found) {
      throw new NotFound('No pup by that id ' + id)
    }
    return found
  }

  createPuppy(puppyData) {
    // TODO later map it to an actual model
    const found = fakeDb.pups.find(p => p.name === puppyData.name)
    if (found) {
      throw new BadRequest('Puppy already exists')
    }
    puppyData.id = Math.floor(Math.random() * 101)

    fakeDb.pups.push(puppyData)
    return puppyData
  }
}

export const puppiesService = new PuppiesService()
