import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Homepageevents from "./Homepageevents";
import Logos from "./Logos";

const Home = () => {
  const navigate = useNavigate();

  const handleDiscoverEventsClick = () => {
    navigate("/Timeline");
  };

  return (
    <div>
      <main className="main-content">
        <section className="intro">
          <h1>WELCOME TO CITRONICS 2K25</h1>
          <p>
            Join us for an exciting celebration of innovation and technology at
            our annual event. Participate in thrilling competitions, hands-on
            workshops, and inspiring tech talks, and enjoy vibrant
            entertainment. There's something for everyone at Citronics!
          </p>
          <button className="explore-btn" onClick={handleDiscoverEventsClick}>
            Discover Events
          </button>
        </section>

        <section className="image-container">
          <div className="circle">
            <img
              src="/images/robot-doing-peace-sign-removebg-preview.png"
              alt=""
            />
          </div>
        </section>
      </main>
      <Homepageevents />
      <Logos />
    </div>
  );
};

export default Home;
