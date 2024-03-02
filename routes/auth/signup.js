const Xprz = require("xprz");
const { Route } = new Xprz();
const {
  isPassword,
  isEmail,
  isUsername,
  trimValue,
  inputValidations,
} = require("vfyjs");
const route = new Route();
route
  .setRoute("/signup")
  .get(() => {
    const { status } = route.res();
    status(200).render("auth/signup.ejs", {
      Title: "signup",
    });
  })
  .post(() => {
    const { getBody } = route.req();
    const { status, json } = route.res();
    const body = getBody();
    try {
      const username = isUsername(body.username);
      const email = isEmail(body.email);
      const password = isPassword(body.password);
      const passwordConf = body.password === body.passwordConf;
      if (username && email && password && passwordConf) {
      }
    } catch (error) {
      status(400).json({ error: error.message });
    }
  });
module.exports = route;
