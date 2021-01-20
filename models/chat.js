const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    chatMessage: String,
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);