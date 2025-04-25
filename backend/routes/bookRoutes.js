const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books
router.get('/', async (req, res) => {
  console.log("getting books");
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
// const express = require('express');
// const mongoose = require('mongoose');
// const bookRoutes = require('./routes/bookRoutes.js'); // correct path to your router
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('your_mongo_connection_string_here', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Mount routes
// app.use('/books', bookRoutes); // ← now all routes will be under /books

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
