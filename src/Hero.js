import keyboard from "./img/keyboard.jpg";
import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default function Hero() {
  return (
    <div>
      <section className="dark-hero">
        <div>
          <div className="hero">
            <h1 className="center glow">John Solomou</h1>
          </div>
          <div className="h-container center">
            <div>
              <h1 className="typed-text">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Red Hat Display",
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "1.5em",
                  }}
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                    "Front End Developer",
                    "React Developer",
                    "Freelancer",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                />
              </h1>
            </div>
          </div>
        </div>
        <img src={keyboard} className="hero-overlay hero-img" alt="" />
      </section>
    </div>
  );
}
