const express = require('express');

const router = express.Router();

const DB = require('../lib/db');

/* GET home page. */
router.get('/', (req, res, next) => {
  const films = DB.get('films');
  // res.locals.films = films

  res.render('films', {
    title: 'Films',
    films
    // error,
    // logout
  });
});

module.exports = router;
