import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [value, setValue] = useState("");
  const handleInputChange = (value) => {
    setValue(value);
  };
  return (
    <>
      <h2>输入的值是：{value}</h2>
      <Input onInputChange={handleInputChange} />
    </>
  );
};
export default InputParent;
