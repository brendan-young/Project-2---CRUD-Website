require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const rentalsController = require('./controllers/rentals')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL




app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))


// Controllers HAS to come AFTER URL encoded
app.use('/rentals', rentalsController)




mongoose.connect(dbURL, () => {
    console.log('Connected to rentals db')
})


app.listen(PORT, () => {
    console.log('Rentals servicer started at PORT: ', PORT)
})
