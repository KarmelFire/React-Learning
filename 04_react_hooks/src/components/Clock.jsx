import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date()); // 初始化时间为当前时间

  useEffect(() => {
    // 设置定时器，每秒更新时间
    const timerId = setInterval(() => {
      setTime(new Date()); // 更新时间为当前时间
    }, 1000);

    // 组件卸载时清除定时器
    return () => clearInterval(timerId);
  }, []); // 空依赖数组表示只在组件挂载时运行一次

  // 格式化时间为 "HH:mm:ss"
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>当前时间</h1>
      <div>{formatTime(time)}</div>
    </div>
  );
};

export default Clock;
