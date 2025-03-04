// UserProvider.js
import React, { useState } from "react";
import { UserContext } from "../context/UserContext"; // 导入 UserContext

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 初始状态为未登录

  // 登录函数
  const login = (username, password) => {
    if (username === "admin" && password === "123") {
      setUser({ username });
      alert("登录成功");
      return true;
    } else {
      alert("用户名或密码错误！");
      return false;
    }
  };

  // 登出函数
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
