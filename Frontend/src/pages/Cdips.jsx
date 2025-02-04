import React, { useState, memo } from "react";
import "./Robote.css";

// List of products for CDIPS
const products = [
  {
    id: 27,
    name: "BOLLYBOOD BONANZA",
    image: "/images/bollywood-bonanza.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹10000",
  },
  {
    id: 28,
    name: "DANCE(SOLO)(DUO)(GROUP)",
    image: "/images/7983.jpg",
    price: "₹200/-|₹300/-|₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹10,000/-",
  },
  {
    id: 29,
    name: "BEAT THE STREAT (ROCK BAND)",
    image:
      "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
    price: "₹300/-",
    date: "DATE",
    time: "TIME",
    prize: "₹7500/-",
  },
  {
    id: 30,
    name: "OPEN MIC",
    image: "/images/openmic.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹4000/-",
  },
  {
    id: 31,
    name: "RAMP WALK(SOLO)(DUO)",
    image: "/images/ramp-walk-sep-2024.png",
    price: "₹250/-|₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹20,000/-",
  },
  {
    id: 32,
    name: "MASTER CHEF",
    image: "/images/imagesss.png",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "₹2,000/-",
  },
  {
    id: 33,
    name: "SCAVENGER HUNT",
    image: "/images/imageeeee.jpg",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "GOODIES",
  },
  {
    id: 8,
    name: "SNAKE & LADDER",
    image: "/images/63433c0468fb4d5c9e7274c32e689174.jpeg",
    price: "₹50/-",
    date: "DATE",
    time: "TIME",
    prize: "GOODIES",
  },
];

// Memoized ProductCard Component
const ProductCard = memo(({ product, openPreview }) => (
  <div className="product" onClick={() => openPreview(product.id)}>
    <img
      src={product.image}
      srcSet={`${product.image}?w=300 300w, ${product.image}?w=600 600w`}
      sizes="(max-width: 600px) 300px, 600px"
      alt={product.name}
      loading="lazy"
      decoding="async"
      width="300"
      height="200"
      style={{ objectFit: "cover" }}
    />
    <h3>{product.name}</h3>
  </div>
));

const Cdips = () => {
  const [activePreview, setActivePreview] = useState(null);

  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId); // Debugging
    setActivePreview(productId);
  };

  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  // Find the active product
  const activeProduct = products.find(
    (product) => product.id === activePreview
  );

  return (
    <div className="container">
      <h3 className="title">CDIPS</h3>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openPreview={openPreview}
          />
        ))}
      </div>

      {activePreview && activeProduct && (
        <div className="products-preview active">
          <div className="preview">
            <i
              className="fas fa-times"
              onClick={closePreview}
              aria-label="Close preview"
            ></i>
            <img src={activeProduct.image} alt={activeProduct.name} />
            <h3>{activeProduct.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <i key={index}></i>
              ))}
            </div>

            {/* Date, Time, Prize Row */}
            <div className="details-row">
              <div className="detail-item">
                <strong>Date:</strong> {activeProduct.date}
              </div>
              <div className="detail-item">
                <strong>Time:</strong> {activeProduct.time}
              </div>
              <div className="detail-item">
                <strong>Prize:</strong> {activeProduct.prize}
              </div>
            </div>

            <div className="price">{activeProduct.price}</div>
            <div className="buttons">
              <a href="/" className="buy">
                About!
              </a>
              <a href="/Register" className="cart">
                Participate now!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cdips;
