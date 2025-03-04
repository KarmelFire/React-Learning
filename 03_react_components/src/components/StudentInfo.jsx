const StudentInfo = (props) => {
  return (
    <>
      <img
        src={props.avatar}
        alt="头像"
        style={{ width: "200px", height: "200px" }}
      />
      <h1>姓名：{props.name}</h1>
      <h1>性别：{props.gender}</h1>
      <h1>学号：{props.id}</h1>
    </>
  );
};
export default StudentInfo;
