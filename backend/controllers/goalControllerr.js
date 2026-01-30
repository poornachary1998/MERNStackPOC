const express = require('express');
const AsyncHandler = require('express-async-handler');

const getGoals = async(req,res) =>{
   
    res.status(200).json({message : 'Get Goals'});
}

const postGoals = AsyncHandler(async(req, res) =>{
    // Guard against req.body being undefined before accessing .text
    if(!req.body || !req.body.text){
         res.status(400);
        throw new Error("Please add a text field")
    }

    return res.status(200).json({message: 'Post Goals'});
})

const putGoals = AsyncHandler(async(req, res) =>{
    res.status(200).json({message: `Put call ${req.params.id}`})
})
const deleteGoals = AsyncHandler(async(req, res) => {
    res.status(200).json({message: `delete call ${req.params.id}`})
})
module.exports = {getGoals, postGoals, putGoals,deleteGoals }