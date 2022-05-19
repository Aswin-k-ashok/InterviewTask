import asyncHandler from 'express-async-handler'
import Gig from '../models/gigModel.js'


// @desc add a new gig
// @route POST/api/gig
// @access public
const addGig = asyncHandler(async(req,res)=>{
    {name,date,budget} = req.body
    const gig = new Gig.create({
        name,
        date,
        budget,
    })
    if(gig){
        res.status(201).json({
            _id:gig._id,
            name:gig.name,
            date:gig.name,
            budget:gig.budget
        })
    }else{
        rs.status(400)
        throw new Error('something went wrong')
    }
})

// @desc get all gigs
// @route get/api/gig
// @access public

const getAllGigs = asyncHandler(async(req,res)=>{
    const gig = Gig.find()
    if(gig){
        res.status(201).json({
            name: gig.name,
            date: gig.date,
            budget: gig.budget
        })
    }
})

const deleteGigs = asyncHandler(async(req,res)=>{
    res.json({message:"gig deleted"})
})

export {
    addGig
}