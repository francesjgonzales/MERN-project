const express = require('express')
const router = express.Router()

//Get all
router.route('/', (req, res) => {
    res.render('index')
})

//Get one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//Create one 
router.post('/', (req, res) => {

})

module.exports = router