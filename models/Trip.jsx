const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tripSchema = new Schema ({
    date: Date, 
    departing: String, 
    arriving: String, 
    city: String, 
    country: String, 
    intinerary: [{type: mongoose.Schema.Types.ObjectId, ref: "Items"}],
    messageBoard: [{type: mongoose.Schema.Types.ObjectId, ref: "Messages"}],



})

module.exports = mongoose.model('Trip', tripSchema)