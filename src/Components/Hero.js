import React from "react";
import image from "../images/hero-image.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <img src={image} alt="images of people" className="hero-image" />
      </div>
      <div className="hero-body">
        <h2 className="hero-header">Online Experiences</h2>
        <p className="hero-paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
