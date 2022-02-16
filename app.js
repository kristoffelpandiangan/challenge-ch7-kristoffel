const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const { PORT = 3000 } = process.env;
const router = require("./router");
const passport = require("./lib/passport");
const expressEjsLayout = require('express-ejs-layouts')
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret admire",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(router);

app.set("view engine", "ejs");
app.use(expressEjsLayout)

app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`);
});
