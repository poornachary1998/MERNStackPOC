const express = require('express');

const getGoals = (req,res) =>{
    res.status(200).json({message : 'Get Goals'});
}

const postGoals = (req, res) =>{
    res.status(200).json({message: 'Post Goals'})
}

const putGoals = (req, res) =>{
    res.status(200).json({message: `Put call ${req.params.id}`})
}
const deleteGoals =(req, res) =>{
    res.status(200).json({message: `delete call ${req.params.id}`})
}
module.exports = {getGoals, postGoals, putGoals,deleteGoals }