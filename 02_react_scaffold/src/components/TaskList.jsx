import React from "react";

const taskLists = [
  {
    id: 1,
    name: "吃饭",
    completed: true,
  },
  {
    id: 2,
    name: "睡觉",
    completed: false,
  },
  {
    id: 3,
    name: "敲代码",
    completed: false,
  },
];

const incompleteTasksCount = taskLists.filter((task) => !task.completed).length;

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <h2>任务列表数据</h2>
        <div>
          <h3>未完成的任务数: {incompleteTasksCount}</h3>
        </div>
        <div className="item">
          {taskLists.map((item) => {
            return (
              <div
                className="item"
                key={item.id}
                style={{
                  color: item.completed ? "green" : "red",
                  border: "1px solid #ccc",
                }}
              >
                <h2>编号:{item.id}</h2>
                <h2>名称:{item.name}</h2>
                <h2>完成情况:{item.completed ? "已完成" : "未完成"}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;
