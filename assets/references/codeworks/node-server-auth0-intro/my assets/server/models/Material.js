// @ts-ignore
import { mongoose } from 'mongoose'

const Schema = mongoose.Schema

export const MaterialSchema = new Schema(
  {
    name: { type: String, required: true },
    source: { type: String, required: true },
    weight: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

MaterialSchema.virtual('creator', {
  localField: 'creatorId',
  forgeignFeild: '_id',
  ref: 'Account',
  justOne: true
})
