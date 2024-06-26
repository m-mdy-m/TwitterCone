const {expose,route} = require('xprz').Route()
const clint = require('../../utils/TwitterApi')

route('/api/auth/twitter').get(async({redirect})=>{
    const { oauth_token}  = await clint.generateAuthLink()
    const authLink = `https://api.twitter.com/oauth/authenticate?oauth_token=${oauth_token}`;
    // Redirect the user to the authentication link
    return redirect(authLink);
})
module.exports = expose