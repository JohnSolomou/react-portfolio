import React from "react";
import ToDo from "../img/ToDo.png";
import github from "../img/GitHub-Mark-32px.png";
function Todomodal(open, onClose) {
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
          <img className="m-img" src={ToDo} alt="goes to todo website" />
        </a>
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            X
          </p>
          <div className="content">
            Created To Do app using React, firebase database and authentication.
          </div>
          <a href=" https://github.com/JohnSolomou/capstone-3-todo-app">
            <img className="btn btn-outline-light btn-floating" src={github} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Todomodal;
