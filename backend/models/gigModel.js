import mongoose from 'mongoose'

const gigSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Gig = mongoose.model('Gig', gigSchema)

export default Gig
