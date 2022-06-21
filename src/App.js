import "./App.css";
import React from "react";
import { SiAddthis } from "react-icons/si";

class App extends React.Component {
  render() {
    return (
      <div className="container-xxl">
        <h1 className="text-center">TODO LIST</h1>

        <form>
          <div className="mt-5 mb-3">
            <input type="text" className="form-control border-primary border-3" />
          </div>

          <div className="form-check form-check-inline">
            <input class="form-check-input" type="radio" />
            <label class="form-check-label" for="flexRadioDefault1">
              Low
            </label>
          </div>

          <div className="form-check form-check-inline ">
            <input class="form-check-input" type="radio" />
            <label class="form-check-label" for="flexRadioDefault1">
              Medium
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input class="form-check-input" type="radio" />
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
