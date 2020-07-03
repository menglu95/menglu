import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div id="resume" className="content_2">
        <h1 className="h-bloc">Resume</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="title_content" style={{ float: "none" }}>
              <div className="text_content">Front-End Skills</div>
              <div className="clear"></div>
            </div>

            <div className="skills">
              <div className="skillbar clearfix" data-percent="85%">
                <div className="skillbar-title">
                  <span>ReactJS</span>
                </div>
                <div className="skillbar-bar" style={{ width: "85%" }}></div>
                <div className="skill-bar-percent">85%</div>
              </div>
              <div className="skillbar clearfix" data-percent="75%">
                <div className="skillbar-title">
                  <span>Angular</span>
                </div>
                <div className="skillbar-bar" style={{ width: "75%" }}></div>
                <div className="skill-bar-percent">75%</div>
              </div>
              <div className="skillbar clearfix" data-percent="60%">
                <div className="skillbar-title">
                  <span>Vue.js</span>
                </div>
                <div className="skillbar-bar" style={{ width: "60%" }}></div>
                <div className="skill-bar-percent">60%</div>
              </div>
              <div className="skillbar clearfix" data-percent="80%">
                <div className="skillbar-title">
                  <span>gatsby.js</span>
                </div>
                <div className="skillbar-bar" style={{ width: "80%" }}></div>
                <div className="skill-bar-percent">80%</div>
              </div>
              <div className="skillbar clearfix" data-percent="85%">
                <div className="skillbar-title">
                  <span>Javascript</span>
                </div>
                <div className="skillbar-bar" style={{ width: "85%" }}></div>
                <div className="skill-bar-percent">85%</div>
              </div>
              <div className="skillbar clearfix" data-percent="95%">
                <div className="skillbar-title">
                  <span>HTML</span>
                </div>
                <div className="skillbar-bar" style={{ width: "95%" }}></div>
                <div className="skill-bar-percent">95%</div>
              </div>
              <div className="skillbar clearfix" data-percent="93%">
                <div className="skillbar-title">
                  <span>CSS3</span>
                </div>
                <div className="skillbar-bar" style={{ width: "93%" }}></div>
                <div className="skill-bar-percent">93%</div>
              </div>
            </div>
            <div className="title_content" style={{ float: "none" }}>
              <div className="text_content">Back-End skills</div>
              <div className="clear"></div>
            </div>

            <div className="skills">
              <div className="skillbar clearfix" data-percent="68%">
                <div className="skillbar-title">
                  <span>Python</span>
                </div>
                <div className="skillbar-bar" style={{ width: "68%" }}></div>
                <div className="skill-bar-percent">68%</div>
              </div>
              <div className="skillbar clearfix" data-percent="75%">
                <div className="skillbar-title">
                  <span>PHP</span>
                </div>
                <div className="skillbar-bar" style={{ width: "75%" }}></div>
                <div className="skill-bar-percent">75%</div>
              </div>
              <div className="skillbar clearfix" data-percent="65%">
                <div className="skillbar-title">
                  <span>Laravel</span>
                </div>
                <div className="skillbar-bar" style={{ width: "65%" }}></div>
                <div className="skill-bar-percent">65%</div>
              </div>
              <div className="skillbar clearfix" data-percent="55%">
                <div className="skillbar-title">
                  <span>CodeIgniter</span>
                </div>
                <div className="skillbar-bar" style={{ width: "55%" }}></div>
                <div className="skill-bar-percent">55%</div>
              </div>
            </div>
            <div className="title_content" style={{ float: "none" }}>
              <div className="text_content">Language Skills</div>
              <div className="clear"></div>
            </div>

            <div className="skills">
              <div className="skillbar clearfix" data-percent="100%">
                <div className="skillbar-title">
                  <span>Chinese</span>
                </div>
                <div className="skillbar-bar" style={{ width: "100%" }}></div>
                <div className="skill-bar-percent">100%</div>
              </div>
              <div className="skillbar clearfix " data-percent="85%">
                <div className="skillbar-title">
                  <span>English</span>
                </div>
                <div className="skillbar-bar" style={{ width: "85%" }}></div>
                <div className="skill-bar-percent">85%</div>
              </div>
              <div className="skillbar clearfix " data-percent="75%">
                <div className="skillbar-title">
                  <span>French</span>
                </div>
                <div className="skillbar-bar" style={{ width: "75%" }}></div>
                <div className="skill-bar-percent">75%</div>
              </div>
              <div className="skillbar clearfix " data-percent="60%">
                <div className="skillbar-title">
                  <span>Japanese</span>
                </div>
                <div className="skillbar-bar" style={{ width: "65%" }}></div>
                <div className="skill-bar-percent">65%</div>
              </div>
            </div>
            <div className="title_content" style={{ float: "none" }}>
              <div className="text_content">My Resume</div>
              <div className="clear"></div>
            </div>
            <a
              className="download"
              style={{ margin: "0", float: "left" }}
              href="#"
              id="download_resume"
            >
              <span data-hover="Download My Resume">
                <i className="glyphicon glyphicon-download-alt"></i> Download My
                Resume
              </span>
            </a>
          </div>
          <div className="col-md-6 resume-left">
            <div className="title_content" style={{ marginBottom: "5px" }}>
              <div className="text_content">Work Experiences</div>
              <div className="clear"></div>
            </div>
            <ul className="attributes">
              <li className="first">
                <h5>
                  Senior Web Developer{" "}
                  <span className="duration">
                    <i className="glyphicon glyphicon-calendar"></i> 09/2019 -
                    present
                  </span>
                </h5>
                <h6>
                  <span className="fa fa-desktop"></span>{" "}
                  石化盈科信息技术有限责任公司
                </h6>
                <p>
                  {" "}
                  I was Developing dynamic, interactive data visualizations web
                  Front-End using React, Redux, Angular and gatsby.js.
                </p>
              </li>
              <li>
                <h5>
                  Front-End Developer{" "}
                  <span className="duration">
                    <i className="glyphicon glyphicon-calendar"></i> 02/2018 -
                    09/2019
                  </span>
                </h5>
                <h6>
                  <span className="fa fa-rss"></span> eFarmer B.V.
                </h6>
                <p>
                  {" "}
                  I was hired by this company and completed many tasks and
                  several web sites, so that I learned popular frameworks and
                  language to become an Expert Front-End Developer during that
                  time.
                </p>
              </li>

              <li>
                <h5>
                  Front-End Developer{" "}
                  <span className="duration">
                    <i className="glyphicon glyphicon-calendar"></i> 02/2018 -
                    09/2019
                  </span>
                </h5>
                <h6>
                  <span className="fa fa-bar-chart-o"></span> Dinamicka
                  Development
                </h6>
                <p>
                  {" "}
                  I developed several sites with other teams, so I learned the
                  ability to collaborate with other teams.
                </p>
              </li>

              <li>
                <h5>
                  Software Developer{" "}
                  <span className="duration">
                    <i className="glyphicon glyphicon-calendar"></i> 02/2016 -
                    05/2017
                  </span>
                </h5>
                <h6>
                  <span className="fa fa-th-large"></span> SoftServe
                </h6>
                <p>
                  {" "}
                  I was internship at SoftServe. While that time, I learned the
                  basic program languages and the basic knowledge to become a
                  Software Developer.
                </p>
              </li>
            </ul>
            <br />
            <div className="title_content">
              <div className="text_content">Education</div>
              <div className="clear"></div>
            </div>
            <ul className="attributes">
              <li className="first">
                <h5>
                  Master of Engineering{" "}
                  <span className="duration">
                    <i className="glyphicon glyphicon-calendar"></i> 2016 - 2019
                  </span>
                </h5>
                <h6>
                  <span className="fas fa-graduation-cap"></span>{" "}
                  南京信息工程大学
                </h6>
                <p>Computer Programming, Specific Applications</p>
              </li>
            </ul>
            <br />
          </div>
        </div>

        <div style={{ clear: "both" }}></div>
      </div>
    );
  }
}

export default Resume;
