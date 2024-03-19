import React from "react";



import img2 from "../image/homeback1.jpg";
import img3 from "../image/homeback.jpg";

function Hero() {
  return (
    <div className="carousel-container">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 carousel-image"
            src={img2}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={img3}
            alt="Second slide"
          />
        </div>
        
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  );
}

export default Hero;
