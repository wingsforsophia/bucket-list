const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    username: String,
    avatar: String,
    message: String,
    user: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);