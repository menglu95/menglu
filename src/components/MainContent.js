import React, { Component } from "react";
import Profile from "./Profile";
import LeftSide from "./LeftSide";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="col-md-9 flexy_content"
        style={{ paddingLeft: "0", paddingRight: "0" }}
      >
        <div id="verticalTab">
          <LeftSide />

          <div className="resp-tabs-container">
            <Profile />
            <Resume />
            <Portfolio />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
