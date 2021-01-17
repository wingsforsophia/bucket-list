const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tripSchema = new Schema ({
    addedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    startDate: Date, 
    endDate: Date,
    tripName: String,
    departing: String, //airport code
    arriving: String, //airport code
    city: String, 
    country: String, 
    itinerary: [{type: mongoose.Schema.Types.ObjectId, ref: "Items"}],
    discussionBoard: [{type: mongoose.Schema.Types.ObjectId, ref: "DiscussionBoard"}],
})

module.exports = mongoose.model('Trip', tripSchema)

// 2021-03-25T23:40:00.000Z