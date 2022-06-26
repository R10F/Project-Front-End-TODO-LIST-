import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

class Layout extends React.Component {
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
}

export default Layout;
