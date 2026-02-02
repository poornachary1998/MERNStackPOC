const express = require('express');

const router = express.Router();
const {protect} = require('../middleware/AuthMiddleware');
const {getGoals, postGoals, putGoals, deleteGoals} = require('../controllers/goalControllerr');
// connecting controller functions making code clean;
router.route('/').get(protect, getGoals).post( protect, postGoals);
router.route('/:id').delete(protect, deleteGoals).put(protect, putGoals);

// router.get('/' , getGoals);

// router.post('/', postGoals)
 
// router.put('/:id', putGoals)

// router.delete('/:id', deleteGoals)

module.exports = router;