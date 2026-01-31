const express = require('express');
const AsyncHandler = require('express-async-handler');
const Goal = require('../models/GoalModel');

const getGoals = AsyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
})

const postGoals = AsyncHandler(async (req, res) => {
    // Guard against req.body being undefined before accessing .text
    if (!req.body || !req.body.text) {
        res.status(400);
        throw new Error('Please add a text field');
    }

    const goal = await Goal.create({
        text: req.body.text
    });

    res.status(200).json(goal);
})

const putGoals = AsyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGoal);
})

const deleteGoals = AsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }

    await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
})
module.exports = {getGoals, postGoals, putGoals,deleteGoals }