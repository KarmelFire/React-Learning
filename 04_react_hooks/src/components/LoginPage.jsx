// App.js
import React from "react";
import { UserProvider } from "./UserProvider";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import UserStatus from "./UserStatus";

const LoginPage = () => {
  return (
    <UserProvider>
      <div>
        <h1>用户登录</h1>
        <UserStatus />
        <LoginForm />
        <LogoutButton />
      </div>
    </UserProvider>
  );
};

export default LoginPage;
