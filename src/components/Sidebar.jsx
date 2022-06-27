import React from "react";
import { FiList, FiClock, FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      activedList: "all",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log("e " + e.target.value);
    this.setState({ activedList: e.target.value });
    console.log(this.state.activedList);
  }
  active = (key) => {
    if (key === this.state.activedList) return true;
    return false;
  };

  render() {
    const activeClassName = "nav-link py-3 border-bottom active";
    const notactiveClassName = "nav-link py-3 border-bottom";
    return (
      <aside className="d-flex flex-column align-items-center justify-content-between shadow position-fixed top-0 mt-5">
        <ul className="nav nav-pills flex-column text-center mt-lg-4">
          <li className="nav-item" onClick={this.handleChange} value="all">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : notactiveClassName)}>
              <FiList /> <br />
              <span className="d-none d-md-inline text-truncate">All</span>
            </NavLink>
          </li>
          <li className="nav-item" onClick={this.handleChange} value="inprogress">
            <NavLink to="/in-progress" className={({ isActive }) => (isActive ? activeClassName : notactiveClassName)}>
              <FiClock /> <br />
              <span className="d-none d-md-inline text-truncate">In Progress</span>
            </NavLink>
          </li>
          <li className="nav-item" onClick={this.handleChange} value="completed">
            <NavLink to="/completed" className={({ isActive }) => (isActive ? activeClassName : notactiveClassName)}>
              <FiCheckCircle /> <br />
              <span className="d-none d-md-inline text-truncate">Completed</span>
            </NavLink>
          </li>
        </ul>
        <button className="btn btn-primary w-75 mb-4">Reset</button>;
      </aside>
    );
  }
}

export default Sidebar;
