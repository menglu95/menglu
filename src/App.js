import React, { Component } from "react";
import MainContent from "./components/MainContent";
import RightSide from "./components/RightSide";
import Option from "./components/Option";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul
          className="cb-slideshow"
          id="cb_slideshow"
          style={{ display: "none" }}
        >
          <li>
            <span>Image 01</span>
            <div></div>
          </li>
          <li>
            <span>Image 02</span>
            <div></div>
          </li>
          <li>
            <span>Image 03</span>
            <div></div>
          </li>
          <li>
            <span>Image 04</span>
            <div></div>
          </li>
          <li>
            <span>Image 05</span>
            <div></div>
          </li>
          <li>
            <span>Image 06</span>
            <div></div>
          </li>
        </ul>
        <div className="wrapper">
          <div className="tab-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <RightSide />
                    <MainContent />
                    <Option />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
