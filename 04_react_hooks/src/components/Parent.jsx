import { useState, useCallback } from "react";
import Child from "./Child";

// Parent组件，用于展示计数器和包含一个子组件Child
const Parent = () => {
  // 使用useState Hook创建一个名为count的状态变量，初始值为0
  const [count, setCount] = useState(0);

  // 使用useCallback Hook创建一个memoized（记忆化）的handleClick函数，
  // useCallback确保在count未发生变化时，重复使用相同的函数实例
  const handleClick = useCallback(() => {
    setCount(count + 1); // 点击时，将count状态加1
  }, [count]); // 依赖数组，当count发生变化时重新创建handleClick函数

  // 渲染组件，显示当前的count值和一个Child组件
  return (
    <div>
      {/* 显示当前计数 */}
      <p>{count}</p>
      {/* 将handleClick函数传递给Child组件 */}
      <Child handleClick={handleClick} />
    </div>
  );
};

export default Parent;
