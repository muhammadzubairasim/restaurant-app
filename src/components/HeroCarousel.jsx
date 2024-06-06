import React from "react";
import "../App.css";

const HeroCarousel = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-illustration"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>
            Get Your Food{" "}
            <span style={{ fontSize: "larger", color: "#97C4ED" }}>
              Order Now
            </span>
          </h2>
          <div className="hero-cart"></div>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
