import React from "react";

// 学生数据
const students = [
  { id: 1, name: "张三", age: 18, gender: "男♂" },
  { id: 2, name: "李四", age: 17, gender: "女♀" },
  { id: 3, name: "王五", age: 19, gender: "男♂" },
  { id: 4, name: "赵六", age: 16, gender: "女♀" },
];

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentIndex: 0, // 当前显示的学生索引
    };
  }

  // 切换到上一个学生
  handlePrevStudent = () => {
    const { studentIndex } = this.state;
    this.setState({
      studentIndex: (studentIndex - 1 + students.length) % students.length,
    });
  };

  // 切换到下一个学生
  handleNextStudent = () => {
    const { studentIndex } = this.state;
    this.setState({
      studentIndex: (studentIndex + 1) % students.length,
    });
  };

  render() {
    const { studentIndex } = this.state;
    const currentStudent = students[studentIndex];

    return (
      <div
        className="student-container"
        style={{
          width: "300px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h2>学生信息</h2>
        <p>
          <strong>姓名：</strong> {currentStudent.name}
        </p>
        <p>
          <strong>年龄：</strong> {currentStudent.age}
        </p>
        <p>
          <strong>性别：</strong> {currentStudent.gender}
        </p>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={this.handlePrevStudent}
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            上一个
          </button>
          <button
            onClick={this.handleNextStudent}
            style={{
              padding: "5px 10px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            下一个
          </button>
        </div>
      </div>
    );
  }
}

export default StudentList;
