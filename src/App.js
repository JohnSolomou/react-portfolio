import "./App.css";
import Hero from "./Hero";
import React from "react";
import Nav from "./Nav";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Work />

      <Footer></Footer>
    </div>
  );
}

export default App;
