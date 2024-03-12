import React from "react";
import '../style/ourservices.css'
import img1 from "../image/haircut2.png";
import img2 from "../image/haircolour1.png.jpg.png";
import img3 from "../image/makeup2.png";
import img4 from "../image/pedicure2.png";
import img5 from "../image/facial2.png";

function Ourservices(){
    return(
              <>
              
              <>
  <section className="sr-s">
    <h1 className="h-primary1 ">Our services</h1>
    <div className="services1-container">
      <div className="service1">
        <img src={img1} alt="#" />
        <a style={{ textDecoration: "underline" }} href="#">
          <h2>Haircut</h2>
        </a>
      </div>
      <div className="service1">
        <img src={img2} alt="" />
        <a style={{ textDecoration: "underline" }} href="#">
          <h2>Haircolour</h2>
        </a>
      </div>
      <div className="service1">
        <img src={img3} alt="" />
        <a style={{ textDecoration: "underline" }} href="#">
          <h2>Makeup</h2>
        </a>
      </div>
      <div className="service1">
        <img src={img4} alt="" />
        <a style={{ textDecoration: "underline" }} href="#">
          <h2>Pedicure</h2>
        </a>
      </div>
      <div className="service1">
        <img src={img5} alt=""  />
        <a style={{ textDecoration: "underline" }} href="#">
          <h2>Facial</h2>
        </a>
      </div>
    </div>
  </section>
  <section className="hero">
    <h1>Why Choose Us?</h1>
    <p style={{ fontSize: "1.3rem" }}>
      We understand the value of your time. That's why we offer convenient slot
      booking to save you waiting time.
    </p>
  </section>
  <section className="features1">
    <div className="feature1">
      <h2>Convenience</h2>
      <p>
        Book your beauty services at your preferred time, avoiding long waiting
        queues.
      </p>
    </div>
    <div className="feature1">
      <h2>Flexibility</h2>
      <p>
        Choose from a variety of available slots to fit your schedule perfectly.
      </p>
    </div>
    <div className="feature1">
      <h2>Efficiency</h2>
      <p>
        Experience quick and efficient service delivery without unnecessary
        delays.
      </p>
    </div>
  </section>
</>


              </>
    );
}
export default Ourservices;