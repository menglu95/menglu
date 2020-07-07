import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div id="profile" className="content_2">
        <h1 className="h-bloc">About Me</h1>

        <div className="row top-p">
          <div className="col-md-6 profile-l">
            <div className="title_content">
              <div className="text_content">meng lu</div>
              <div className="clear"></div>
            </div>

            <ul className="about">
              <li>
                <i className="glyphicon glyphicon-user"></i>
                <label>Name</label>
                <span className="value">Meng Lu</span>
                <div className="clear"></div>
              </li>

              <li>
                <i className="glyphicon glyphicon-calendar"></i>
                <label>Birthday</label>
                <span className="value">Jan 20, 1995</span>
                <div className="clear"></div>
              </li>

              <li>
                <i className="glyphicon glyphicon-map-marker"></i>
                <label>Adress</label>
                <span className="value">Shenyang, Liaoning, China</span>
                <div className="clear"></div>
              </li>

              <li>
                <i className="glyphicon glyphicon-envelope"></i>
                <label>Email</label>
                <span className="value">LuMeng9@outlook.com</span>
                <div className="clear"></div>
              </li>

              <li>
                <i className="glyphicon glyphicon-send"></i>
                <label>Skype</label>
                <span className="value">live:.cid.ab0b069e00996d02</span>
                <div className="clear"></div>
              </li>
            </ul>

            <p style={{ marginBottom: "20px" }}>
              <i className="fa fa-quote-left"></i>I have experienced web
              development for 5+ years. I worked my way through university so
              that I was hired for several companies and I completed many tasks
              and several web projects. I worked remotely and collaborated with
              several developers in those companies. I learned popular web
              frameworks and languages such as Wordpress, Node.js, Express.js,
              Python, Django, Angular.js, Angular 2+ and React framework, etc.
            </p>
          </div>

          <div className="col-md-6 profile-r">
            <div className="cycle-slideshow">
              <img src="images/img-profile/about_1.jpg" alt="" />
              <img src="images/img-profile/about_2.png" alt="" />
              <img src="images/img-profile/about_3.png" alt="" />
            </div>
          </div>
        </div>

        <div className="row col-md-12" id="provider">
          <p style={{ marginBottom: "20px" }}>
            <i className="fa fa-quote-left"></i>
            I can provide:
            <br />
            &nbsp;&nbsp;- Frontend development
            <br />
            &nbsp;&nbsp;- Full-time work for 5 days per week
            <br />
            &nbsp;&nbsp;- Suggest new ideas and apply the latest technologies
            <br />
            &nbsp;&nbsp;- Real-time communication
            <br />
            &nbsp;&nbsp;- Lead development
            <br />
          </p>
        </div>

        <div className="clear"></div>
        <div className="row" id="services">
          <div className="col-md-12">
            <div className="title_content">
              <div className="text_content">My Services</div>
              <div className="clear"></div>
            </div>

            <div className="col-md-4 pack-service">
              <div className="service">
                <div className="service-icon">
                  <i
                    className="fab fa-react"
                    style={{ fontSize: "-webkit-xxx-large" }}
                  ></i>
                </div>
                <div className="service-detail">
                  <h6>ReactJS Development</h6>
                  <p>
                    I can make a magical and fast site with ReactJS tech.
                    <br />
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pack-service">
              <div className="service">
                <div className="service-icon">
                  <i
                    className="fab fa-angular"
                    style={{ fontSize: "-webkit-xxx-large" }}
                  ></i>
                </div>
                <div className="service-detail">
                  <h6>Angular Development</h6>
                  <p>I can make a beautiful site with Angular Material.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pack-service">
              <div className="service">
                <div className="service-icon">
                  <i className="far fa-paper-plane"></i>
                </div>
                <div className="service-detail">
                  <h6>Fast Delivery</h6>
                  <p>
                    I deliver your business as fast as possible.
                    <br />
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clear"></div>
      </div>
    );
  }
}

export default Profile;
