import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";
import ToDo from "./img/ToDo.png";
import bh from "./img/bh.png";
import Quizzzy from "./img/Quizzzy.png";
import github from "./img/GitHub-Mark-32px.png";
function Work() {
  return (
    <div>
      <div className="container">
        <div className="row center justify-content-around">
          <Card classname="" style={{ width: "18rem" }}>
            <a href=" https://myquizzzyapp.herokuapp.com/">
              <Card.Img variant="top" src={Quizzzy} />
            </a>
            <Card.Body>
              <Card.Title>Quizzzy</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={bh} />
            <Card.Body>
              <Card.Title>To Do App</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ToDo} />
            <Card.Body>
              <Card.Title>To Do App</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Work;
