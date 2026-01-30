const express = require('express');

const getGoals = (req,res) =>{
   
    res.status(200).json({message : 'Get Goals'});
}

const postGoals = (req, res) =>{
    console.log('POST /api/goals hit — headers:', req.headers['content-type']);
    console.log('POST /api/goals body:', req.body);

    // Guard against req.body being undefined before accessing .text
    if(!req.body || !req.body.text){
        return res.status(400).json({message: "Error: Check the payload"});
    }

    return res.status(200).json({message: 'Post Goals'});
}

const putGoals = (req, res) =>{
    res.status(200).json({message: `Put call ${req.params.id}`})
}
const deleteGoals =(req, res) =>{
    res.status(200).json({message: `delete call ${req.params.id}`})
}
module.exports = {getGoals, postGoals, putGoals,deleteGoals }