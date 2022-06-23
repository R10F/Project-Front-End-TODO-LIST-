import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";
import ListItem from "./components/ListItem";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
      <div className="container-fluid">
        
        <Header />

        <div className="d-flex">
          <Sidebar />
<<<<<<< HEAD
          
          <div className="w-100 content">
=======

          <div className="w-100">
>>>>>>> cd64f6123940f2bd8979db92fe08a18186987aca
            <AddTask />

            <div className="card m-5 p-2">
              <ul className="list-group list-group-flush">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </ul>
            </div>
          </div>
        </div>
      </div>

    {/* 
      <Header /> 
      <div className="container-fluid mb-5 pb-5 d-flex flex-column">
        <div className="row">
          <Sidebar />

          <div className="col-10 flex-grow-1">
            w-100
            <AddTask />

            <div className="card m-4 p-2">
              <ul className="list-group list-group-flush">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
    */}
      </>
    );
  }
}

export default App;
