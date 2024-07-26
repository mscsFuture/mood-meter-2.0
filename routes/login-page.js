var express = require('express');
var router = express.Router();
let server = require("../server");
const app = require("../app");


// This get method will run whenever the user enters the "/login-page" url.
router.get('', (req, res) => {
  res.render('index');
});

// This post method will run whenever the user enters the "/login-page/student-login" url.
router.post("/student-login", async (req, res) => {
  let pool = app.getPool();
  let response = await server.verifyPasswordUsername(pool, req.body);
  if (response.result == "true") {
    req.session.loggedin = true;
    req.session.username = response.id;
    res.send(JSON.stringify(response));
  } else {
   res.send(JSON.stringify(response));
  }
});

// This post method will run whenever the user enters the "/login-page/teacher-login" url.
router.post("/teacher-login", async (req, res) => {
  let pool = app.getPool();
  // console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  const response = await server.verifyTeacherPasswordEmail(pool, req.body);
  if (response.result == "true") {
    req.session.loggedin = true;
    req.session.username = response.id;
    res.send(JSON.stringify(response));
  } else {
    res.send(JSON.stringify(response));
  }
});

router.post("/create-teacher-account", async (req, res) => {
  let pool = app.getPool();
  const verdict = await server.createTeacherAccount(pool, req.body);
  res.send(JSON.stringify(verdict));
});

module.exports = router;