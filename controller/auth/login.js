const Xprz = require("xprz");
const path = require("path");

const { Package } = new Xprz();
const { bcryptjs } = new Package();
const User = $read("model/User");
// Controller function to render the login page
exports.getLogin = (req, { sendFile }) => {
  sendFile(path.join(process.cwd(), "/public/views/auth/login.html"));
};
/**
 *  username : Ads242sxz
 * email : mahdimamashli1383@gmail.com
 * password : Asd24242@4
 */
// Controller function to handle login form submission
exports.postLogin = async (req, { status, getJsonHandler }) => {
  const { getBody } = req;
  const { username, email, password } = getBody();
  const { badRequest, notFound, internalServerError } = getJsonHandler();
  try {
    // Validate if username or email is provided
    if (!username && !email) {
      return badRequest("Username or email is required for login.");
    } // Find user by username and email
    const user = await User.findOne({ username: username, email: email });
    // Check if the request already has a user logged in
    if (req.user) {
      // Check if the found user matches the logged-in user
      const isSameUser = req.user._id.toString() === user._id.toString();
      // If it's the same user, return a response indicating they're already logged in
      if (isSameUser) {
        return status(409).json({
          success: false,
          message: "You are already logged in as this user. If you wish to log in as a different user, please logout first.",
        });
      }
    }
    // Check if user exists
    if (!user) {
      return notFound("User not found. Please register to create an account.");
    }
    // Compare password hashes
    const passwordMatches = await bcryptjs().compare(password, user.password);
    if (!passwordMatches) {
      return status(401).json({
        success: false,
        error: "Incorrect password. Please try again.",
      });
    }
    // Set user session
    req.session.user = user;
    // Send success response
    return status(200).json({
      success: true,
      message: "Logged in successfully.",
    });
  } catch (error) {
    console.log("error =>", error);
    internalServerError("Internal server error. Please try again later.");
  }
};
