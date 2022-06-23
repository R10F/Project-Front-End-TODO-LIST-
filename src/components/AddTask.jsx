import React from "react";

class AddTask extends React.Component {
  render() {
    return (
      <form className="m-5 p-4">
        <div className="input-group mb-3">
          <input type="text" className="form-control border-primary border-3 " placeholder="Enter New Todo" />
          <button className="btn btn-primary input-group-text" type="button">
            Add Task
          </button>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" id="lowPriority" type="radio" name="priority" defaultChecked />
          <label className="form-check-label" htmlFor="lowPriority">
            Low Priority
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" id="mediumPriority" type="radio" name="priority" />
          <label className="form-check-label" htmlFor="mediumPriority">
            Medium Priority
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" id="highPriority" type="radio" name="priority" />
          <label className="form-check-label" htmlFor="highPriority">
            High Priority
          </label>
        </div>
      </form>
    );
  }
}

export default AddTask;
