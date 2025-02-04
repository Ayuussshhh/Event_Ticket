import React from "react";
import "./Logos.css"; // Make sure you save the CSS in this file

const Logos = () => {
  return (
    <div className="logos">
      <h1>SPONSERS</h1>
      <div className="logos-slide">
        <img src="/logos/3m.svg" alt="3M logo" />
        <img src="/logos/barstool-store.svg" alt="Barstool logo" />
        <img src="/logos/budweiser.svg" alt="Budweiser logo" />
        <img src="/logos/buzzfeed.svg" alt="Buzzfeed logo" />
        <img src="/logos/forbes.svg" alt="Forbes logo" />
        <img src="/logos/macys.svg" alt="Macy's logo" />
        <img src="/logos/menshealth.svg" alt="Men's Health logo" />
        <img src="/logos/mrbeast.svg" alt="MrBeast logo" />
      </div>
    </div>
  );
};

export default Logos;
