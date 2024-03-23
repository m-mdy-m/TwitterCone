const Tweet = $read("model/Tweet");
const User = $read("model/User");
// Function to check if a given element's likes array includes a specific ID
function isLikesInclude(element, id) {
  const { likes, likedTweets } = element;
  return (
    (likes && likes.includes(id)) || (likedTweets && likedTweets.includes(id))
  );
}
// Function to check if any element in the array has the specified id in its likes array
function isIdLiked(array = [], id) {
  for (const elm of array) {
    if (isLikesInclude(elm, id)) {
      return true; // If found, return true immediately
    }
  }
  return false; // If not found, return false after checking all elements
}
/**
 * Generate MongoDB queries for associating user with tweet and updating tweet features.
 * @param {string} operation - Operation type ('$addToSet', '$pull', etc.).
 * @param {string} userId - ID of the user.
 * @param {string} tweetId - ID of the tweet.
 * @param {string} featureTypeTweet - Feature type for tweet ('likes' by default).
 * @param {string} featureTypeUser - Feature type for user ('likedTweets' by default).
 * @returns {object} - Object containing query and updateQuery for MongoDB.
 */
const generateTweetQueries = (operation, userId, tweetId, featureTypeTweet = "likes",featureTypeUser = "likedTweets") => {
  // Construct query to associate user with tweet based on the operation and tweet information
  const UserQuery = { [operation]: { [featureTypeTweet]: userId } };
  // Construct update query to perform operation on tweet based on tweet information
  const TweetQuery = { [operation]: { [featureTypeUser]: tweetId } };

  return { UserQuery, TweetQuery };
};
/**
 * Clears all cookies present in the request by setting their expiration time to a past date.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
function clearAllCookies(req, res) {
  // Retrieve all cookies from the request
  const cookies = req.cookies;

  // Iterate over each cookie
  for (const cookieName in cookies) {
    // Clear the cookie by setting its expiration time to a past date
    res.clearCookie(cookieName);
  }
}

async function getOriginTweet(tweet, userId,option, callback) {
  try {
    const original = tweet.originalTweet;
    if (!original) {
      return;
    }
    // If it's a retweet, find the original tweet
    const originalTweet = await Tweet.findById(original);
    // If the user has liked the original tweet, remove the like
    const { query, updateQuery } = generateTweetQueries(
      option,
      userId,
      originalTweet._id
    );

    // Execute the update operations on the user and the tweet
    const [updatedUser, updatedTweet] = await Promise.all([
      User.findByIdAndUpdate(userId, updateQuery, { new: true }),
      Tweet.findByIdAndUpdate(original._id, query, { new: true }),
    ]);
    if (updatedTweet.originalTweet) {
      callback(updatedTweet);
    }
    return { updatedUser, updatedTweet };
  } catch (error) {}
}
const getIdRetweets = async (retweeters) => {
  for (const id of retweeters) {
    const tweet = await User.findById(id);
    console.log("tweet =>", tweet);
  }
};
async function handlerRetweets(tweet) {
  const retweeters = tweet.retweeters;
  const tweets = await getIdRetweets(retweeters);
  console.log("tweets=>", tweets);
}

module.exports = { isIdLiked, isLikesInclude, generateTweetQueries, clearAllCookies, getOriginTweet,  handlerRetweets,};
