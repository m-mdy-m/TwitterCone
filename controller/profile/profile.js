const path = require("path");
const TweetUserManager = require("../../utils/helper");
const User = require("../../model/User");
const Tweet = require("../../model/Tweet");

exports.getProfile = (ctx) => {
  const username = ctx.param("username");
  const manager = new TweetUserManager(ctx, ctx.jsonSender);
  const user = manager.registerUser();
  if (user.username === username) {
    // If the username matches, send a success response with the username
    return ctx
      .jsonSender()
      .success("Operation successful", { username, user: user });
  } else {
    // If the username does not match, send an error response
    return ctx
      .jsonSender()
      .internalServerError("Something went wrong. Please try again later.");
  }
};
exports.ProfileUser = ({ sendFile }) => {
  sendFile(path.join(process.cwd(), "/public/main.html"));
};

exports.deleteAccount = async (ctx) => {
  const { success, internalServerError, notFound } = ctx.jsonSender();
  try {
    const userId = ctx.param("userId");
    const user = await User.findById(userId);
    await Promise.all([user.tweets.map( async (tweet)=>{
         await Tweet.findByIdAndDelete(tweet)
    })]);
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return notFound("User not found");
    }
    success("User account deleted successfully");
  } catch (error) {
    internalServerError(error.message);
  }
};
