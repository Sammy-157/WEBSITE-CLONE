import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
  <><div className="page-with-image">
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

    <div className="home-page-2">
      <div className="home-page-2-contents">
      <div className="page-2-left">
<img src="src/assets/niceLady.jpg " alt="nice lady"></img>
      </div>

      <div className="page-2-right">
<h1>
  Who we serve
</h1>
<p>
  Ahoma is a platform designed to empower tailors, fashion designers, fabric
</p>
<p>
  sellers, boutique owners, and customers by streamlining management,
</p>
<p>
  showcasing creativity, connecting businesses, and fostering growth across the
</p>
<p>
entire fashion ecosystem.
</p>
<button className="read-more-button">
  Read More
</button>

      </div>

      </div>
    </div>
      </>

  );
};

export default Home;
