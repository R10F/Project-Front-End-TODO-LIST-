import "./App.css";
import Layout from "./layout/Layout";
import Tasks from "./components/Tasks";
import React from "react";
import { Routes, Route } from "react-router-dom";

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

  functions = {
    markAsDone: (id) => {
      console.log(id);
      let updatedTask = this.state.taskList.map(item => {
        if (item[3] === id)
          item[2] = true;

        return item;
      });

      this.setState({ taskList: updatedTask });
    },

    addTask: (newTask) => {
      const taskNumber = this.state.taskList.length;

      if (taskNumber > 0) {
        const lastId = this.state.taskList[taskNumber - 1][3];
        newTask[3] = lastId + 1;
      } else {
        newTask[3] = 1;
      }

      this.setState({ taskList: [...this.state.taskList, newTask] });
    },

    editTask: (id, editedTask) => {
      let updatedTask = this.state.taskList.map(item => {
        if (item[3] === id)
          item = editedTask;

        return item;
      });

      this.setState({ taskList: updatedTask });
    },

    deleteTask: (id) => {
      let remainingTask = this.state.taskList.filter(item => {
        if (item[3] !== id)
          return item;
      });

      this.setState({ taskList: remainingTask });
    }
  }

  resetTask = () => {
    this.setState({ taskList: [] });
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout resetTask={this.resetTask} />}>
          <Route index element={<Tasks filter={"All"} taskList={this.state.taskList} {...this.functions} />} />
          <Route path="in-progress" element={< Tasks filter={"InProgress"} taskList={this.state.taskList} {...this.functions} />} />
          <Route path="completed" element={<Tasks filter={"Completed"} taskList={this.state.taskList} {...this.functions} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
