import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tanggal: new Date() };
    this.label = [["Add Todo"], ["Low Priority"], ["High Priority"]];
  }

  render() {
    let allLabel = this.label.map((labels) => {
      return (
        <div className="form-check form-check-inline ">
          <input class="form-check-input " type="radio" name="filter" />
          <label class="form-check-label" for="flexRadioDefault1">
            {labels}
          </label>
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <header>
          <h1>
            TODO LIST <span>{this.state.Tanggal.toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric" })} &nbsp;</span>
          </h1>
        </header>

        <form>
          <div className="input-group">
            <input type="text" className="form-control border-primary border-3 " placeholder="Enter New Todo" />
            <button className="btn btn-primary input-group-text" type="button">
              Add Todo
            </button>
          </div>

          {allLabel}
        </form>
      </div>
    );
  }
}

export default App;
