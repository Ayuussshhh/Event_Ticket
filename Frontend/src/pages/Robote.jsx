import React, { useState, memo, useMemo } from "react";
import "./Robote.css";

const products = [
  {
    id: 14,
    name: "ROBO-RACE",
    image: "/images/robot-car.jpg",
    price: "₹500/-",
    date: "date",
    time: "time",
    prize: "₹12000/-",
  },
  {
    id: 15,
    name: "ROBO-SOCCER",
    image: "/images/ROBO-SOC.jpg",
    price: "₹500/-",
    date: "date",
    time: "time",
    prize: "₹12000/-",
  },
  {
    id: 16,
    name: "LINE FOLLOWER",
    image: "/images/F9VN87EKF2JF951.webp",
    price: "₹500/-",
    date: "date",
    time: "time",
    prize: "₹15000/-",
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

const Robote = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to prevent recalculating on every render
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  return (
    <div className="container">
      <h3 className="title">ROBOTICS</h3>
      <div className="products-container">
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

export default Robote;
