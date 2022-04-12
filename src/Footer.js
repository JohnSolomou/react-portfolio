import React from "react";
import li from "./img/li-in.png";
import github from "./img/GitHub-Mark-32px.png";
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        {/* Grid container  */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              role="button"
            >
              <img src={li} style={{ width: "2em", height: "2em" }} alt="" />
            </a>

            {/* <!-- Github --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/JohnSolomou"
              role="button"
            >
              <img src={github} />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#home"
              role="button"
            >
              <i className="fa-solid fa-arrow-turn-up fa-beat">Back to top</i>
            </a>
            <i className="fa-solid fa-arrow-turn-up fa-beat"></i>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}

export default Footer;
