import { useMemo } from "react";

// ExpensiveCalculation组件，用于执行一个计算密集型的操作，
// 这个组件接收一个名为number的prop，并返回该数字乘以2的结果
const ExpensiveCalculation = ({ number }) => {
  // 使用useMemo Hook来缓存计算结果，
  // useMemo会在其依赖项（这里是number）发生变化时才重新计算
  const result = useMemo(() => {
    console.log("Calculating..."); // 打印日志，表明计算正在进行
    return number * 2; // 执行计算并返回结果
  }, [number]); // 依赖数组，当number发生变化时重新计算

  // 渲染组件，显示计算结果
  return <div>{result}</div>;
};

export default ExpensiveCalculation;
