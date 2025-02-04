import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import "./Homepageevents.css";

// Event Card Component
const EventCard = ({ event, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(event.id)}>
      <img
        src={event.image}
        alt={event.name}
        loading="lazy"
        decoding="async"
        width="300"
        height="200"
        style={{ objectFit: "cover" }}
      />
      <div className="card-details">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="price">{event.price}</span>
          <span className="category">{event.category}</span>
        </div>
        <p className="date">{event.date}</p>
        <h3>{event.name}</h3>
        <Link to="/" className="button">
          {event.button}
        </Link>
      </div>
    </div>
  );
};

const Homepageevents = () => {
  const [search, setSearch] = useState("");
  const [activePreview, setActivePreview] = useState(null);
  const ref = useRef(null); // Define ref

  // Memoize the events array
  const events = useMemo(
    () => [
      {
        id: 3,
        image: "/images/hackers-collaborating-coding-virus.jpg",
        price: "₹500/-",
        category: "Echelon",
        date: "date",
        time: "12:00 PM",
        prize: "₹30,000/-",
        name: "10 HOURS HACKATHON",
        button: "See Details",
      },
      {
        id: 17,
        image:
          "/images/project-plan-program-activity-solution-strategy-concept.jpg",
        price: "₹200/-",
        category: "Special Events",
        date: "date",
        time: "10:00 AM",
        prize: "₹11,000/-",
        name: "SCIENCE PROJECT COMPETITION",
        button: "See Details",
      },
      {
        id: 15,
        image: "/images/ROBO-SOC.jpg",
        price: "₹500/-",
        category: "ROBOTICS",
        date: "date",
        time: "02:00 PM",
        prize: "₹12,000/-",
        name: "ROBO SOCCER",
        button: "See Details",
      },
      {
        id: 50,
        image: "/images/dance.jpg",
        price: "₹100/-",
        category: "Institute",
        date: "date",
        time: "06:00 PM",
        prize: "₹5,000/-",
        name: "DJ EVENING",
        button: "See Details",
      },
      {
        id: 42,
        image: "/images/6193472.jpg",
        price: "₹150/-",
        category: "MBA",
        date: "date",
        time: "03:00 PM",
        prize: "₹5,000/-",
        name: "CITRONICS PHOTOGRAPHY",
        button: "See Details",
      },
      {
        id: 29,
        image:
          "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
        price: "₹300/-",
        category: "CDIPs",
        date: "date",
        time: "08:00 PM",
        prize: "₹7,500/-",
        name: "BEAT THE STREAT (Rock Band)",
        button: "See Details",
      },
    ],
    []
  ); // Empty dependency array ensures it runs only once on mount

  // Memoize the filtered events
  const filteredEvents = useMemo(
    () =>
      events.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, events] // Dependency on 'search' and 'events'
  );

  const openPreview = (eventId) => {
    setActivePreview(eventId);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  // Add a div with class `search-bar` around your input field and position the icon inside it.

  return (
    <div ref={ref} className="container">
      <h1>POPULAR EVENTS</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events"
        />
        <i className="fas fa-search search-icon"></i> {/* Search icon */}
      </div>

      <div className="category-section">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={openPreview} />
        ))}
      </div>

      {/* Popup preview for active event */}
      {activePreview && (
        <div className="pproducts-preview active">
          {events
            .filter((event) => event.id === activePreview)
            .map((event) => (
              <div className="ppreview" key={event.id}>
                <i
                  className="fas fa-times"
                  onClick={closePreview}
                  aria-label="Close preview"
                ></i>
                <img src={event.image} alt={event.name} loading="lazy" />
                <h3>{event.name}</h3>
                <div className="details-row">
                  <div className="detail-item">
                    <strong>Date:</strong> {event.date}
                  </div>
                  <div className="detail-item">
                    <strong>Time:</strong> {event.time}
                  </div>
                  <div className="detail-item">
                    <strong>Prize:</strong> {event.prize}
                  </div>
                </div>
                <div className="price">{event.price}</div>
                <div className="bbuttons">
                  <a href="/" className="bbuy">
                    About!
                  </a>
                  <a href="/Register" className="ccart">
                    Participate now!
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Homepageevents;
