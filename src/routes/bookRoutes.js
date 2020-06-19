const express = require('express');
const bookRouter = express.Router();

function router(nav) {
  const books = [{
    title: 'War and Peace',
    genre: 'historical',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  },
  {
    title: 'Les Miserables',
    genre: 'historical',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'War and Peace',
    genre: 'historical',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }];

  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'library',
          books
        }
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'library',
          book: books[id]
        }
      );
    });
  return bookRouter;
}

module.exports = router;
