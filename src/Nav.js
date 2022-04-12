import React from "react";

import "bootstrap/dist/css/bootstrap.css";
function Nav() {
  return (
    <div>
      <nav id="home" className="navbar navbar-expand-md navbar-dark dark-hero">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbar-collapse"
        >
          <div className="brackets">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
