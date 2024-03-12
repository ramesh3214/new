import React from 'react';
import '../style/about.css'
import Footer from '../Footer';


function About() {
    return (
        <>
        <section className='abt'>
            <h1>About Us</h1>
            <p>
            Our platform's user-friendly interface empowers customers to effortlessly book their appointments according to their preferred date and time, eliminating the need for tedious phone calls or in-person visits. By providing this seamless booking experience, we aim to make salon visits more convenient and efficient for our clientele.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to revolutionize the salon industry by providing a seamless booking experience for both customers and salon owners.
                We aim to empower customers to take control of their salon appointments and discover the perfect salon services tailored to their needs.
                Additionally, we strive to support local salons and stylists by connecting them with a wider audience and helping them grow their businesses.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li>Convenient online booking system</li>
                <li>Wide range of salon services</li>
                <li>Professional and experienced stylists</li>
                <li>Flexible appointment scheduling</li>
                <li>Secure payment processing</li>
                <li>Exceptional customer service</li>
            </ul>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or inquiries, feel free to contact us at <a href="mailto:contact@example.com">contact@maloon.com</a>.
                We're here to help you with anything you need!
            </p>
        </section>
        <Footer/>
        </>
    );
}

export default About;
