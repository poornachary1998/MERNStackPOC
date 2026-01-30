const express = require('express');

const router = express.Router();
const {getGoals, postGoals, putGoals, deleteGoals} = require('../controllers/goalControllerr');
// connecting controller functions making code clean;
router.route('/').get(getGoals).post(postGoals);
router.route('/:id').delete(deleteGoals).put(putGoals);

// router.get('/' , getGoals);

// router.post('/', postGoals)
 
// router.put('/:id', putGoals)

// router.delete('/:id', deleteGoals)

module.exports = router;