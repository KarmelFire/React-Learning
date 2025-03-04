import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.xygeng.cn/one")
      .then((res) => {
        if (!res.ok) {
          throw new Error("网络请求错误");
        }
        return res.json();
      })
      .then((json) => {
        if (json.code === 200 && json.data) {
          setData(json.data);
        } else {
          setError(json.error || "获取数据失败");
        }
      });
  }, []);
  if (error) return <span>{error}</span>;
  if (!data) return <span>加载中...</span>;

  return (
    <div>
      <p>ID:{data.id}</p>
      <p>标签:{data.tag}</p>
      <p>名称:{data.name}</p>
      <p>来源:{data.origin}</p>
      <p>内容:{data.content}</p>
      <p>创建时间:{data.created_at}</p>
      <p>更新时间:{data.updated_at}</p>
    </div>
  );
};

export default FetchData;
