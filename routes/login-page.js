var express = require('express');
var router = express.Router();
let server = require("../server");
const app = require("../app");

router.post("/student-login", async (req, res) => {
  const key = "";
  const response = {
    "key": "",
    "verdict": "",
  }
  let pool = app.getPool();
  console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  response.verdict = await server.verifyPasswordUsername(pool, req.body);
  if (response.verdict == true) {
    response.key = "632FDG43467SDFSD.FDW21##";
  } 
  res.send(JSON.stringify(response));
});


router.post("/teacher-login", async (req, res) => {
  let pool = app.getPool();
  console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  const verdict = await server.verifyTeacherPasswordEmail(pool, req.body);
  res.send(JSON.stringify(verdict));
});

router.post("/create-teacher-account", async (req, res) => {
  let pool = app.getPool();
  console.log("Got to app");
  // console.log('Payload is: ' + JSON.stringify(req.body, null, 2));
  const verdict = await server.createTeacherAccount(pool, req.body);
  res.send(JSON.stringify(verdict));
});

module.exports = router;