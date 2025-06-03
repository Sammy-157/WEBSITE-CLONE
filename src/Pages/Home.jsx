import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
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
          <button className="Started-button-2">Get Started</button>
        </div>
      </div>

      <div className="home-page-2">
        <div className="home-page-2-contents">
          <div className="page-2-left">
            <img
              src="src/assets/home-about-BauG4J-a.jpg "
              alt="nice lady"
            ></img>
          </div>

          <div className="page-2-right">
            <h1>Who we serve</h1>
            <p>
              Ahoma is a platform designed to empower tailors, fashion
              designers, fabric
            </p>
            <p>
              sellers, boutique owners, and customers by streamlining
              management,
            </p>
            <p>
              showcasing creativity, connecting businesses, and fostering growth
              across the
            </p>
            <p>entire fashion ecosystem.</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </div>

      <div className="home-page-3">
        <div className="home-page-3-contents">
          <div className="page-3-left">
            <h1>
              Ahoma Mobile App - Launching <br /> Soon!
            </h1>

            <p>
              We're working hard to bring you the Ahoma mobile experience! Soon,
              you'll be
            </p>
            <p>
              able to manage your fashion business, track orders, and shop for
              amazing designs
            </p>
            <p>
              —all from your phone. Our mobile app will make it easier than ever
              to connect
            </p>
            <p>
              with designers, track your orders, and explore the latest fashion
              trends.
            </p>

            <p className="last-p">
              Stay tuned for updates, and be the first to know when we launch!
            </p>
          </div>

          <div className="page-3-right">
            <div className="image-1">
              <img
                src="src/assets/mobile_home-CQw1-DZW.png"
                alt="phone-home"
              ></img>
            </div>
            <div className="image-2">
              <img
                src="src/assets/record_customer-DhwPfhu5.png"
                alt="record-customer"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
