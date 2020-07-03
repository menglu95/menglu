import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="content_2">
        <h1 className="h-bloc">Contact Me</h1>

        <div className="row">
          <div className="col-lg-12">
            <iframe
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33680.5066035122!2d123.45656283076981!3d41.74286232540076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e2f86a7df3caaa1%3A0xe674accb59f5d4e7!2sHun%20He%20Pu%20Jie%2C%20Hunnan%20Qu%2C%20Shenyang%20Shi%2C%20Liaoning%20Sheng%2C%20China!5e0!3m2!1sen!2suk!4v1582253588044!5m2!1sen!2suk"
              height="350"
              style={{ border: "0" }}
              allowfullscreen=""
            ></iframe>
          </div>

          <div className="col-lg-12">
            <div className="row" id="contact-user">
              <div className="col-md-5">
                <div className="contact-info">
                  <div className="title_content" style={{ float: "none" }}>
                    <div className="text_content">Contact info</div>
                    <div className="clear"></div>
                  </div>

                  <ul>
                    <li>
                      <span className="span-info">
                        <i className="glyphicon glyphicon-map-marker"></i>{" "}
                        Adress:
                      </span>{" "}
                      Shenyang, Liaoning, China.
                      <br />
                      <br />
                    </li>
                    <li>
                      <span className="span-info">
                        <i className="glyphicon glyphicon-envelope"></i> Email:
                      </span>{" "}
                      LuMeng9@outlook.com
                    </li>
                    <li>
                      <span className="span-info">
                        <i className="glyphicon glyphicon-send"></i> Skype:
                      </span>{" "}
                      live:.cid.ab0b069e00996d02
                    </li>
                  </ul>
                </div>
                <div className="clear"></div>

                <div
                  className="title_content tiltle_contacts"
                  style={{ float: "none" }}
                >
                  <div className="text_content">Follow me</div>
                  <div className="clear"></div>
                </div>

                <div id="profile_social_follow">
                  <a
                    href="https://www.linkedin.com/in/meng-lu-8495451a9/"
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

              <div className="col-md-7">
                <div className="title_content" style={{ float: "none" }}>
                  <div className="text_content">Hire me</div>
                  <div className="clear"></div>
                </div>

                <div className="contact-form">
                  <a
                    href="mailto:LuMeng9@outlook.com"
                    className="pull-left btn btn-group-xs btn-primary"
                  >
                    <li
                      className="fas fa-handshake"
                      style={{ fontSize: "-webkit-xxx-large" }}
                    ></li>
                    &nbsp;&nbsp; Hire Me &nbsp;&nbsp;
                    <i
                      className="glyphicon glyphicon-send"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
