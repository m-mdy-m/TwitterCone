const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
  sender: { type: Schema.ObjectId, ref: "User", required: true },
  recipient: { type: Schema.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  seen: {
    type: Boolean,
    default: false 
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = model("Message", MessageSchema);
