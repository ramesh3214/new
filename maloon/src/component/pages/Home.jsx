import React from "react";
import { Link } from 'react-router-dom';
//import img1 from "../image/homeback.jpg";
import Footer from "../Footer";
import Ourservices from "./Ourservices";
import Carousel from "../Carousel"
import Coupan from "./Coupan";
import ForSaloon from "./ForSaloon";

import Hero from './Hero'



function Home() {
  

  return (
    <>
      <Coupan />

      <div style={{ position: "relative" }}>
      <Hero/>
        <div
          className="content-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#17834F",
            width: "100%", // Adjusted width for better responsiveness
            maxWidth: "600px", // Added max width to avoid stretching on larger screens
            padding: "0 20px", // Added padding for better spacing on smaller screens
          }}
        >
          
          <section id="home" style={{ textAlign: "center" }}>
            <Link to= "/productlist">
              <button
                className="btn hover:bg-sky-700 ..."
                style={{
                  fontSize: "18px",
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "15px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  outline: "none",
                  width: "90%",
                  height: "50px",
                  display: "block",
                  maxWidth: "200px",
                  margin: "auto",
                  marginTop: "10px"
                }}
              >
                Book now
              </button>
            </Link>
          </section>
        </div>
      </div>

      <Carousel/>
      <ForSaloon />
      <Ourservices />

      <Footer />
    </>
  );
}

export default Home;
