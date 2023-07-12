import React from "react";
import "./App.css";
import About from "./Page/About";
import Home from "./Page/Home";
import Navbar from "./Component/Navbar";
import Projects from "./Page/Projects";
import Service from "./Page/Service";
import "flowbite";
import Expirence from "./Page/Expirence";
import Contact from "./Page/Contact";
import Footer from "./Page/Footer";
import ModeState from "./Context/modeState";
import Notification from "./Component/Notification";

function App() {
  return (
    <ModeState>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Service />
        <Expirence />
        <Contact />
        <Footer />
      </div>
    </ModeState>
  );
}

export default App;
