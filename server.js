require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const rentalsController = require('./controllers/rentals')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL


app.use('/rentals', rentalsController)



mongoose.connect(dbURL, () => {
    console.log('Connected to rentals db')
})


app.listen(PORT, () => {
    console.log('Rentals servicer started at PORT: ', PORT)
})
