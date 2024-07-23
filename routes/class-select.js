var express = require('express');
var router = express.Router();
let server = require("../server");
const app = require("../app");

router.get('', (req, res) => {
  // res.sendFile('C:/Users/Ben Fenelon/OneDrive/Documents/GitHub/mood-meter-4.0/views/class-select-page.ejs');
  // res.render('class-select-page');

  if (req.session.loggedin) {
    console.log("Logged in");
		res.render('class-select-page');
	} else { 
    console.log("Not logged in");
		res.redirect('login-page');
	}
	res.end();
});

router.get('/get-classes', async (req, res) => {
  console.log("Got here");
  let pool = app.getPool();
  let classList = await server.getClassList(pool);
  res.status(200).json(classList);
});


module.exports = router;