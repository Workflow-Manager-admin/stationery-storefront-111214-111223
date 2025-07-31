import React, { useEffect, useState } from "react";
import productsData from "../data/products";
import * as api from "../services/api";

// PUBLIC_INTERFACE
function ProductGrid({ addToCart }) {
  const [products, setProducts] = useState([]);

  // Simulate backend fetching
  useEffect(() => {
    // Replace with real API call in production
    async function fetchProducts() {
      // const resp = await api.fetchProducts();
      // setProducts(resp);
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  return (
    <section className="product-grid-section">
      <h2 className="section-title">Popular Stationery</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} className="product-img" />
            <div className="prod-details">
              <span className="prod-name">{prod.name}</span>
              <span className="prod-desc">{prod.description}</span>
              <span className="prod-price">${prod.price.toFixed(2)}</span>
              <button
                className="product-btn"
                onClick={() => addToCart(prod)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
