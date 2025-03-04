import { Menu } from "antd";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "10px",
        borderBottom: "1px solid #eee",
      }}
    >
      <Menu mode="horizontal" style={{ justifyContent: "center" }}>
        <Menu.Item key="1">导航111</Menu.Item>
        <Menu.Item key="2">导航222</Menu.Item>
        <Menu.Item key="3">导航333</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
