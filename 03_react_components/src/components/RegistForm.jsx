import { useState } from "react";
const RegistForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onSubmit(name, email);
  };
  return (
    <div>
      <h1>用户注册</h1>
      Name:
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="请输入"
      />
      <p></p>
      Email:
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="请输入"
      />
      <p></p>
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
};
export default RegistForm;
