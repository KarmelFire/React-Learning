const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <h2>图书详情</h2>
      <p>
        <strong>书名:</strong> {book.title}
      </p>
      <p>
        <strong>作者:</strong> {book.author}
      </p>
      <p>
        <strong>出版日期:</strong> {book.date}
      </p>
    </div>
  );
};

export default BookDetail;
