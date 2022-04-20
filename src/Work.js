// import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ToDo from "./img/ToDo.png";
import bh from "./img/bh.png";
import Quizzzy from "./img/Quizzzy.png";
import ModalRoot from "./modals/components/ModalRoot";
import ModalService from "./modals/Services/ModalService";
import QuizzzyModal from "./components/QuizzzyModal";
import BHRecipeModal from "./components/BHRecipeModal";
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

  return (
    <div id="work">
      <div className="container">
        <div className="row center justify-content-around">
          <h1>My Work</h1>

          <ModalRoot />
          <button onClick={addModal} className="btn  m-4 col">
            <img src={Quizzzy} alt="" style={{ width: "15rem" }} />
          </button>

          <button onClick={addModal2} className="btn  m-4 col">
            <img src={bh} alt="" style={{ width: "15rem" }} />
          </button>

          <button onClick={addModal3} className="btn  m-4 col">
            <img src={ToDo} alt="" style={{ width: "15rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
