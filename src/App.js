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
      // this.state.taskList[id][2] = true;
      this.setState((state) => {
        return { taskList: state.taskList };
      });
    },
    addTask: (newTask) => {
      this.setState((state) => {
        return { taskList: [...state.taskList, newTask] };
      });
    },
    editTask: (id, editedTask) => {
      this.setState((state) => {
        state.taskList[id] = editedTask;
        return { taskList: state.taskList };
      });
    },
    deleteTask: (id) => {
      this.state.taskList.splice(id, 1);
      this.setState((state) => {
        return { taskList: state.taskList }
      });
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
