const DB = require('../../lib/db');

module.exports = function(req, res, next) {
  const {email, password} = req.session;

  const userExists = checkUser(email, password);
  if (userExists) {
    req.session = userExists;
    res.locals.user = userExists;
    next();
  } else {
    res.redirect('/')
  }
};

function checkUser(email, password) {
  const users = DB.get('users');
  return users.find(user => {
    return user.email === email && user.password === password;
  });
}
