import BookItem from "./BookItem";

const BookList = ({ books, onDelete, onEdit, onSelect }) => {
  return (
    <div className="book-list">
      <h2>图书列表</h2>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onDelete={() => onDelete(book.id)}
            onEdit={(updatedBook) => onEdit(book.id, updatedBook)}
            onSelect={() => onSelect(book)}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
