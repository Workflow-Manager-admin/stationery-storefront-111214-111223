import React from "react";

// PUBLIC_INTERFACE
function Home({ user }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome{user ? `, ${user.name}` : ""} to <span className="accent">Stationery.Shop</span>
        </h1>
        <p className="hero-desc">
          Find the finest pens, notebooks, and creative supplies for all ages. Fast shipping, secure checkout, and a beautiful modern shopping experience.
        </p>
      </div>
    </section>
  );
}

export default Home;
