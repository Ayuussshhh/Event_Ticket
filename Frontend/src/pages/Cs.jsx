import React, { useState, memo } from "react";
import "./Robote.css";

// List of products for CS/CSIT/CMA
const products = [
  {
    id: 4,
    name: "DEFEAT THE DEFECT",
    image: "/images/binary-code-digits-technology-software-concept.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
  {
    id: 5,
    name: "HACK TRAIL",
    image: "/images/when-coding-is-criminal.webp",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000",
  },
  {
    id: 6,
    name: "BLIND CODING",
    image: "/images/images1.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
  {
    id: 7,
    name: "CODE ALGO",
    image: "/images/when-coding-is-criminal.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
];

// Memoized product card component
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

const Cs = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Open preview of selected product
  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId); // Debugging
    setActivePreview(productId);
  };

  // Close product preview
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
      <h3 className="title">CS/CSIT/CMA</h3>
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

export default Cs;
