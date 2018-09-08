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

// // POST login
// router.post('/login', (req, res, next) => {
//   User.authenticate(req.body.username, req.body.password, (err, user) => {
//     if (err || !user) {
//       const next_error = new Error("Username or password incorrect");
//       next_error.status = 401;
//
//       return next(next_error);
//     } else {
//       req.session.userId = user._id;
//       req.session.username = user.username;
//
//       return res.redirect('/') ;
//     }
//   });
// });
//
// // POST logout
// router.get('/logout', (req, res, next) => {
//   if (req.session) {
//     req.session.destroy((err) => {
//       if (err) return next(err);
//     });
//   }
//
//   return res.redirect('/');
// });

module.exports = router;
