import React from "react";
import Swal from "sweetalert2";

class ListItem extends React.Component {
  markAsDone = () => {
    this.props.markAsDone(this.props.id);
  }

  editTask = (e) => {
    e.preventDefault();

    const task = e.target.querySelector('input').value;
    const priority = e.target.querySelector('input:checked').value;
    const completed = this.props.taskDetails[2];
    const id = this.props.taskDetails[3];console.log([task, priority, completed, id]);

    this.props.editTask(this.props.id, [task, priority, completed, id]);
  }

  deleteTask = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        this.props.deleteTask(this.props.id);
      }
    });
  };

  render() {
    let priorityColor = "#007684";
    if (this.props.taskDetails[1] === "Medium") priorityColor = "#f7e593";
    else if (this.props.taskDetails[1] === "High") priorityColor = "#c03202";

    let taskColor = "temp";
    let displayButton = "";
    const completed = this.props.taskDetails[2];
    if (completed) {
      taskColor = "bg-green";
      displayButton = "none";
    }

    return (
      <li className="list-group-item">
        <div className="d-flex align-items-center justify-content-between p-3">
          <div className={taskColor}>{this.props.taskDetails[0]}</div>
          <div>
            <span className="me-5">
              <span className="priority-indicator me-2" style={{ backgroundColor: priorityColor }}></span>
              {this.props.taskDetails[1] + " Priority"}
            </span>

            <button type="button" className="btn btn-success me-3" onClick={this.markAsDone} style={{ display: displayButton }}>
              Done
            </button>
            <button type="button" className="btn btn-warning me-3" data-bs-toggle="modal" data-bs-target={'#editTaskModal-' + this.props.id} style={{ display: displayButton }}>
              Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={this.deleteTask}>
              Delete
            </button>
          </div>
        </div >

        <div className="modal fade" id={"editTaskModal-" + this.props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Task
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <form onSubmit={this.editTask}>
                <div className="modal-body">
                  <div className="mb-4">
                    <label htmlFor={"editTaskModalInput-" + this.props.id} className="form-label">
                      Task
                    </label>
                    <input type="text" className="form-control" id={"editTaskModalInput-" + this.props.id} defaultValue={this.props.taskDetails[0]} />
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" id={"lowPriorityModal-" + this.props.id} type="radio" value="Low" name="priority" defaultChecked={this.props.taskDetails[1] === "Low"} />
                    <label className="form-check-label" htmlFor={"lowPriorityModal-" + this.props.id}>
                      Low Priority
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id={"mediumPriorityModal-" + this.props.id} type="radio" value="Medium" name="priority" defaultChecked={this.props.taskDetails[1] === "Medium"} />
                    <label className="form-check-label" htmlFor={"mediumPriorityModal-" + this.props.id}>
                      Medium Priority
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id={"highPriorityModal-" + this.props.id} type="radio" value="High" name="priority" defaultChecked={this.props.taskDetails[1] === "High"} />
                    <label className="form-check-label" htmlFor={"highPriorityModal-" + this.props.id}>
                      High Priority
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </li >
    );
  }
}

export default ListItem;
