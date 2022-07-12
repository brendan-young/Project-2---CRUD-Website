const express = require('express')
const router = express.Router()

const Rental = require('../models/rentals')

//=============================
// INDEX ROUTE - .GET
//=============================
router.get('/', (req, res) => {
    // console.log(req.baseUrl)
    Rental.find()
        .exec()
        .then((rentals) => {
            res.render('index.ejs', {
                rentals: rentals,
                baseUrl: req.baseUrl,
                tabTitle: 'Rentals Index'
            })
        })
})

//=============================
// NEW ROUTE - /rentals/new - .GET 
//=============================

router.get('/new', (req, res) => {
    res.render('new.ejs', {
        baseUrl: req.baseUrl,
        tabTitle: 'Add a new property'
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.petFriendly === 'on') {
        req.body.petFriendly = true
    } else {
        req.body.petFriendly = false
    }
    Rental.create(req.body)
        .then((newRental) => {
            console.log('Created rental: ', newRental)
            res.redirect(req.baseUrl)
        })
})


//=============================
// SHOW ROUTE .GET
//=============================

router.get('/:id', (req, res) => {
    Rental.findById(req.params.id)
    .exec()
    .then((rental) => {
        res.render('show.ejs', {
            baseUrl: req.baseUrl,
            rental: rental,
            tabTitle: rental.address
        })
    })
})

//=============================
// DELETE ROUTE .DELETE
//=============================

router.delete('/:id', (req, res) => {
    Rental.findByIdAndRemove(req.params.id)
        .exec()
        .then((rental) => {
            res.redirect(req.baseUrl)
        })
})

//=============================
// EDIT ROUTE .PUT
//=============================

router.get('/:id/edit', (req, res) => {
    Rental.findById(req.params.id)
        .exec()
        .then((rental) => {
            res.render('edit.ejs', {
                baseUrl: req.baseUrl,
                rental: rental,
                tabTitle: 'Edit This Property'
            })
        })
})

router.put('/:id/', (req, res) => {
    if (req.body.petFriendly === 'on') {
        req.body.petFriendly = true
    } else {
        req.body.petFriendly = false
    }

    Rental.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .exec()
        .then((rental) => {
            res.redirect(req.baseUrl)
        })
})

module.exports = router