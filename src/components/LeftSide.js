import React, { Component } from "react";

class LeftSide extends Component {
  render() {
    return (
      <ul className="resp-tabs-list">
        <li
          className="tabs-profile hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a profile"
          data-tab-name="profile"
        >
          <span className="tite-list">profile</span>
          <i className="glyphicon glyphicon-user icon_menu icon_menu_active"></i>
        </li>

        <li
          className="tabs-resume hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a"
          data-tab-name="resume"
        >
          <span className="tite-list">resume</span>
          <i className="glyphicon glyphicon-tasks icon_menu"></i>
        </li>

        <li
          className="tabs-portfolio hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a"
          data-tab-name="portfolio"
        >
          <span className="tite-list">portfolio</span>
          <i className="glyphicon glyphicon-briefcase icon_menu"></i>
        </li>

        <li
          className="tabs-contact hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a"
          data-tab-name="contact"
          style={{ marginBottom: "48px !important" }}
        >
          <span className="tite-list">contact</span>
          <i className="glyphicon glyphicon-envelope icon_menu"></i>
        </li>
      </ul>
    );
  }
}

export default LeftSide;
