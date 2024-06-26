const {route, expose,mids} = require("xprz").Route();
const { verifyToken } = $read("middleware/is-auth");
const { findUser,findTweet,edit_user_mode,checkPassword,changePassword } = $read("controller/info/info");
mids([verifyToken])
// Defining a GET route for fetching tweets
route('/user-info').get(findUser).put(edit_user_mode)
route("/tweet-info/:id").get(findTweet);
route('/password-check/:password').get(checkPassword)
route('/changepassowrd/:userId').post(changePassword)
module.exports = expose;