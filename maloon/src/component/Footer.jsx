import React from "react";
import './style/footer.css';
import { Link } from "react-router-dom";
import img1 from './image/logo2.png'
 function Footer(){
    return(
        <>  
        <section className="footer">
  <div className="footer-row">
    <div className="footer-col">
      <h4>Info</h4>
      <ul className="links">
        <li>
          <Link to='/About'>About Us</Link>
        </li>
       
        <li>
          <Link to='/ProductList'>Service</Link>
        </li>
        
        <li>
        <img src={img1} className='h-14 w-18  mb-9' alt="#" />
        </li>

        
      </ul>
    </div>
    <div className="footer-col">
      <h4>Explore</h4>
      <ul className="links">
        <li>
          <Link>Haircut</Link>
        </li>
        <li>
          <Link>Makeup</Link>
        </li>
        <li>
          <Link>Facial</Link>
        </li>
        <li>
          <Link>Pedicure</Link>
        </li>
        <li>
          <Link>Hair-spa</Link>
        </li>
        
      </ul>
    </div>
    <div className="footer-col">
      <h4>Legal</h4>
      <ul className="links">
        <li>
          <Link >Customer Agreement</Link>
        </li>
        <li>
          <Link>Privacy Policy</Link>
        </li>
        
       
        
      </ul>
    </div>
    <div className="footer-col">
     
    
      <div className="icons">
        
        
        <a href="https://www.instagram.com/maloonapp?igsh=MXNjZWc0b2VreG56MA=="><i className="fa-brands fa-instagram" /></a>
        
        
      </div>
    </div>
  </div>
  <footer>
    <div className="center">
        Copyright &copy www.Maloon.in All rights reserved!
    </div>
</footer>


</section>

  
        </>

    );
 }
export default Footer; 