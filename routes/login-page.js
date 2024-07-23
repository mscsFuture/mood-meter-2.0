var express = require('express');
var router = express.Router();
let server = require("../server");
const app = require("../app");

router.get('/', (req, res) => {
  res.render('index');
});

router.post("/student-login", async (req, res) => {
  let pool = app.getPool();
  console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  let response = await server.verifyPasswordUsername(pool, req.body);
  if (response == true) {
    req.session.loggedin = true;
    res.send(JSON.stringify(response));
    // res.redirect("/class-select");
    // res.render('class-select-page');
  } else {
   res.send(JSON.stringify(response));
  }
});


router.post("/teacher-login", async (req, res) => {
  let pool = app.getPool();
  console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  const verdict = await server.verifyTeacherPasswordEmail(pool, req.body);
  if (verdict == true) {
    req.session.loggedin = true;
    res.send(JSON.stringify(verdict));
  } else {
    res.send(JSON.stringify(verdict));
  }
});

router.post("/create-teacher-account", async (req, res) => {
  let pool = app.getPool();
  console.log("Got to app");
  // console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  const verdict = await server.createTeacherAccount(pool, req.body);
  res.send(JSON.stringify(verdict));
});

module.exports = router;