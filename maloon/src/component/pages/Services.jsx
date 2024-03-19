import React, { useState } from "react";
import "../style/services.css";
import Footer from "../Footer";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons from react-icons
import VendorPage from "../pages/VendorPage";

const productsData = [
  {
    id: 1,
    title: "Haircut",
    description: "Rs.299.",
    category: "hair",
  },
  {
    id: 2,
    title: "Hair Colour",
    description: "Rs.399.",
    category: "hair",
  },
  {
    id: 3,
    title: "Makeup",
    description: "Rs.3000.",
    category: "face",
  },
  {
    id: 4,
    title: "Facial",
    description: "Rs.6000.",
    category: "face",
  },
  {
    id: 5,
    title: "Hair-Spa",
    description: "Rs.599.",
    category: "hair",
  },
  {
    id: 6,
    title: "Face-wash",
    description: "Rs.399.",
    category: "face",
  },
  {
    id: 7,
    title: "Beard",
    description: "Rs.99.",
    category: "face",
  },
  {
    id: 8,
    title: "Hair-wash",
    description: "Rs.99.",
    category: "hair",
  },
];

function Service() {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProducts =
    filter === "all"
      ? productsData
      : productsData.filter((product) => product.category === filter);

  return (
    <>
      <h1 className="h-primary mb-2">Unisex x-y</h1>
      <div className="container">
        <div>
          <VendorPage />
        </div>
        <div className="rating float-end">
          <i className="fas fa-star"></i> {/* Placeholder for rating icon */}
        </div>
        <div className="address ">
          <FaMapMarkerAlt className="icon" /> {/* Location icon */}
          <p>KIIT Campus 6</p>
        </div>
        <a className="text-lg " href="https://maps.app.goo.gl/jTjyL8aVHaiEm8s47">See direction</a>
        <div className="timing mt-4">
          <FaClock className="icon" /> {/* Timing icon */}
          <p>Timing:</p>
          <p>|Mon:  9:00am-8:00pm|</p>
          
          <p>|tue:  9:00am-8:00pm|</p>
          
          <p>|wed:  9:00am-8:00pm|</p>
          
          <p>|thur: 9:00am-8:00pm|</p>
          
          <p>|fri:  9:00am-8:00pm|</p>
         
          <p>|sat:  9:00am-8:00pm|</p>
          
          <p>|sun:  9:00am-8:00pm|</p>
         
        </div>
        <div className="filter-option">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={filter === "hair" ? "active" : ""}
            onClick={() => handleFilterChange("hair")}
          >
            Hair
          </button>
          <button
            className={filter === "face" ? "active" : ""}
            onClick={() => handleFilterChange("face")}
          >
            Face
          </button>
          <button
            className={filter === "body" ? "active" : ""}
            onClick={() => handleFilterChange("face")}
          >
            body
          </button>
        
          {/* Add more filter buttons for other categories as needed */}
        </div>
      </div>
      <section className="shop container">
        {/* CONTENT */}
        <div className="shop-content">
          {/* Product Boxes */}
          {filteredProducts.map((product) => (
            <div className="product-box1" key={product.id}>
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Service;
