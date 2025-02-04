import React, { useState, memo, useMemo } from "react";
import "./Pahal.css";

const products = [
  {
    id: 50,
    name: "DJ EVENING",
    image: "/images/cb.jpg",
    price: "₹100/-",
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

const Specialevents = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to prevent recalculating on every render
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  return (
    <div className="container">
      <h3 className="title">SPECIAL EVENTS</h3>
      <div className="products-containerr">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openPreview={setActivePreview}
          />
        ))}
      </div>

      {activeProduct && (
        <div className="products-preview active">
          <div className="preview">
            <i
              className="fas fa-times"
              onClick={() => setActivePreview(null)}
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
                Get Passes!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Specialevents;
