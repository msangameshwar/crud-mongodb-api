const Book = require("../models/books");

const allBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ message: "All books", data: books });
  } catch (error) {
    return res.status(500).json({
      error: "Opps, Something went wrong. Please try again later",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const books = await Book.findById(req.params.id);
    return res.status(200).json({ data: books });
  } catch (error) {
    return res.status(500).json({
      error: "Opps, Something went wrong. Please try again later",
    });
  }
};

const addBook = async (req, res) => {
  try {
    const add = new Book({
      name: req.body.name,
      author: req.body.author,
    });
    const books = await add.save();
    return res.status(200).json({ data: books });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const update = await Book.findOneAndUpdate(
      { _id: req.params.book_id },
      req.body,
      { new: true }
    );

    return res.status(200).json({ data: update });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Opps, Something went wrong. Please try again later",
    });
  }
};

const deleteBook = async (req, res) => {};

module.exports = {
  allBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
