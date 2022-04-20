import "./App.css";
import Hero from "./Hero";
import React from "react";
import Nav from "./Nav";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";
import ModalRoot from "./modals/components/ModalRoot";
import ModalService from "./modals/Services/ModalService";
import TestModal from "./components/TestModal";

import "bootstrap/dist/css/bootstrap.css";
function App() {
  const addModal = () => {
    ModalService.open(TestModal);
  };
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <ModalRoot />
      <button onClick={addModal} className="btn btn-primary m-4">
        open Modal
      </button>

      <Footer></Footer>
    </div>
  );
}

export default App;
