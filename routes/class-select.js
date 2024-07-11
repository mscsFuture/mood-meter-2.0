var express = require('express');
var router = express.Router();
let server = require("../server");
const app = require("../app");

router.get('/', async (req, res) => {
  let pool = app.getPool();
  let classList = await server.getClassList(pool);
  res.status(200).json(classList);
});


module.exports = router;