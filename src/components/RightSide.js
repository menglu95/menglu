import React, { Component } from "react";

class RightSide extends Component {
  render() {
    return (
      <div className="col-md-3 widget-profil">
        <div className="row">
          {/* right_side_header_img */}
          <div className="col-lg-12 col-md-12 col-sm-3 col-xs-12 ">
            <div
              className="image-holder one"
              id="pic_prof_1"
              style={{ display: "block" }}
            >
              <img
                className="head-image up circle"
                src="images/img/up.png"
                width="150"
                height="150"
                alt=""
              />
            </div>
            <div
              className="circle-img"
              id="pic_prof_2"
              style={{ display: "none" }}
            ></div>
          </div>
          {/* right_side_content */}
          <div className="col-lg-12 col-md-12 col-sm-9 col-xs-12">
            <div id="profile_info">
              <h1 id="name" className="transition-02">
                Meng Lu
              </h1>
              <h4
                className="line"
                style={{ color: "#7deb7d", fontWeight: "bold" }}
              >
                Front-End Web Developer
              </h4>
              <h6>
                <span className="glyphicon glyphicon-map-marker"></span>{" "}
                Shenyang, Liaoning, China
              </h6>
            </div>
            <div id="profile_desc">
              <p>
                Expert at React.js, Angular, Javascript, Vue.js, Python, etc.{" "}
                <br />
                Always learn NEW Skills and do everything passionately.
                <br />
                Customer's SMILE is My Happy!
              </p>
            </div>
            <div id="profile_social">
              <h6>My Social Profiles</h6>

              <a
                href="https://www.linkedin.com/in/meng-lu-8495451a9"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/LuMeng9" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSide;
