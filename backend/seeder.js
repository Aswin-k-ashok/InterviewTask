import mongoose from 'mongoose'
import dotenv from 'dotenv'
import gigs from './data/gigDummyData.js'
import Gig from './models/gigModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Gig.deleteMany()
    await Gig.insertMany(gigs)
    console.log('gig dummy data imported')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
  }
}

const destroyData = async () => {
  try {
    await Gig.deleteMany()
    console.log('gig dummy data removed')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
