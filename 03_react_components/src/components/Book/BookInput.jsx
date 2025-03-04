import { useState } from "react";

const BookInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    onAdd(title, author, date);
    setTitle("");
    setAuthor("");
    setDate("");
  };

  return (
    <div className="book-input">
      <input
        type="text"
        placeholder="书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="出版日期"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAdd}>添加图书</button>
    </div>
  );
};

export default BookInput;
