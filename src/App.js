import "./App.css";
import Hero from "./Hero";
import React from "react";
import Navigation from "./Nav";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Hero />
      <About />
      <Work />

      <Footer></Footer>
    </div>
  );
}

export default App;
