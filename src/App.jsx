import "./App.css";
import ListItem from "./components/ListItem";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="card m-3 p-2">
        <ul className="list-group list-group-flush">
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default App;
