const router = require("express").Router();
const {
  allBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controller/book.controller");

router.get("/", allBooks);

router.get("/:id", getBookById);

router.post("/add", addBook);

router.put("/update/:book_id", updateBook);

router.delete("/delete/:book_id", deleteBook);

module.exports = router;
