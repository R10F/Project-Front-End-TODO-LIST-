import React from "react";
import { FiList, FiClock, FiCheckCircle } from "react-icons/fi";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="d-flex flex-column align-items-center justify-content-between shadow position-fixed top-0 mt-5">
        <div className="nav nav-pills nav-flush flex-column text-center mt-lg-4">
          <button className="nav-link active pl-3 py-3 border-bottom" title="All">
            <FiList /> <br/> 
            <span className="d-none d-md-inline text-truncate">All</span>
          </button>
          <button className="nav-link py-3 border-bottom" title="In Progress">
            <FiClock /> <br/>
            {/* In Progress */}
            <span className="d-none d-md-inline text-truncate">In Progress</span>
          </button>
          <button className="nav-link py-3 border-bottom" title="Completed">
            <FiCheckCircle /> <br/>
            {/* Completed */}
            <span className="d-none d-md-inline text-truncate">Completed</span>
          </button>
        </div>
        <button className="btn btn-primary w-75 mb-4">Reset</button>
      </aside>
    );
  }
}

export default Sidebar;
