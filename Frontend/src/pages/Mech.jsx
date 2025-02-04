import React, { useState, memo, useMemo } from "react";
import "./Robote.css";

// Product data
const products = [
  {
    id: 11,
    name: "GO-CART",
    image: "/images/karting-driver-helmet-kart-circuit.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5000/-",
  },
  {
    id: 12,
    name: "SKETCH YOUR IMAGINATION",
    image: "/images/close-up-hand-drawing-paper.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹4500/-",
  },
  {
    id: 13,
    name: "CAD CAMP",
    image: "/images/large.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹2500/-",
  },
];

// Memoized ProductCard component to avoid unnecessary re-renders
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
        decoding="async"
      />
      <h3>{product.name}</h3>
    </div>
  );
});

const Mech = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Memoize the active product to prevent unnecessary recalculations
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  // Open the preview for the selected product
  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId);
    setActivePreview(productId);
  };

  // Close the preview
  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">MECHANICAL</h3>
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
              loading="lazy"
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

export default Mech;
