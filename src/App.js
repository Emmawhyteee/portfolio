import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Empty from "./components/Empty";


function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: true,
      anchorPlacement:"top-bottom",

    })
  })




  return (
    <div className="app" style={{ backgroundColor: '#1A1C2B',color:'white'}}>

      <Navbar />
      <About />
      <Projects />
      <Empty/>
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
