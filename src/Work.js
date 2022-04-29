import React from "react";
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
import { Card } from "react-bootstrap";

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
    <div className="work ">
      <div className="container pad">
        <h2 id="work" className="pad mywork center mt-5">
          My Work
        </h2>
        <div className=" align-items-center  pad justify-content-between ">
          <ModalRoot />

          <Card
            className="work-img img-zoom-container  "
            style={{ width: "18rem", padding: "0px" }}
          >
            <a
              href="https://mighty-retreat-41731.herokuapp.com/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <Card.Img variant="top" src={Quizzzy} className="img-fluid" />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>Quizzzy</Card.Title>

              <div>
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{
                        color: "blue",
                        cursor: "pointer",
                      }}
                      onClick={addModal}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            className="work-img img-zoom-container"
            style={{ width: "18rem", padding: "0px" }}
          >
            <a
              href="https://bhrecipe.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img variant="top" src={bh} className="img-fluid" />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>BHRecipe</Card.Title>

              <div>
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={addModal2}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="work-img img-zoom-container"
            style={{ width: "18rem", padding: "0px" }}
          >
            <a
              href="https://auth-fb-ar.firebaseapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img variant="top" src={ToDo} className="img-fluid" />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>To Do</Card.Title>

              <div>
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={addModal3}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="work-img img-zoom-container"
            style={{ width: "18rem", padding: "0px" }}
          >
            <a
              href="https://quizzzy-45030.web.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Card.Img
                style={{ maxHeight: 131 }}
                variant="top"
                src={quiz2}
                className="img-fluid"
              />
            </a>
            <Card.Body className="container center">
              <Card.Title style={{ color: "black" }}>React Quizzzy</Card.Title>

              <div className=" col">
                <div className="work-button">
                  <div className="icon">
                    <div
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={addModal4}
                    >
                      +
                    </div>
                  </div>
                </div>
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
