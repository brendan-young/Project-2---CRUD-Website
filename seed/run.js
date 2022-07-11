require('dotenv').config()

const mongoose = require('mongoose')

const Rental = require('../models/rentals')
const dummyRentals = require('./dummy-rentals')

const dbURL = process.env.MONGODB_URL

mongoose.connect(dbURL, () => {
    console.log('connected to fruits db')
    console.log('Resetting rental collection')
    Rental.collection.drop()
        .then(() => {
            console.log('Rental collection dropped')
            console.log('Inserting seed data')
            return Rental.insertMany(dummyRentals)
        })
        .then(() => {
            console.log('Dummy rentals inserted');
            mongoose.connection.close()
        })
})