import { useState, useCallback } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

// ExpensiveComponentParent组件，用于展示计数器并包含一个昂贵的子组件
const ExpensiveComponentParent = () => {
  // 使用useState Hook创建一个名为count的状态变量，初始值为0
  const [count, setCount] = useState(0);

  // 使用useCallback Hook创建一个memoizedAction函数
  // useCallback确保在count未发生变化时，重复使用相同的函数实例，
  // 这有助于避免不必要的重新渲染，特别是在传递给ExpensiveComponent时
  const memoizedAction = useCallback(() => {
    setCount(count + 1); // 点击时，将count状态加1
  }, [count]); // 依赖数组，当count发生变化时重新创建memoizedAction函数

  // 渲染组件，显示当前的count值和一个ExpensiveComponent子组件
  return (
    <div>
      <p>Count: {count}</p>
      <ExpensiveComponent onAction={memoizedAction} />
    </div>
  );
};

export default ExpensiveComponentParent;
