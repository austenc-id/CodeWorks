import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { MaterialSchema } from '../../my assets/server/models/Material.js'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Materials = mongoose.model('Material', MaterialSchema)
}

export const dbContext = new DbContext()
