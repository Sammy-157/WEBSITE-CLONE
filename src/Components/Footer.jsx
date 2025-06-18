import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-1">
        <div className="header-section">
          <h1>Your Best Fashion Platform</h1>
        </div>
      </div>

      <div className=" section-2">
        <div className="part-1">
          <h1>Ahoma</h1>
          <p>
            Ahoma is a platform designed
            <br /> to empower tailors, fashion
            <br /> designers, fabric sellers,
            <br /> boutique owners, and
            <br /> customers by streamlining
            <br />
            management, showcasing
            <br /> creativity, connecting <br /> businesses, and fostering
            <br /> growth across the entire fashion
            <br /> ecosystem.
          </p>

          <img src="src/assets/Ahoma logo.png" alt="ahoma logo">
          </img>
        </div>
        <div className="part-2">
          <h1>Quick Links</h1>
          <div className="a-tags">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/ReachUs">Reach Us</a>
            <a href="/support">Support</a>
          </div>
        </div>
        <div className="part-3">
          <h1> Susbscribe to our newsletter</h1>
          <p>
            Unlock exclusive updates, insider
            <br /> insights, and exciting news by <br />
            subscribing to our newsletter.
          </p>
          <div className="part-3-b">
            <input placeholder="Enter your e-mail to subscribe"></input>
            <button>Subscribe</button>
          </div>
        </div>
        </div>

        <div className="section-3">
<div className="logos">
<img src="src/assets/twitter.png">
</img>

<img src="src/assets/linkedin.png">
</img>

<img src="src/assets/communication.png">
</img>

<img src="src/assets/youtube.png">
</img>

</div>

        </div>
      
    </div>
  );
};

export default Footer;
