var express = require('express');
var router = express.Router();

// SET layout variables
router.use( (req, res, next) => {
  res.locals.title = "Snippit";
  // res.locals.currentUserId = req.session.userId;
  // res.locals.username = req.session.username;
  next();
});

// GET home page
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET login
router.get('/login', (req, res, next) => {
  res.render('login');
});

module.exports = router;
