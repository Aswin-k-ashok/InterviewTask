import asyncHandler from 'express-async-handler'
import Gig from '../models/gigModel.js'

// @desc add a new gig
// @route POST/api/gig
// @access public
const addGig = asyncHandler(async (req, res) => {
  const { name, date, budget } = req.body
  const gig = await Gig.create({
    name,
    date,
    budget,
  })
  if (gig) {
    res.json(gig)
  } else {
    rs.status(400)
    throw new Error('something went wrong')
  }
})

// @desc get all gigs
// @route get/api/gig
// @access public

const getAllGigs = asyncHandler(async (req, res) => {
  const gigs = await Gig.find({})
  res.json(gigs)
})

const deleteGigs = asyncHandler(async (req, res) => {
  const gig = await Gig.findById(req.params.id)
  if (gig) {
    await gig.remove()
    res.json({ message: 'gig and data remove' })
  } else {
    res.status(404)
    throw new Error('gig not found / not removed')
  }
})

export { addGig, getAllGigs, deleteGigs }
