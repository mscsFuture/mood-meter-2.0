var express = require('express');
var router = express.Router();


// This get method will run whenever the user enters the "/game" url.
router.get('', (req, res) => {
  // if the user is logged in, we render the game.ejs file
  if (req.session.loggedin) {
    res.render('game');
	} else {
    // if the user is not logged in, we send them to the login page
		res.redirect('/login-page');
	  res.end();
}});


module.exports = router;