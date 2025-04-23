const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// POST /books
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

// PUT /books/:id
router.put('/:id', async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE /books/:id
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
