const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AsyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = AsyncHandler(async (req, res) => {

    // Safely destructure in case req.body is undefined (avoid runtime destructure errors)
    const { name, email, password } = req.body || {};

    // Validate required fields and *return* the error response to stop execution
    if (!name || !email || !password) {
        res.status(400)
        throw new Error({ message: 'Enter the required fields' });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if (user) {
        // Placeholder success response (use 201 Created for resources
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid user details");
    }
})

const loginUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
    throw new Error ("Invalid credentials")
    }
})

const getMyAccount = AsyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id);

    res.status(200).json({
        id:_id,
        name,
        email
    })
})

//creating a common function.. for JWT.

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {
        expiresIn: '30d'
    })
}

module.exports = { registerUser, loginUser, getMyAccount }