import React, { useState, memo, useMemo } from "react";
import "./Robote.css";

// Product data
const products = [
  {
    id: 19,
    name: "MEHANDI MAKING",
    image: "/images/7.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹3000/-",
  },
  {
    id: 17,
    name: "SCIENCE MODEL COMPITITION",
    image: "/images/science.webp",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹11,000/-",
  },
  {
    id: 18,
    name: "SCIENCE MODEL COMPITITION (team of 2)",
    image: "/images/science.webp",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹11,000/-",
  },
];

// 🟢 Memoized ProductCard to prevent unnecessary re-renders
const ProductCard = memo(({ product, openPreview }) => {
  return (
    <div className="product" onClick={() => openPreview(product.id)}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
        height="200"
        style={{ objectFit: "cover" }}
        loading="lazy" // Lazy loading for images
      />
      <h3>{product.name}</h3>
    </div>
  );
});

const Onspotevents = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to avoid unnecessary re-renders
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  // Open the preview for the selected product
  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId); // Debugging
    setActivePreview(productId);
  };

  // Close the preview
  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">ON SPOT EVENTS</h3>
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
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              loading="lazy" // Lazy loading for the preview image
            />
            <h3>{activeProduct.name}</h3>

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

export default Onspotevents;
