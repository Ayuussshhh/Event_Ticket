import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.brand}>CITRONICS</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>
          Register
        </a>
        <a href="/" style={styles.navLink}>
          FAQ
        </a>
      </nav>
      <div style={styles.social}>
        <i className="fab fa-facebook" style={styles.icon}></i>
        <i className="fab fa-twitter" style={styles.icon}></i>
        <i className="fab fa-instagram" style={styles.icon}></i>
        <i className="fab fa-tumblr" style={styles.icon}></i>
        <i className="fab fa-linkedin" style={styles.icon}></i>
      </div>
      <div style={styles.description}>
        <span>Contact us at: +91 </span>
        <br />
        <span>Reach us at: mail</span>
      </div>
      <div style={styles.name}>
        <span>Made By: names</span>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    color: "white", // corrected text color
    textAlign: "center",
    padding: "50px",
    marginTop: "70px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "rgb(23, 90, 145)", // optional background for better contrast  background-color: #1abc9c;

    borderRadius: "8px", // rounded corners for the whole footer
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.99)", // box shadow for the entire footer
  },
  brand: {
    fontSize: "44px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",

    marginBottom: "50px",
  },
  navLink: {
    color: "white", // corrected text color
    textDecoration: "none",
    fontSize: "26px",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "35px",
  },
  icon: {
    fontSize: "30px",
    color: "white", // corrected text color
    cursor: "pointer",
  },
  description: {
    fontSize: "20px",
    lineHeight: "1.5",
    marginTop: "50px",
  },
  name: {
    fontSize: "15px",

    marginTop: "20px",
  },
};

export default Footer;
