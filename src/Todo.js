import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props", props);
    // this.state = { taskName: "" };
    this.state = {
      id: props.id,
      value: props.value,
      done: props.done,
    };
  }

  completeTask = () => {
    // console.log("Todo completeTask", this.props.id);
    this.setState({ done: true });
    this.props.completeTask(this.props.id);
  };

  render() {
    let checkDone = "";
    if (!this.state.done) {
      checkDone = (
        <img
          src="./assets/checked.png"
          alt="success"
          width="25"
          style={{ cursor: "pointer" }}
          title="Bấm để hoàn thành task"
          onClick={() => this.completeTask(this.props.id)}
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
          onClick={() => this.props.deleteTask(this.props.id)}
        ></img>
        <span className={this.state.done ? "done" : ""}>
          {this.state.value}
        </span>
      </div>
    );
  }
}

export default Todo;
