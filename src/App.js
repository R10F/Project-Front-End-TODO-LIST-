import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";
import ListItem from "./components/ListItem";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { taskList: [] };
  }

  componentWillMount() {
    localStorage.getItem("todo") &&
      this.setState({
        taskList: JSON.parse(localStorage.getItem("todo")),
      });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todo", JSON.stringify(nextState.taskList));
  }

  addTask = (newTask) => {
    this.setState((state) => {
      return { taskList: [...state.taskList, newTask] };
    });
  };

  editTask = (id, editedTask) => {
    this.setState((state) => {
      state.taskList[id] = editedTask;
      return { taskList: state.taskList };
    });
  };

  deleteTask = (id) => {
    this.state.taskList.splice(id, 1);
    this.setState((state) => {
      return { taskList: state.taskList };
    });
  };

  render() {
    let allItems = this.state.taskList.map((item, index) => {
      return (
        <ul className="list-group list-group-flush">
          <ListItem id={index} taskDetails={item} editTask={this.editTask} deleteTask={this.deleteTask} />
        </ul>
      );
    });

    return (
      <div className="container-fluid mb-5 pb-5">
        <Header />

        <div className="d-flex">
          <Sidebar />

          <div className="w-100">
            <AddTask addTask={this.addTask} />
            <div className="card m-3 p-2 ">{allItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
