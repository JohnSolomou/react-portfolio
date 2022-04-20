import React from "react";
import Quiz from "../img/Quizzzy.png";
import github from "../img/GitHub-Mark-32px.png";
function Quizmodal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <a href=" https://myquizzzyapp.herokuapp.com/">
          <img className="m-img" src={Quiz} alt="goes to Quizzzy.com" />
        </a>
        <div className="modalRight">
          <button onClick={onClose} className="closeBtn">
            X
          </button>
          <div className="content">
            Created a Quiz app. This is an application for teachers to add a
            quiz for students to take using HTML, CSS, Javascript, svg, and
            local storage.
          </div>
          <a href="https://github.com/JohnSolomou/quizzzy">
            <img className="btn btn-outline-light btn-floating" src={github} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Quizmodal;
