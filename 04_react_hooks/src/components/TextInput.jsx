import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("abc");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>输入内容：{inputValue}</p>
    </div>
  );
};

export default TextInput;
