import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tanggal: new Date() };
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="bg-info">
          <h1>
            TODO LIST <span>{this.state.Tanggal.to()} </span>
          </h1>
        </header>

        <form>
          <div className="input-group">
            <input type="text" className="form-control border-primary border-3 " placeholder="Enter New Todo" />
            <button className="btn btn-primary input-group-text" type="button">
              Add Todo
            </button>
          </div>

          <div className="form-check form-check-inline ">
            <input class="form-check-input " type="radio" name="filter" />
            <label class="form-check-label" for="flexRadioDefault1">
              Low Priority
            </label>
          </div>

          <div className="form-check form-check-inline ">
            <input class="form-check-input" type="radio" name="filter" />
            <label class="form-check-label" for="flexRadioDefault1">
              Medium Priority
            </label>
          </div>

          <div className="form-check form-check-inline ">
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
