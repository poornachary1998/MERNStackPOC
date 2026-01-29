const express = require('express');

const router = express.Router();

router.get('/' , (req,res) =>{
    res.status(200).json({message : 'Get Goals'});
})

router.post('/', (req,res)=>{
    res.status(200).json({message: "POST message"});
})
 
router.put('/:id', (req, res)=>{
    res.status(200).json({message: `update the put call  for ${req.params.id}`})
})

router.delete('/:id', (req, res) =>{
    res.status(200).json({message: `delete the id ${req.params.id}`})
})
module.exports = router;