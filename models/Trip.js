const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tripSchema = new Schema ({
    date: Date, 
    departing: String, 
    arriving: String, 
    city: String, 
    country: String, 
    itinerary: [{type: mongoose.Schema.Types.ObjectId, ref: "Items"}],
    discussionBoard: [{type: mongoose.Schema.Types.ObjectId, ref: "DiscussionBoard"}],
})

module.exports = mongoose.model('Trip', tripSchema)