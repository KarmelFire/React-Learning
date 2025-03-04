import UserProfile from "./UserProfile";
import { useState } from "react";

const UserPage = () => {
  const [user, setUser] = useState({ name: "张三", age: "18" });
  const handleAgeCount = () => {
    setUser((user) => ({ ...user, age: user.age++ }));
  };
  return (
    <>
      <UserProfile
        name={user.name}
        age={user.age}
        onAgeChange={handleAgeCount}
      />
    </>
  );
};
export default UserPage;
