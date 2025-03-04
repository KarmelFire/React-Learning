import { useState } from "react";

const BookItem = ({ book, onDelete, onEdit, onSelect }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [date, setDate] = useState(book.date);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit({ title, author, date });
    setIsEditing(false);
  };

  return (
    <li className="book-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button onClick={handleSave}>保存</button>
        </>
      ) : (
        <>
          <div className="book-info">
            <h3>{title}</h3>
            <p>作者: {author}</p>
            <p>出版日期: {date}</p>
          </div>
          <button onClick={handleEdit}>编辑</button>
          <button onClick={onDelete}>删除</button>
          <button onClick={onSelect}>详情</button>
        </>
      )}
    </li>
  );
};

export default BookItem;
