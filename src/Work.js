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
import { Card, Button } from "react-bootstrap";

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
    <div className="work">
      <div className="container ">
        <div className="row center align-items-center pad justify-content-between">
          <h2 id="work" className="pad mywork mt-5">
            My Work
          </h2>
          <ModalRoot />{" "}
          <Card className="work-img" style={{ width: "18rem", padding: "0px" }}>
            <Card.Img variant="top" src={Quizzzy} className="img-fluid" />
            <Card.Body className="container">
              <Card.Title style={{ color: "black" }}>Quizzzy</Card.Title>

              <div className="row">
                <Button className="col" variant="primary">
                  <a
                    href="https://mighty-retreat-41731.herokuapp.com/index.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Go to website
                  </a>
                </Button>{" "}
                <Button
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: 50,
                  }}
                  className=" justify-align-content-between"
                  onClick={addModal}
                  variant="primary"
                >
                  +
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="work-img" style={{ width: "18rem", padding: "0px" }}>
            <Card.Img variant="top" src={bh} className="img-fluid" />
            <Card.Body className="container">
              <Card.Title style={{ color: "black" }}>BHRecipe</Card.Title>

              <div className="row">
                <Button className="col" variant="primary">
                  <a
                    href="https://bhrecipe.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Go to website
                  </a>
                </Button>{" "}
                <Button
                  className=""
                  onClick={addModal2}
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: 50,
                  }}
                  variant="primary"
                >
                  +
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="work-img" style={{ width: "18rem", padding: "0px" }}>
            <Card.Img variant="top" src={ToDo} className="img-fluid" />
            <Card.Body className="container">
              <Card.Title style={{ color: "black" }}>BHRecipe</Card.Title>

              <div className="row">
                <Button className="col" variant="primary">
                  <a
                    href="https://auth-fb-ar.firebaseapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Go to website
                  </a>
                </Button>{" "}
                <Button
                  className=""
                  onClick={addModal3}
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: 50,
                  }}
                  variant="primary"
                >
                  +
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="work-img" style={{ width: "18rem", padding: "0px" }}>
            <Card.Img
              style={{ maxHeight: 131 }}
              variant="top"
              src={quiz2}
              className="img-fluid"
            />
            <Card.Body className="container">
              <Card.Title style={{ color: "black" }}>BHRecipe</Card.Title>

              <div className="row">
                <Button className="col" variant="primary">
                  <a
                    href="https://quizzzy-45030.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Go to website
                  </a>
                </Button>{" "}
                <Button
                  className=""
                  onClick={addModal4}
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: 50,
                  }}
                  variant="primary"
                >
                  +
                </Button>
              </div>
            </Card.Body>
          </Card>
          {/* <div className="inner col">
            <div onClick={addModal} className="btn inner  m-4 "></div>
          </div> */}
          {/* <div className="inner col">
            <div onClick={addModal2} className="btn  m-4 ">
              <img src={bh} alt="" style={{ width: "10rem" }} />
            </div>
          </div> */}
          {/* <div className="inner col">
            <div onClick={addModal3} className="btn  m-4 ">
              <img src={ToDo} alt="" style={{ width: "10rem" }} />
            </div> */}
          {/* </div> */}
          {/* <div className="inner col">
            <div onClick={addModal4} className="btn  m-4 ">
              <img src={quiz2} alt="" style={{ width: "10rem" }} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Work;
