const express = require('express');
const bookcontroller = require('../controllers/bookController');
const bookService = require('../services/goodreadsService');
const bookRouter = express.Router();

function router(nav) {
  const { getIndex, getById, middleware } = bookcontroller(bookService,nav);
  bookRouter.use(middleware);
  bookRouter.route('/')
    .get(getIndex);

  bookRouter.route('/:id')
    .get(getById);
  return bookRouter;
}

module.exports = router;
