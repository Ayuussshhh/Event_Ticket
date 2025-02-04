import React, { useState, useMemo } from "react";
import "./Timeline.css"; // Add custom styles here

const events = [
  // Your events array
  // ... (same as before)
  {
    id: 1,
    title: "Robotics",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/finalimgone.jpg",
    link: "/Robote",
  },
  {
    id: 2,
    title: "GDG/Echelon",
    date: "Tue, Jan 2, 4:30 AM",

    button: "discover events",
    author: "lead",
    image: "/images/baner.jpg",
    link: "/Gdg",
  },
  {
    id: 3,
    title: "management",
    date: "Fri, Dec 15, 8:30 AM",

    button: "discover events",
    author: "lead",
    image: "/images/7054169.jpg",
    link: "/Management",
  },
  {
    id: 4,
    title: "civil",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/background.jpg",
    link: "/Civil",
  },
  {
    id: 5,
    title: "pahal",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/56514.jpg",
    link: "/Pahal",
  },
  {
    id: 6,
    title: "sports",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/6qyc_ylv8_230329.jpg",
    link: "/Sports",
  },
  {
    id: 7,
    title: "mechanical",
    date: "Tue, Jan 2, 4:30 AM",

    button: "discover events",
    author: "lead",
    image: "/images/mech.jpg",
    link: "/Mech",
  },
  {
    id: 8,
    title: "pharmacy",
    date: "Fri, Dec 15, 8:30 AM",

    button: "discover events",
    author: "lead",
    image: "/images/20944962.jpg",
    link: "/Cdip",
  },
  {
    id: 9,
    title: "CSE/CSIT/MCA",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/professional-programmer-working-late-dark-office.jpg",
    link: "/Cs",
  },
  {
    id: 10,
    title: "on spot events",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/back.jpg",
    link: "/Onspotevents",
  },
  {
    id: 11,
    title: "CDIPS",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image:
      "/images/3d-illustration-woman-singer-with-guitar-microphone-cartoon-3d-render-design.jpg",
    link: "/Cdips",
  },
  {
    id: 12,
    title: "law",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/view-3d-justice-scales.jpg",
    link: "/Law",
  },
  {
    id: 14,
    title: "special events",
    date: "Fri, Dec 15, 7:00 AM",

    button: "discover events",
    author: "lead",
    image: "/images/party_audience_on_spotlight_background_2107.jpg",
    link: "/Specialevents",
  },
];

// ✅ Optimize EventCard with React.memo to prevent unnecessary re-renders
const EventCard = React.memo(({ event }) => {
  return (
    <div className="event-card">
      <img
        src={event.image}
        alt={event.title}
        className="event-image"
        loading="lazy"
        decoding="async"
      />
      <div className="event-info">
        <p className="event-date">{event.date}</p>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-author">{event.author}</p>
        <a href={event.link} className="event-button">
          {event.button}
        </a>
      </div>
    </div>
  );
});

// ✅ useMemo to avoid recalculating filtered events unless searchTerm changes
const Timeline = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ useMemo to filter events based on search term
  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="app-container">
      <div className="search-bar">
        <span className="search-icon">
          <span className="material-symbols-outlined"></span>
        </span>
        <input
          type="text"
          placeholder="Search title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="columns-container">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
