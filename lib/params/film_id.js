const DB = require('../db');

module.exports = function (router) {
  router.param('film_id', function(req, res, next) {
    const id = req.params.film_id;

    const film = DB.get('films').find(f => f.id === id);

    if (film) {
      req.film = film;
      next();
    } else {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    }
  });
};
