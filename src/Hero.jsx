import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h2 className="h1 hero-title">Begin your spiritual journey</h2>

        <p className="hero-text">
          Start your spiritual journey and visit sacred sites full of history
          and meaning. Explore places of faith and tradition, offering peace and
          blessings along the way.
        </p>

        <div className="btn-group">
          <button className="btn btn-primary">Learn more</button>

          <button className="btn btn-secondary">Visit now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
