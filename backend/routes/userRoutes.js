const express = require('express');
const router = express.Router();

// Destructure the exported controller function. The controller module exports an object
// like { registerUser }, so require(...) alone would return that object instead of the function.
const { registerUser, loginUser, getMyAccount } = require('../controllers/userController')

// Route: POST /api/users  (register a new user)
router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/myAccount', getMyAccount);

module.exports = router;