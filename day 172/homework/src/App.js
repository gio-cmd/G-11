import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
