import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";
import useWindowSize from "./utils/useWindowSize";
import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 768;

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrollPosition(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-poppins">
      {isMobile ? <MobileHeader /> : <Header scrollPosition={scrollPosition} />}
      <main className="pt-0 md:pt-20">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
