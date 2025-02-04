import React, { useState, memo } from "react";
import "./Robote.css";

// List of products for GDG & ECHELON
const products = [
  {
    id: 1,
    name: "CODEOLOGY",
    image: "/images/back.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5000/-",
  },
  {
    id: 2,
    name: "TECH ESCAPE ROOM",
    image: "/images/hq720.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹3500/-",
  },
  {
    id: 3,
    name: "10 HOURS HACKATHON",
    image: "/images/banner.png",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹30,000/-",
  },
];

// Memoized component for each product to avoid unnecessary re-renders
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

const Gdg = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Open product preview
  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId);
    setActivePreview(productId);
  };

  // Close product preview
  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  // Find the active product based on the product id
  const activeProduct = products.find(
    (product) => product.id === activePreview
  );

  return (
    <div className="container">
      <h3 className="title">GDG & ECHELON</h3>
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

export default Gdg;
