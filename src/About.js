import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import me from "./img/Me.png";
import html from "./img/html.png";
import css from "./img/css.png";
import js from "./img/js.png";
import heroku from "./img/heroku.png";
import npm from "./img/npm.png";
import node from "./img/node.png";
import firebase from "./img/firebase.png";
import expressjs from "./img/ExpressJS.png";
import jest from "./img/jest.png";
import postgresql from "./img/pg.png";
import react from "./img/react.png";
import ts from "./img/tsd.png";
import vscode from "./img/vscode.png";
import chrome from "./img/chrome.png";
import github from "./img/github.svg";
import postman from "./img/postman.png";
import terminal from "./img/terminal.png";
import sass from "./img/sass.svg";
function About() {
  return (
    <div>
      <section style={{ marginTop: "20px" }} id="about">
        <div className="container card center about-info">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src={me}
                            style={{ width: "9em", height: "9em" }}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <div>
                            <span className="title-s">Name:</span> John Solomou
                          </div>
                          <div>
                            <span className="title-s">Profile:</span> Front End
                            Web Developer
                          </div>
                          <div>
                            <span className="title-s">Email:</span>
                            solomoufam@yahoo.com
                          </div>
                          <div>
                            <span className="title-s">Phone:</span> (267)
                            220-0116
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <div className="about-me title-s">About me</div>
                      <div>
                        I am a Software engineer with ability to learn and
                        collaborate in rapidly changing environments and
                        compositions. Worked through 1000+ hours of bootcamp
                        structure, learning HTML, CSS, Sass, JavaScript,
                        Node.Js, and React.Js. Eager to tackle web
                        development/design challenges to achieve lasting impacts
                        on user experience.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="container">
                      <div className="title-box-2">
                        <h5>Skills</h5>
                      </div>
                      <div className="row tech-logo pb-5">
                        <div className="col col-md-3 mb-3">
                          <img
                            className="image"
                            src={html}
                            alt="HTML5 - Structure web pages and components"
                          />
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div
                            title="CSS3 - Control the way elements are displayed in the web browser"
                            className="tech-logo"
                          >
                            <img
                              className="image"
                              src={css}
                              alt="CSS3 - Control the way elements are displayed in the web browser"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 tech-logo mb-3">
                          <img className="image" src={js} alt="JavaScript" />
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div
                            title="Heroku - Cloud-based web hosting platform"
                            className="tech-logo"
                          >
                            <img
                              className="image"
                              src={heroku}
                              alt="Heroku - Cloud-based web hosting platform"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div
                            title="NPM - Node Package Manager"
                            className="tech-logo"
                          >
                            <img
                              className="image"
                              src={npm}
                              alt="NPM - Node Package Manager"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="NodeJS" class="tech-logo">
                            <img className="image" src={node} alt="NodeJS" />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="Firebase" class="tech-logo">
                            <img
                              className="image"
                              src={firebase}
                              alt="Firebase"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div
                            title="ExpressJS - Lightweight but powerful NodeJS-based backend server"
                            className="tech-logo"
                          >
                            <img
                              className="image"
                              src={expressjs}
                              alt="ExpressJS - Lightweight but powerful NodeJS-based backend server"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div
                            title="Jest - Test javascript code and web components"
                            className="tech-logo"
                          >
                            <img
                              className="image"
                              src={jest}
                              alt="Jest - Test javascript code and web components"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="PostgreSQL" class="tech-logo">
                            <img
                              className="image"
                              src={postgresql}
                              alt="PostgreSQL"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="ReactJS" class="tech-logo">
                            <img className="image" src={react} alt="ReactJS" />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="SASS" class="tech-logo">
                            <img className="image" src={sass} alt="SASS" />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="TypeScript" className="tech-logo">
                            <img className="image" src={ts} alt="TypeScript" />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <img
                            className="image"
                            src={vscode}
                            alt="Visual Studio Code"
                          />
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="Chrome" class="tech-logo">
                            <img className="image" src={chrome} alt="Chrome" />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="Github" class="tech-logo">
                            <a
                              href="https://github.com/JohnSolomou"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                className="image"
                                src={github}
                                alt="Github"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="Postman" class="tech-logo">
                            <img
                              className="image"
                              src={postman}
                              alt="Postman"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3">
                          <div title="Terminal" class="tech-logo">
                            <img
                              className="image"
                              src={terminal}
                              alt="Terminal"
                            />
                          </div>
                        </div>
                        <div className="col col-md-3 mb-3"></div>
                      </div>
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

export default About;
