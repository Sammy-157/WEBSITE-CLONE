import React from "react";
import "../Styles/Home.css";
import Card from "../Components/Card";

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
              Ahoma is a platform designed to empower tailors, fashion<br/>
              designers, fabric
              sellers, boutique owners, and customers by<br/> streamlining
              management,
              showcasing creativity, connecting<br/> businesses, and fostering growth
              across the
              entire fashion<br/> ecosystem.
            </p>
          
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

      <div className="home-page-4">
        <div className="home-page-4-contents">
          <div className="heading-4">
            <h1>Get started in just</h1>
            <h2>a few minutes</h2>
          </div>

          <div></div>

          <div className="all-cards">
            <div className="first-3-cards">
              <Card
                image="src/assets/Girl-Sign-in-DyIxiyM9.png"
                number="1"
                head="Sign up"
                text="Create an account to unlock the full features of Ahoma and start managing your tailoring business seamlessly."
              />

              <Card
                image="src/assets/Boy-sign-up-Dbg2vKtL.png"
                number="2"
                head="Sign in"
                text="Log in to your Ahoma account and access your personalized dashboard to manage all your activities."
              />

              <Card
                image="src/assets/New-Entries-BnZnpsHE.png"
                number="3"
                head="Add Customers"
                text="Add detailed customer profiles, including their names and measurements, for efficient job management."
              />
            </div>

            <div className="last-3-cards">
              <Card
                image="src/assets/Add-task-CKWdMuGf.png"
                number="4"
                head="Add jobs"
                text="Assign new jobs to your customers and include all necessary details like deadlines and instructions."
              />

              <Card
                image="src/assets/Successful-deal-DUGwm7KT.png"
                number="5"
                head="Complete jobs"
                text="Mark jobs as completed once the tailoring process is finished and ready for delivery."
              />

              <Card
                image="src/assets/Contact-Ch0MW5fD.png"
                number="6"
                head="Notify Customers"
                text="Send updates or notifications to customers to inform them when their jobs are ready for pickup or delivery."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-page-5">
        <div className="home-page-5-contents">
          <div className="page-5-left">
            <img src="src/assets/ahoma.jpg " alt="nice guy"></img>
          </div>

          <div className="page-5-right">
            <h1>Ahoma</h1>
            <p>
              Manage your tailoring business effortlessly with Ahoma. From<br/>
              adding customers, recording their measurements to tracking<br/> job
              progress, Ahoma empowers you to stay organized and<br/> deliver
              exceptional service. Let us help you focus on creating<br/> stunning
              designs while we handle the rest. Ready to transform<br/> your
              workflow? Reach out to us today!
            </p>

            <button className="reach-us-button">Reach Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
