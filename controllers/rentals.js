const express = require('express')
const router = express.Router()

const Rental = require('../models/rentals')

//=============================
// INDEX ROUTE
//=============================
router.get('/', (req, res) => {
    // console.log(req.baseUrl)
    Rental.find()
        .exec()
        .then((rentals) => {
            res.render('index.ejs', {
                rentals: rentals,
                baseURL: req.baseUrl
            })
        })
})



//=============================
// SHOW ROUTE
//=============================

router.get('/:id', (req, res) => {
    Rental.findById(req.params.id)
    .exec()
    .then((rental) => {
        res.render('show.ejs', {
            baseURL: req.baseUrl,
            rental: rental
        })
    })
})


module.exports = router