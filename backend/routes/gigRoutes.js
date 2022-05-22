import express from 'express'
import {
  addGig,
  deleteGigs,
  getAllGigs,
} from '../controllers/gigControllers.js'

const router = express.Router()

router.route('/').get(getAllGigs).post(addGig)
router.route('/:id').delete(deleteGigs)

export default router
