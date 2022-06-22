import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";
import ListItem from "./components/ListItem";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid mb-5 pb-5">
        <Header />

        <div className="d-flex">
          <Sidebar />

          <div className="w-100">
            <AddTask />

            <div className="card m-3 p-2">
              <ul className="list-group list-group-flush">
                <ListItem />
                <ListItem />
                <ListItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
