const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const { Register, User } = require("../models");

async function authenticate(username, password, done) {
  try {
    const user = await Register.authenticate({ username, password });
    return done(null, user);
  } catch (err) {
    return done(null, false, { message: err.message });
  }
}

const options = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "secret admire",
};

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    Register.findByPk(payload.id)
      .then((user) => done(null, user))
      .catch((err) => done(err, false));
  })
);

// passport.use(
//   new LocalStrategy(
//     { usernameField: "username", passwordField: "password" },
//     authenticate
//   )
// );

// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) =>
//   done(null, await User.findByPk(id))
// );

module.exports = passport;
