const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema ({
    dateTime: Date, 
    location: String, 
    tickets: {type: Boolean, default: false},
    reservations: {type: Boolean, default: false},
    name: String, //this could drop down if they clicked yes for reservations
    notes: String,
    photo: String, 
})


module.exports = mongoose.model('Items', itemSchema)