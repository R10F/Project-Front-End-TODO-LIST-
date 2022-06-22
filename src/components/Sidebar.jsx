import React from "react";
import { FiList, FiClock, FiCheckCircle } from "react-icons/fi";

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <div className="filter-menu">
          <FiList />
          <p>All</p>
        </div>
        <div className="filter-menu">
          <FiClock />
          <p>In Progress</p>
        </div>
        <div className="filter-menu">
          <FiCheckCircle />
          <p>Completed</p>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
