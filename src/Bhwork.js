import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import bh from "./img/bh.png";
import Bhmodal from "./modals/Bhmodal";

function Bhwork() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div id="work">
      <div className="container">
        <div className="row center justify-content-around">
          <div style={{ MaxwWidth: "15rem" }} className=" col">
            <img
              src={bh}
              alt=""
              style={{ width: "15rem" }}
              onClick={() => setOpenModal(true)}
            />
            <Bhmodal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bhwork;
