const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  // When wanting to add new requests use this as an example,
  // dont forget to add requireAuth as a parameter
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
  
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
};
