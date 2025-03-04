import { useMemo } from "react";

// ListFilter组件，用于根据给定的查询条件过滤列表项
const ListFilter = ({ items, query }) => {
  // 使用useMemo Hook来缓存过滤后的列表项，
  // useMemo会在其依赖项（这里是items和query）发生变化时才重新计算
  const filteredItems = useMemo(() => {
    // 使用filter方法筛选出包含查询条件的列表项，
    // 将列表项和查询条件都转换为小写，以实现不区分大小写的搜索
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]); // 依赖数组，当items或query发生变化时重新计算

  // 渲染组件，显示过滤后的列表项
  return (
    <ul>
      {filteredItems.map((item) => (
        // 为每个列表项生成一个列表项元素
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ListFilter;
