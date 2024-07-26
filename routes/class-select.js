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


module.exports = router;