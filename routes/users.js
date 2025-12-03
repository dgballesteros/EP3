var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/login", function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (dataService.validateUser(username, password)) {
    req.session.isLogged = true;
    req.session.username = username;

    res.redirect("/");
  } else {
    res.render("login", { error: "User does not exist" });
  }
});

module.exports = router;
