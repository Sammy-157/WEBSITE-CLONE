import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ReachUs from "./Pages/ReachUs";
import Support from "./Pages/Support";
import Navbar from './Components/Navbar';


function App() {
  

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ReachUs" element={<ReachUs />} />
      <Route path="/Support" element={<Support />} />
    </Routes>
  </Router>
  )
}

export default App
