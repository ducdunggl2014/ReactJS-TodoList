import "./TodoList.css";
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoListName: props.name, taskName: "", tasks: [] };
  }

  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log("myTaskChangeHandler", event.target.value);
  };

  addTask = () => {
    // console.log("addTask", this.state.taskName);
    if (this.state.taskName === "") {
      return;
    }
    const id = this.state.tasks.length;
    const name = this.state.taskName;
    this.state.tasks.push({ id, name, done: false });
    this.setState({ taskName: "" });
  };

  deleteTask = (id) => {
    // console.log("list", this.state.tasks);
    // console.log("deleteTask", id);
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    // console.log("after list", tasks);

    this.setState({ tasks });
  };

  completeTask = (id) => {
    // console.log("list", this.state.tasks);
    // console.log("compeleteTask", id);
    const tasks = this.state.tasks;
    tasks.forEach((task) => {
      if (task.id === id) {
        task.done = true;
      }
    });
    // console.log("task muon complete", tasks);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="todoList">
        {this.state.todoListName}
        <br></br>
        <div className="aligned">
          <img
            src="./assets/plus.png"
            alt="add task"
            width="25"
            style={{ cursor: "pointer" }}
            title="Bấm để thêm task"
            onClick={() => this.addTask()}
          ></img>
          <input
            type="text"
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}
          ></input>
        </div>
        <ul style={{ paddingLeft: "10px" }}>
          {this.state.tasks.map((value, index) => {
            // return <li key={index}>{value}</li>;
            return (
              <Todo
                key={value.id}
                data={value}
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
