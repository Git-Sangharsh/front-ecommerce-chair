import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/first-page/navbar/Navbar";
import Bg from "./components/first-page/bg/Bg";
import About from "./components/first-page/about/About";
import Contact from "./components/first-page/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./components/second-page/category/Category";
import Upload from './components/upload/Upload.js'
import Chairone from "./components/second-page/cat/Chairone.js";

const App = () => {
  //creating scroll for aboutUs Page
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //creating scroll for Contact Page
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar onAboutClick={scrollToAbout} onContactClick={scrollToContact} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Bg />
                <About normalAboutRef={aboutRef} />
                <Contact normalContactRef={contactRef} />
              </div>
            }
          />
          <Route path="/category" element={<Category />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/chairs" element={<Chairone />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
