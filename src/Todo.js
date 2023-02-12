import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props", props);
    // this.state = { taskName: "" };
    this.state = {
      data: props.data,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps", props);
    return { data: props.data };
  }

  // completeTask = () => {
  //   // console.log("Todo completeTask", this.props.id);
  //   // this.setState({ done: true });
  //   this.props.completeTask(this.state.data.id);
  // };

  render() {
    // console.log("render");

    let checkDone = "";
    if (!this.state.done) {
      checkDone = (
        <img
          src="./assets/checked.png"
          alt="success"
          width="25"
          style={{ cursor: "pointer" }}
          title="Bấm để hoàn thành task"
          onClick={() => this.props.completeTask(this.state.data.id)}
        ></img>
      );
    }
    return (
      <div className="Todo aligned">
        {checkDone}
        <img
          className={this.state.done ? "noCheckDone" : ""}
          src="./assets/delete.png"
          alt="delete"
          width="25"
          style={{ cursor: "pointer" }}
          title="Bấm vào để xóa task"
          onClick={() => this.props.deleteTask(this.state.data.id)}
        ></img>
        <span className={this.state.data.done ? "done" : ""}>
          {this.state.data.name}
        </span>
      </div>
    );
  }
}

export default Todo;
