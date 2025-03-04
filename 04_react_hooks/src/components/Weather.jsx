import { useState, useEffect } from "react";

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Nanjing&appid=e5f55c3f767f98bb75b940be0c5d37e9"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("网络请求错误");
        }
        return res.json();
      })
      .then((json) => {
        // 检查 API 是否返回了正确的数据
        if (json.cod === 200) {
          setData(json); // 直接设置整个响应数据
        } else {
          setError(json.message || "获取数据失败");
        }
      })
      .catch((err) => {
        setError(err.message || "未知错误");
      });
  }, []);

  if (error) return <span>{error}</span>;
  if (!data) return <span>加载中...</span>;

  return (
    <div>
      <p>ID: {data.id}</p>
      <p>城市名称: {data.name}</p>
      <p>国家: {data.sys.country}</p>
      <p>经度: {data.coord.lon}</p>
      <p>纬度: {data.coord.lat}</p>
      <p>
        天气状态: {data.weather[0].main} ({data.weather[0].description})
      </p>
      <p>温度: {data.main.temp} K</p>
      <p>体感温度: {data.main.feels_like} K</p>
      <p>最低温度: {data.main.temp_min} K</p>
      <p>最高温度: {data.main.temp_max} K</p>
      <p>气压: {data.main.pressure} hPa</p>
      <p>湿度: {data.main.humidity}%</p>
      <p>能见度: {data.visibility} 米</p>
      <p>风速: {data.wind.speed} m/s</p>
      <p>风向: {data.wind.deg}°</p>
      <p>阵风: {data.wind.gust} m/s</p>
      <p>云量: {data.clouds.all}%</p>
      <p>日出时间: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>日落时间: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
      <p>数据更新时间: {new Date(data.dt * 1000).toLocaleString()}</p>
    </div>
  );
};

export default Weather;
