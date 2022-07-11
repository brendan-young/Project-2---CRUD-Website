const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const rentalSchema = new Schema (
    {
        address: { type: String, required: true},
        realEstate: { type: String, required: true},
        linkURL: String,
        rooms: Number,
        bathrooms: Number,
        extras: String, 
        petFriendly: { type: Boolean, default: false},
        rentPrice: { type: String },
        finalComments: { type: String},
        imageURL: { type: String, default: 'https://loremflickr.com/600/600/house' }
    },
    { timestamps: true }
)

const Rental = mongoose.model('Rental', rentalSchema)

module.exports = Rental