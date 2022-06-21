import "./App.css";
import React, { Fragment } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Tanggal: new Date() };
  }

  render() {
    return (
      <div className="container-fluid">
        <header>
          <h1>
            TODO LIST <span>{this.state.Tanggal.toLocaleString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
          </h1>
        </header>

        <Fragment>
          <aside>
            <div className="form-check  ">
              <input class="form-check-input " type="radio" name="filter" />
              <label class="form-check-label" for="flexRadioDefault1">
                hai
              </label>
            </div>
            <div className="form-check  ">
              <input class="form-check-input " type="radio" name="filter" />
              <label class="form-check-label" for="flexRadioDefault1">
                hai
              </label>
            </div>
            <div className="form-check  ">
              <input class="form-check-input " type="radio" name="filter" />
              <label class="form-check-label" for="flexRadioDefault1">
                hai
              </label>
            </div>
          </aside>
        </Fragment>

        <Fragment>
          <form>
            <div className="input-group">
              <input type="text" className="form-control border-primary border-3 " placeholder="Enter New Todo" />
              <button className="btn btn-primary input-group-text" type="button">
                Add Todo
              </button>
            </div>

            <div className="form-check form-check-inline ">
              <input class="form-check-input " type="radio" name="filter" defaultChecked />
              <label class="form-check-label" for="flexRadioDefault1">
                Low Priority
              </label>
            </div>
            <div className="form-check form-check-inline ">
              <input class="form-check-input " type="radio" name="filter" />
              <label class="form-check-label" for="flexRadioDefault1">
                Medium Priority
              </label>
            </div>
            <div className="form-check form-check-inline ">
              <input class="form-check-input " type="radio" name="filter" />
              <label class="form-check-label" for="flexRadioDefault1">
                High Priority
              </label>
            </div>
          </form>
        </Fragment>
      </div>
    );
  }
}

export default App;
