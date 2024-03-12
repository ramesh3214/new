import React from "react";
import img1 from "../image/homeback.jpg"
import { Link,Outlet } from 'react-router-dom';
import Footer from "../Footer";
import Ourservices from "./Ourservices";
import Carousel from "../Carousel";
import Coupan from "./Coupan";

function Home() {
  return (
    <>
    <Coupan/>

      <div style={{ position: "relative" }}>
        <img src={img1} className="img-fluid" alt="Background" style={{ height: "auto", width: "100%" }} />
        <div
          className="content-overlay"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#17834F",
            width: "80%", // Adjusted width for better responsiveness
            maxWidth: "600px", // Added max width to avoid stretching on larger screens
            padding: "0 20px", // Added padding for better spacing on smaller screens
          }}
        >
          <section id="home" style={{ textAlign: "center" }}>
            
            <a href="./html/saloon-page.html" style={{ display: "inline-block", width: "100%" }}>
              <Link to="/productlist"><button
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
                  width: "50%",
                  height: "50px",
                  display: "block",
                  maxWidth: "200px",
                  margin: "auto",
                  marginTop:"10px"
                  
                
                }}
              >
                Book now
              </button></Link>
            </a>
          </section>
        </div>
      </div>
      
      <Carousel/>
      <Ourservices/>
      <Footer/>
      <Outlet/>
      
    </>
  );
}

export default Home;
