// import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ToDo from "./img/ToDo.png";
import bh from "./img/bh.png";
import quiz2 from "./img/quiz2.jpg";
import Quizzzy from "./img/Quizzzy.png";
import ModalRoot from "./modals/components/ModalRoot";
import ModalService from "./modals/Services/ModalService";
import QuizzzyModal from "./components/QuizzzyModal";
import BHRecipeModal from "./components/BHRecipeModal";
import ReactQuizModal from "./components/ReactQuizModal";
import ToDoModal from "./components/ToDoModal";

function Work() {
  const addModal = () => {
    ModalService.open(QuizzzyModal);
  };
  const addModal2 = () => {
    ModalService.open(BHRecipeModal);
  };
  const addModal3 = () => {
    ModalService.open(ToDoModal);
  };

  const addModal4 = () => {
    ModalService.open(ReactQuizModal);
  };
  return (
    <div id="work">
      <div className="container">
        <div className="row center justify-content-around">
          <h1>My Work</h1>
          <ModalRoot />{" "}
          <div className="inner col">
            <button onClick={addModal} className="btn inner  m-4 ">
              <img src={Quizzzy} alt="" style={{ width: "15rem" }} />
            </button>
          </div>
          <div className="inner col">
            <button onClick={addModal2} className="btn  m-4 ">
              <img src={bh} alt="" style={{ width: "15rem" }} />
            </button>
          </div>
          <div className="inner col">
            <button onClick={addModal3} className="btn  m-4 ">
              <img src={ToDo} alt="" style={{ width: "15rem" }} />
            </button>
          </div>
          <div className="inner col">
            <button onClick={addModal4} className="btn  m-4 ">
              <img src={quiz2} alt="" style={{ width: "15rem" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
