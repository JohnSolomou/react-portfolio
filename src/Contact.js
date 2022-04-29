import React, { useState } from "react";
import axios from "axios";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    setSent(true);
    try {
      await axios.post("http://localhost:4000/send_mail", {
        name,
        email,
        subject,
        message,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pad dark-hero">
      <h2 id="contact" className="center dark-hero pad ">
        Contact
      </h2>

      <section className="dark-contact ">
        <div class="container ">
          <div class="row ">
            <div class="col-sm-12">
              <div class="contact-mf">
                <div id="contact" class="box-shadow-full">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="title-box-2">
                        <h5 class="title-left"> Send Me a Message</h5>
                      </div>
                      <div>
                        {!sent ? (
                          <form onSubmit={handleSend}>
                            <div class="row">
                              <div class="col-md-12 mb-3">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />{" "}
                                </div>
                              </div>
                              <div class="col-md-12 mb-3">
                                <div class="form-group">
                                  <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div class="col-md-12 mb-3">
                                <div class="form-group">
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required=""
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="form-group">
                                  <textarea
                                    class="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required=""
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                  ></textarea>
                                </div>
                              </div>
                              {/* <div class="col-md-12 text-center my-3">
                              <div class="loading">Loading</div>
                              <div class="error-message"></div>
                              <div class="sent-message">
                                Your message has been sent. Thank you!
                              </div>
                            </div> */}
                              <div class="col-md-12 text-center">
                                <button
                                  type="submit"
                                  class="button button-a button-big button-rouded"
                                >
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        ) : (
                          <h1 variant="success">Email Sent</h1>
                        )}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="title-box-2 pt-4 pt-md-0">
                        <h5 class="title-left"> Get in Touch</h5>
                      </div>
                      <div class="more-info">
                        <p class="lead">
                          {" "}
                          If you would like to contact me please send me a
                          message or email me.
                        </p>
                        <ul class="list-ico">
                          {/* <li>
                            <span class="bi bi-geo-alt"></span> John Solomou
                          </li> */}
                          {/* <li>
                            <span class="bi bi-phone"></span> 
                          </li> */}
                          <li>
                            <span class="bi bi-envelope"></span>{" "}
                            jsolomou79@gmail.com
                          </li>
                        </ul>
                      </div>
                      {/* <div class="socials">
                        <ul>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span class="ico-circle">
                                <i class="bi bi-linkedin"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
