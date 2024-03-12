import React  from "react";
import '../style/services.css';
import Footer from "../Footer";

function Service(){
    
    return (
        <>
           
           <section className="shop container">
  <h2 className="section-title">Unisex Saloon</h2>
  {/* CONTENT  */}
  <div className="shop-content">
    {/* BOX 1 */}
    <div className="product-box">
      
      <h2 className="product-title">haircut</h2>
      <span className="product-price">Rs.299</span>
     <button className="ad-to-cart">Add to Cart</button>
    </div>
    {/* BOX 2 */}
    <div className="product-box">
     
      <h2 className="product-title">Haircolour</h2>
      <span className="product-price">Rs.399</span>
      <button className="ad-to-cart">Add to Cart</button>
    </div>
    {/* BOX 3 */}
    <div className="product-box">
      
      <h2 className="product-title">Makeup</h2>
      <span className="product-price">Rs.3000</span>
      <button className="ad-to-cart">Add to Cart</button>
    </div>
    {/* BOX 4 */}
    <div className="product-box">
     
      <h2 className="product-title">Facial</h2>
      <span className="product-price">Rs.6000</span>
      <button className="ad-to-cart">Add to Cart</button>
    </div>
    {/* BOX 5 */}
    <div className="product-box">
     
      <h2 className="product-title">Hair-Spa</h2>
      <span className="product-price">Rs.599</span>
      <button className="ad-to-cart">Add to Cart</button>
    </div>
    {/* BOX 6 */}
    <div className="product-box">
      
      <h2 className="product-title">Face-wash</h2>
      <span className="product-price">Rs.399</span>
      <button className="ad-to-cart">Add to Cart</button>
    </div>
    {/* BOX 7 */}
    <div className="product-box">
      
      <h2 className="product-title">Beard</h2>
      <span className="product-price">Rs.99</span>
      <button className="ad-to-cart">Add to Cart</button>
    </div>
    {/* BOX 8 */}
    <div className="product-box">
      
      <h2 className="product-title">Hair-wash</h2>
      <span className="product-price">Rs.99</span>
      <button className="ad-to-cart">Add to Cart</button>
    </div>
  </div>
</section>
<Footer/>

            
        </>
    );
}

export default Service;

