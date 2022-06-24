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
    this.setState(state => {
      return { taskList: state.taskList }
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />

        <div className="d-flex">
          <Sidebar />
          
          <div className="w-100 content">
            <AddTask addTask={this.addTask} />

            <div className="card m-5 p-2 ">
              <ul className="list-group list-group-flush">
                {this.state.taskList.map((item, index) => {
                  return (
                    <ListItem
                      id={index}
                      taskDetails={item}
                      editTask={this.editTask}
                      deleteTask={this.deleteTask}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
