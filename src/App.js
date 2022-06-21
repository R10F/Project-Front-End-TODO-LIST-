import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">TODO LIST</h1>

        <form className="">
          <div className="mt-5 mb-3 input-group">
            <input type="text" className="form-control border-primary border-3 " placeholder="Enter New Todo" />
            <button className="btn btn-primary input-group-text" type="button" onClick={this.klik}>
              Add Todo
            </button>
          </div>

          <div className="form-check form-check-inline">
            <input class="form-check-input " type="radio" name="filter" />
            <label class="form-check-label" for="flexRadioDefault1">
              Low
            </label>
          </div>

          <div className="form-check form-check-inline ">
            <input class="form-check-input" type="radio" name="filter" />
            <label class="form-check-label" for="flexRadioDefault1">
              Medium
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="filter" />
            <label class="form-check-label" for="flexRadioDefault1">
              High Priority
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
