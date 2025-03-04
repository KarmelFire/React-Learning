import RegistForm from "./RegistForm";
import { useState } from "react";
const RegistPage = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const handleSubmit = (name, email) => {
    setData({ name, email });
  };
  return (
    <div>
      <RegistForm onSubmit={handleSubmit} />
      <h1>提交数据:</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};
export default RegistPage;
