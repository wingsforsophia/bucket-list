const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema ({

})

const messageBoardSchema = new Schema ({
    replies: [replySchema]

})

module.exports = mongoose.model('MessageBoard', messageBoardSchema)