import React, { useState } from 'react';
import '../style/newsaloon.css';
import Footer from '../Footer';

const NewSaloon = () => {
  const [formData, setFormData] = useState({
    saloonName: '',
    ownerName: '',
    email: '',
    phoneNumber: '',
    address: '',
    servicesOffered: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, such as sending the data to a server or API
    console.log(formData);
    // You can also reset the form after submission
    setFormData({
      saloonName: '',
      ownerName: '',
      email: '',
      phoneNumber: '',
      address: '',
      servicesOffered: '',
    });
  };

  return (
    <>
     <section className='newsaloon'>
        
        
    <div>
       
      <h2>Saloon Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="saloonName">Saloon Name</label>
        <input
          type="text"
          id="saloonName"
          name="saloonName"
          value={formData.saloonName}
          onChange={handleChange}
          required
        />

        <label htmlFor="ownerName">Owner Name</label>
        <input
          type="text"
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>


<label for="Type">Choose Saloon type:</label>
<select>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Unisex">Unisex</option>
 
</select>
        <button type="submit">Submit</button>
      </form>
    </div>
    </section>
    <Footer/>
    </>
  );
};

export default NewSaloon;
