import React from "react";

// PUBLIC_INTERFACE
function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        Hello! I'm Alex, a passionate stationery enthusiast and the creator of Stationery Shop.<br /><br />
        This site is dedicated to sharing the joy of thoughtful paper goods and quality writing tools.<br />
        Minimal placeholders for authentication and products are included; Real backend integration comes soon!
      </p>
      <hr />
      <p className="about-contact">Want to get in touch or have feedback? Email: <a href="mailto:contact@stationery.shop">contact@stationery.shop</a></p>
    </section>
  );
}

export default About;
