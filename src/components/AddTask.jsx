import React from "react";

class AddTask extends React.Component {
  addTask = (e) => {
    e.preventDefault();

    const task = e.target.querySelector("input").value;
    const priority = e.target.querySelector("input:checked").value;
    const completed = false;

    e.target.querySelector("input").value = '';
    
    this.props.addTask([task, priority, completed, -1]);
  };
  render() {
    return (
      <form onSubmit={this.addTask} className="add-task m-5 p-4">
        <div className="input-group mb-3">
          <input type="text" className="form-control border-primary border-3 " placeholder="What do you want to do?" required />
          <button className="btn btn-primary input-group-text" type="submit">
            Add Task
          </button>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" id="lowPriority" type="radio" value="Low" name="priority" defaultChecked />
          <label className="form-check-label" htmlFor="lowPriority">
            Low Priority
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" id="mediumPriority" type="radio" value="Medium" name="priority" />
          <label className="form-check-label" htmlFor="mediumPriority">
            Medium Priority
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" id="highPriority" type="radio" value="High" name="priority" />
          <label className="form-check-label" htmlFor="highPriority">
            High Priority
          </label>
        </div>
      </form>
    );
  }
}

export default AddTask;
