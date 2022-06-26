import React from "react";
import AddTask from "./AddTask";
import ListItem from "./ListItem";

class Tasks extends React.Component {
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
  handleFilter = (item) => {
    const filterValue = this.props.filter;
    if (filterValue === "All") return true;
    else if (filterValue === "Completed") return item[2];
    else if (filterValue === "InProgress") return !item[2];
  };
  markAsDone = (id, completedTask) => {
    this.setState((state) => {
      state.taskList[id] = completedTask;
      return { taskList: state.taskList };
    });
  };
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
    let allItem = this.state.taskList.filter(this.handleFilter).map((item, index) => {
      return <ListItem id={index} taskDetails={item} editTask={this.editTask} deleteTask={this.deleteTask} markAsDone={this.markAsDone} />;
    });
    return (
      <div className="w-100 content">
        <AddTask addTask={this.addTask} />
        <div className="card m-5 p-2">
          <ul className="list-group list-group-flush">{allItem}</ul>
        </div>
      </div>
    );
  }
}

export default Tasks;
