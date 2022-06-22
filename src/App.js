import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";
import ListItem from "./components/ListItem";
import React from "react";
import { type } from "@testing-library/user-event/dist/type";

class App extends React.Component {
  constructor() {
    super();
    this.state = { taskList: [] };
  }

  addTask = (newTask) => {
    this.setState((state) => {
      return { taskList: [...state.taskList, newTask] };
    });
  };

  editTask = () => {};
  deleteTask = () => {};

  render() {
    return (
      <div className="container-fluid mb-5 pb-5">
        <Header />

        <div className="d-flex">
          <Sidebar />

          <div className="w-100">
            <AddTask addTask={this.addTask} />

            <div className="card m-3 p-2">
              <ul className="list-group list-group-flush">
                {this.state.taskList.map((item, index) => {
                  return <ListItem id={index} taskDetails={item} editTask={this.editTask} deleteTask={this.deleteTask} />;
                })}
                <ListItem id={99} taskDetails={["Task", "Low"]} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
