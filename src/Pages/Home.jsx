import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
  <div className="page-with-image">
  <div className="background-blur"></div> 
  <div className="home-contents">
    <h2>Your Fashion Hub</h2>
    <h1>Manage Everything Seamlessly</h1>
    <p>
      Sign up for free in just a few minutes and unlock powerful tools to
      organize your
    </p>
    <p>
      customers, track jobs, and grow your fashion business with{" "}
      <span className="ahoma">Ahoma</span>
    </p>
    <button className="Started-button-2">
    Get Started
  </button>
  </div>
  
</div>

  );
};

export default Home;
