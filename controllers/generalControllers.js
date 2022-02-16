

module.exports = {
  home: (req, res) =>
  res.render("home", {title: "Home",}),
  people: (req, res) =>
  res.render("people", {title: "People",}),
  projects: (req, res) =>
  res.render("projects", {title: "Projects",}),
  contact: (req, res) =>
  res.render("contact", {title: "Contact",}),
  marcom: (req, res) =>
  res.render("marcom", {title: "Marcom",}),
  markdev: (req, res) =>
  res.render("markdev", {title: "Markdev",}),
  socmed: (req, res) =>
  res.render("socmed", {title: "Socmed",}),
  signup: (req, res) =>
  res.render("signup", {title: "Signup",}),
  signin: (req, res) =>
  res.render("signin", {title: "Signin",}),
};

// app.get("/home", (req, res) => {
//   res.render("home", {
//     layout: "layouts/main-layout",
//     title: "Home",
//   });
// });

// app.get("/people", (req, res) => {
//   res.render("people", {
//     layout: "layouts/main-layout",
//     title: "People",
//   });
// });

// app.get("/projects", (req, res) => {
//   res.render("projects", {
//     layout: "layouts/proj-layout",
//     title: "{Projects}",
//   });
// });

// app.get("/contact", (req, res) => {
//   res.render("contact", {
//     layout: "layouts/main-layout",
//     title: "Contact",
//   });
// });

// app.get("/project-marcom", (req, res) => {
//   res.render("marcom", {
//     layout: "layouts/proj-layout",
//     title: "Project-Marcom",
//   });
// });

// app.get("/project-markdev", (req, res) => {
//   res.render("markdev", {
//     layout: "layouts/proj-layout",
//     title: "Project-Markdev",
//   });
// });

// app.get("/project-socmed", (req, res) => {
//   res.render("socmed", {
//     layout: "layouts/proj-layout",
//     title: "Project-Socmed",
//   });
// });
