import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: "", tasks: [] };
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
    this.state.tasks.push(this.state.taskName);
    // this.setState({ tasks: newTasks });
    this.setState({ taskName: "" });
  };

  render() {
    return (
      <div className="App">
        <br></br>
        Todo List
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
        <ul>
          {this.state.tasks.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
