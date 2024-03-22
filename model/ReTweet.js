const { Schema, model } = require("mongoose");

// Define the schema for a retweet
const RetweetSchema = new Schema(
  {
    originalTweet: {
      type: Schema.ObjectId,
      ref: "Tweet",
    },
    content: {
      type: String,
      trim: true,
    },
    postedBy: {
      type: Schema.ObjectId,
      ref: "User",
    },
    pinned: Boolean,
    likes: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

// Create and export the Retweet model based on the schema
const Retweet = model("Retweet", RetweetSchema);

module.exports = Retweet;