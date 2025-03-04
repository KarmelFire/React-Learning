import { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleComplete = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  const handleAddList = () => {
    setList((prevList) => [
      ...prevList,
      { id: Date.now(), text: inputValue, isCompleted: false },
    ]);
    setInputValue("");
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAddList}>添加待办事项</button>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <span
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => handleComplete(item.id)}>
              {item.isCompleted ? "×" : "√"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
