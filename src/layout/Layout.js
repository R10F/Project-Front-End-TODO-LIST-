import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

class Layout extends React.Component {
<<<<<<< HEAD
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="d-flex">
                    <Sidebar resetTask={this.props.resetTask} />
                    <Outlet />
                </div>
            </div>
        );
    }
=======
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="d-flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    );
  }
>>>>>>> 546bfa9614c4534cfa5466f019e3aeb4e1f4a547
}

export default Layout;
