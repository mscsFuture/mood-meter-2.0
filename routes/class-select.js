var express = require('express');
var router = express.Router();
let server = require("../server");
const app = require("../app");

// This get method will run whenever the user enters the "/class-select/get-classes" url.
router.get('/get-classes', async (req, res) => {
  let pool = app.getPool();
  let classList = await server.getClassList(pool, req.session.username);
  res.status(200).json(classList);
});

router.get('/teacher', (req, res) => {
	console.log(req.session.loggedin);
  if (req.session.loggedin) {
		res.render('class-select-teacher');
	} else {
		res.redirect('/login-page');
	}
	res.end();
});

// This get method will run whenever the user enters the "/class-select" url.
router.get('/', (req, res) => {
	console.log(req.session.loggedin);
  if (req.session.loggedin) {
		res.render('class-select-page');
	} else {
		res.redirect('/login-page');
	}
	res.end();
});

router.post("/create-class", async (req, res) => {
  let pool = app.getPool();
  let response = await server.createClass(pool, req.body, req.session.username);
  if (response == "true") {
    res.send(JSON.stringify(response));
  } else {
   res.send(JSON.stringify(response));
  }
});

router.post("/delete-class", async (req, res) => {
  let pool = app.getPool();
  let response = await server.deleteClass(pool, req.body, req.session.username);
  if (response == "true") {
    res.send(JSON.stringify(response));
  } else {
   res.send(JSON.stringify(response));
  }
});

module.exports = router;