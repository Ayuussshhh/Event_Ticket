import React, { useState, memo, useMemo } from "react";
import "./Robote.css";

// List of products in the 'Law' category
const products = [
  {
    id: 45,
    name: "SKIT/MIME/DRAMA COMPETITION",
    image: "/images/kyle-head-p6rNTdAPbuk-unsplash.jpg",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹8000/-",
  },
  {
    id: 46,
    name: "DEBATE COMETITION",
    image: "/images/banner12-03.png",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹1000/-",
  },
  {
    id: 47,
    name: "MOOT COURT",
    image: "/images/Moot-Court-Small-Feature-Image.png",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹11,000/-",
  },
  {
    id: 48,
    name: "ANTAKSHRI COMPETITION",
    image: "/images/Slide1-1024x576-1.jpg",
    price: "₹250/-",
    date: "DATE",
    time: "TIME",
    prize: "₹2000/-",
  },
  {
    id: 49,
    name: "BEST OUT OF WEST",
    image: "/images/best-out-of-waste-idea-rabbit_0_1200.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹11,000/-",
  },
];

// Memoized component for each product to avoid unnecessary re-renders
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

const Law = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Memoize the active product to prevent unnecessary recalculations
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
      <h3 className="title">LAW</h3>
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

export default Law;
