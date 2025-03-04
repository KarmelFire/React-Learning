import { useState } from "react";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./Style.css";
const Book = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  // 添加图书
  const handleAddBook = (title, author, date) => {
    const newBook = {
      id: Date.now(),
      title,
      author,
      date,
    };
    setBooks([...books, newBook]);
  };

  // 删除图书
  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // 编辑图书
  const handleEditBook = (id, updatedBook) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
  };

  // 查看图书详情
  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="book">
      <h1>图书管理系统</h1>
      <BookInput onAdd={handleAddBook} />
      <BookList
        books={books}
        onDelete={handleDeleteBook}
        onEdit={handleEditBook}
        onSelect={handleSelectBook}
      />
      {selectedBook && <BookDetail book={selectedBook} />}
    </div>
  );
};

export default Book;
