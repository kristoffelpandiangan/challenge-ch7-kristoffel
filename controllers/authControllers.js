const { Register, User } = require("../models");
const passport = require("../lib/passport");


function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  signup: (req, res, next) => {
    Register.register(req.body)
      .then(() => {
          res.redirect("/signin");
      })
      .catch((err) => next(err));
  },
  // login: passport.authenticate("local", {
  //   successRedirect: "/whoami",
  //   failureRedirect: "/login",
  //   failureFlash: true,
  // }),
  // signin: (req, res) => {
  //   try {
  //   Register.authenticate(req.body).then((user) => {
  //     console.log(user)
  //     res.render("projects", {title: "Projects", user:user.username})
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
  // },
  signin: async (req, res) => {
    try {
      await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      await Register.authenticate(req.body).then((user) => {
      res.render("projects2", {title: "Projects", user:user.username, isUser: req.session.username,})
    });
  } catch (err) {
    console.log(err);
  }
  },
  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
    console.log(currentUser);
  },
  logout: (req, res) => {
    res.cookie("connect.sid", "", { maxAge: 1 });
    res.redirect("/signin");
    },
};
