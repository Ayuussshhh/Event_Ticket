import React, { useState, useMemo } from "react";
import "./Robote.css";

const Sports = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Memoize the products list inside the component
  const products = useMemo(
    () => [
      {
        id: 21,
        name: "CRICKET",
        image: "/images/3991.jpg",
        price: "₹1100/-",
        date: "DATE",
        time: "TIME",
        prize: "₹32000/-",
      },
      {
        id: 22,
        name: "KABADDI",
        image: "/images/dmpd1ewgm6m41k7svypc.avif",
        price: "₹1100/-",
        date: "DATE",
        time: "TIME",
        prize: "₹22500/-",
      },
      {
        id: 23,
        name: "VOLLEYBALL",
        image: "/images/7152018.jpg",
        price: "₹700/-",
        date: "DATE",
        time: "TIME",
        prize: "₹16500/-",
      },
      {
        id: 24,
        name: "CHESS",
        image: "/images/OMJWZZ0.jpg",
        price: "₹700/-",
        date: "DATE",
        time: "TIME",
        prize: "₹7500/-",
      },
      {
        id: 25,
        name: "GULLY CRICKET",
        image: "/images/6375791.jpg",
        price: "₹250/-",
        date: "DATE",
        time: "TIME",
        prize: "₹2500/-",
      },
      {
        id: 26,
        name: "FOOTBALL 7 A SIDE",
        image: "/images/615.jpg",
        price: "₹500/-",
        date: "DATE",
        time: "TIME",
        prize: "₹5000/-",
      },
    ],
    []
  ); // The dependency array is empty to ensure it only computes once

  const openPreview = (productId) => {
    setActivePreview(productId);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">SPORTS</h3>
      <div className="products-container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => openPreview(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              width="300"
              height="200"
              style={{ objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>

      {activePreview && (
        <div className="products-preview active">
          {products
            .filter((product) => product.id === activePreview)
            .map((product) => (
              <div className="preview" key={product.id}>
                <i className="fas fa-times" onClick={closePreview}></i>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <i key={index}></i>
                  ))}
                </div>
                <div className="details-row">
                  <div className="detail-item">
                    <strong>Date:</strong> {product.date}
                  </div>
                  <div className="detail-item">
                    <strong>Time:</strong> {product.time}
                  </div>
                  <div className="detail-item">
                    <strong>Prize:</strong> {product.prize}
                  </div>
                </div>
                <div className="price">{product.price}</div>
                <div className="buttons">
                  <a href="/" className="buy">
                    About!
                  </a>
                  <a href="/Register" className="cart">
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

export default Sports;
