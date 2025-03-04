import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quis quia
        molestias? Recusandae, accusamus blanditiis eaque, natus sequi
        voluptatum quo laudantium asperiores laboriosam molestiae inventore ipsa
        rerum optio deserunt doloribus.
      </h2>
      <button onClick={toggleTheme}>
        切换到{isDarkMode ? "白天" : "暗黑"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
