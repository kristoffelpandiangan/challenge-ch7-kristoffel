const router = require("express").Router();
const auth = require("./controllers/authControllers");
const gen = require("./controllers/generalControllers");
const restrict = require("./middlewares/restrict");



// router.use(function timeLog(req, res, next) {
//   console.log("Time:,", Date.now());
//   next();
// });

// router.get("/",restrict, (req, res) => res.render("home"));

router.get("/home", gen.home)
router.get("/people", gen.people)
router.get("/projects", gen.projects)
router.get("/contact", gen.contact)
router.get("/project-marcom", gen.marcom)
router.get("/project-markdev", gen.markdev)
router.get("/project-socmed", gen.socmed)
router.get("/whoami", restrict, auth.whoami);
router.get("/signup", gen.signup)
router.post("/signup", auth.signup)
router.post("/signin", auth.signin);
router.get("/signin", gen.signin);
router.get("/logout", auth.logout);
router.get("/api/v1/auth/whoami", restrict, auth.whoami);
router.post("/api/v1/auth/signup", auth.signup);
router.post("/api/v1/auth/signin", auth.signin);

module.exports = router;
