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
    <h1 className="h-primary1 mt-8 ">Our services</h1>
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
  <section className="why-choose-us">
      <div className="container">
        <h2 className="font-bold font-serif text-2xl">Why Choose Us?</h2>
        <div className="reasons">
          <div className="reason">
            <i className="fas fa-check-circle"></i>
            <h3>Convenient Booking</h3>
            <p>Book beauty services anytime, anywhere with our easy-to-use platform.</p>
          </div>
          <div className="reason">
            <i className="fas fa-check-circle"></i>
            <h3>Verified Salons</h3>
            <p>Choose from a curated list of verified salons offering top-notch services.</p>
          </div>
          <div className="reason">
            <i className="fas fa-check-circle"></i>
            <h3>Secure Payments</h3>
            <p>Enjoy secure and hassle-free payment options for your beauty appointments.</p>
          </div>
          {/* Add more reasons as needed */}
        </div>
      </div>
    </section>
</>


              </>
    );
}
export default Ourservices;