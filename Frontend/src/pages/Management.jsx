import React, { useState, memo, useMemo } from "react";
import "./Robote.css";

// Updated products array with sequential ids (39, 40, 41, ...)
const products = [
  {
    id: 39,
    name: "POSTER MAKING COMPETETION",
    image: "/images/hands-working.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
  {
    id: 40,
    name: "AD MAD SHOW",
    image: "/images/6683.jpg",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹10,000",
  },
  {
    id: 41,
    name: "CITRONICS REEL MAKING",
    image: "/images/hi.jpg",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5000/-",
  },
  {
    id: 42,
    name: "CITRONICS PHOTOGRAPHY",
    image: "/images/photo.jpg",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5000/-",
  },
  {
    id: 43,
    name: "BRAND QUIZ",
    image: "/images/97350-OKYIEE-393.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹7000/-",
  },
  {
    id: 44,
    name: "CASE WRITING COMPETITION",
    image: "/images/20943483.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹7000/-",
  },
];

// Memoized ProductCard component to avoid unnecessary re-renders
const ProductCard = memo(({ product, openPreview }) => {
  return (
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
  );
});

const Management = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Use memo to only recalculate activeProduct when activePreview changes
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId);
    setActivePreview(productId);
  };

  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">MANAGEMENT</h3>
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

export default Management;
