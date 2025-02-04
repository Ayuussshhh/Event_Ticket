import React, { useState, useMemo, memo } from "react";
import "./Pahal.css";

const products = [
  {
    id: 20,
    name: "PROJECT COMPETITION (H/W & S/W)",
    image: "/images/ppt.webp",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹50,000/-",
  },
];

// 🟢 Memoized ProductCard to prevent unnecessary re-renders
const ProductCard = memo(({ product, openPreview }) => {
  return (
    <div className="product" onClick={() => openPreview(product.id)}>
      <img
        src={product.image}
        alt={product.name}
        loading="lazy" // Lazy load product images
      />
      <h3>{product.name}</h3>
    </div>
  );
});

const Pahal = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to avoid unnecessary re-renders when the product list does not change
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
      <h3 className="title">PAHAL</h3>
      <div className="products-containerr">
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
            <i className="fas fa-times" onClick={closePreview}></i>
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              loading="lazy" // Lazy load preview image
            />
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

export default Pahal;
