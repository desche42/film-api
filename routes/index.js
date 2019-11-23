const express = require('express');
const DB = require('../lib/db');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Login',
    error: req.query.error ? 'Usuario o contraseña incorrectos' : ''
    // logout
  });
});

/* POST login */
router.post('/login', (req, res, next) => {
  const {email, password} = req.body;
  const userExists = checkUser(email, password);
  if (userExists) {
    req.session = userExists;
  }
  res.redirect(userExists ? '/films' : '/?error=true');
});

function checkUser(email, password) {
  const users = DB.get('users');
  return users.find(user => {
    return user.email === email && user.password === password;
  });
}

module.exports = router;
