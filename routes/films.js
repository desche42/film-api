const express = require('express');
const DB = require('../lib/db');
const filmMiddleware = require('../lib/params/film_id');
const router = express.Router();

filmMiddleware(router);

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

router.get('/:film_id', (req, res) => {
  const film = req.film;

  res.render('films/film', {
    title: film.name,
    film
  })
});

module.exports = router;
