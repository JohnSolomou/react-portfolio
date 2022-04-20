import React from "react";
import bh from "../img/bh.png";
import github from "../img/GitHub-Mark-32px.png";
function Bhmodal(open, onClose) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <a href="https://auth-fb-ar.web.app/">
          <img className="m-img" src={bh} alt="goes to todo website" />
        </a>
        <div className="modalRight">
          <button onClick={onClose} className="closeBtn">
            X
          </button>
          <div className="content">
            Created To Do app using React, firebase database and authentication.
          </div>
          <div>
            <a href=" https://github.com/JohnSolomou/capstone-3-todo-app">
              <img
                className="btn btn-outline-light btn-floating"
                src={github}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bhmodal;
