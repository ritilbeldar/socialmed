var express = require('express');
var router = express.Router();
const {register}=require("../controllers/User")
const {login}=require("../controllers/User")
const User = require("../models/User");


/* GET main home page. */
router.get('/',  function(req, res, next) {
  res.render('index', { title: 'Project 4thsem' });
});


/* GET login home page. */
router.get('/login',  function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET noti home page. */
router.get('/noti',  function(req, res, next) {
  res.render('noti', { title: 'Notification'  });
});


/* GET signup home page. */
router.get('/signup2',  function(req, res, next) {
  res.render('signup2', { title: 'Add Details' });
});
/* GET signup home page. */
router.get('/signup',  function(req, res, next) {
  res.render('signup', { title: 'signup' });
});

/* GET other home page. */
router.get('/otheruser',  function(req, res, next) {
  res.render('other-user', { title: 'other user' });
});

/* GET department acc home page. */
router.get('/department-acc',  function(req, res, next) {
  res.render('department-acc', { title: 'Department Account' });
});

/* GET chat  home page. */
router.get('/chat',  function(req, res, next) {
  res.render('chat', { title: 'Chat' });
});

/* GET user chat  home page. */
router.get('/user-chat',  function(req, res, next) {
  res.render('user-chat', { title: 'User Chat' });
});

/* GET deparment page home page. */
router.get('/dep-page',  function(req, res, next) {
  res.render('departmnet-page', { title: 'Deparment Page' });
});

/* GET signup home page. */
router.get('/profile',  function(req, res, next) {
  res.render('profile', { title: 'Profile' });
});

router.get('/home',  function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET signup home page. */
// router.route("/register").post(register);

/* GET login home page. */
router.route("/login").post(login);


/* GET profile home page. */
router.get('/profile-main',  function(req, res, next) {
  const user = User
  res.render('profile-main', { title: 'Profile',user });
});

module.exports = router;
