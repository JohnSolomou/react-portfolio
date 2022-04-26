import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">Send me a message</h5>
                  </div>
                  <div>
                    <form action="" method="post">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              class="form-control"
                              id="name"
                              placeholder="Your Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-12 ">
                          <div className="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-md-12 text-center my-3"></div>
                        <div className="col-md-12 text-center"></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 title-left>Get In Touch </h5>
                  </div>
                </div>
                <div className="more-info">
                  <p></p>
                </div>
                <div className="socials">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
