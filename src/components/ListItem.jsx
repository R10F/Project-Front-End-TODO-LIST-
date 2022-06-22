import React from "react";
import Swal from "sweetalert2";

class ListItem extends React.Component {
  confirmDelete = () => {
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
      }
    });
  };

  render() {
    return (
      <li className="list-group-item">
        <div className="d-flex align-items-center justify-content-between p-3">
          <div>This is some text within a card body.</div>
          <div>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit
            </button>
            <button type="button" className="btn btn-danger ms-3" onClick={this.confirmDelete}>
              Delete
            </button>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Task
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div class="mb-4">
                  <label for={ 'editTaskModal-' + 1 } class="form-label">Task</label>
                  <input type="text" class="form-control" id={ 'editTaskModal-' + 1 } value="name@example.com" />
                </div>

                <div className="form-check">
                  <input className="form-check-input" id={ 'lowPriorityModal-' + 1 } type="radio" name="priority" />
                  <label className="form-check-label" htmlFor={ 'lowPriorityModal-' + 1 }>
                    Low Priority
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" id={ 'mediumPriorityModal-' + 1 } type="radio" name="priority" />
                  <label className="form-check-label" htmlFor={ 'mediumPriorityModal-' + 1 }>
                    Medium Priority
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" id={ 'highPriorityModal-' + 1 } type="radio" name="priority" />
                  <label className="form-check-label" htmlFor={ 'highPriorityModal-' + 1 }>
                    High Priority
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
