import React from "react";
import Swal from "sweetalert2";
import { FiList, FiClock, FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  resetTask = () => {
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

        this.props.resetTask();
      }
    });
  };

  render() {
    const activeClassName = "nav-link py-3 border-bottom active";
    const notactiveClassName = "nav-link py-3 border-bottom";

    return (
      <aside className="d-flex flex-column align-items-center justify-content-between shadow position-fixed top-0" style={{ marginTop: '60px' }}>
        <ul className="nav nav-pills flex-column text-center mt-lg-4">
          <li className="nav-item" value="all">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : notactiveClassName}>
              <FiList /> <br />
              <span className="d-none d-md-inline text-truncate">All</span>
            </NavLink>
          </li>
          <li className="nav-item" value="inprogress">
            <NavLink to="/in-progress" className={({ isActive }) => isActive ? activeClassName : notactiveClassName}>
              <FiClock /> <br />
              <span className="d-none d-md-inline text-truncate">In Progress</span>
            </NavLink>
          </li>
          <li className="nav-item" value="completed">
            <NavLink to="/completed" className={({ isActive }) => isActive ? activeClassName : notactiveClassName}>
              <FiCheckCircle /> <br />
              <span className="d-none d-md-inline text-truncate">Completed</span>
            </NavLink>
          </li>
        </ul>

        <button className="btn btn-primary w-75 mb-4" onClick={this.resetTask}>Reset</button>
      </aside>
    );
  }
}

export default Sidebar;
