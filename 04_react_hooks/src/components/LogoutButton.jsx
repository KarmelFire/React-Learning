import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  return <button onClick={logout}>登出</button>;
};

export default LogoutButton;
