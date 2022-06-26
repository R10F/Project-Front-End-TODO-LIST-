import "./App.css";
import Layout from "./layout/Layout";
import Tasks from "./components/Tasks";
import React from "react";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element={ <Tasks filter={"All"}/> }/>
          <Route path="in-progress" element={ < Tasks filter={"InProgress"}/> } />
          <Route path="completed" element={ <Tasks filter={"Completed"} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
