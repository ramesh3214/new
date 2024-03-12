import React  from 'react';
import './style/carousel.css';
import img1 from './image/haircolour.png.jpg'
import img2 from './image/facial.png.jpg'
import img3 from './image/haircut.png.jpg'
import img4 from './image/greg.jpg'
import img5 from './image/makeup.jpg'
import img6 from './image/pedicure.png.jpg'






function Carousel(){



    
    return(
        <>
         <h1 className='h-primary'>Recommended</h1>
        <section className='sl-bar'>
       
        <div className="wrapper">
  
  <ul className="carousel">
    <li className="card">
      <div className="img">
        <img src={img1} alt="img" draggable="false" />
      </div>
      <h2>Blanche Pearson</h2>
      <span>Sales Manager</span>
    </li>
    <li className="card">
      <div className="img">
        <img src={img2} alt="img" draggable="false" />
      </div>
      <h2>Joenas Brauers</h2>
      <span>Web Developer</span>
    </li>
    <li className="card">
      <div className="img">
        <img src={img3} alt="img" draggable="false" />
      </div>
      <h2>Lariach French</h2>
      <span>Online Teacher</span>
    </li>
    <li className="card">
      <div className="img">
        <img src={img4} alt="img" draggable="false" />
      </div>
      <h2>James Khosravi</h2>
      <span>Freelancer</span>
    </li>
    <li className="card">
      <div className="img">
        <img src={img5} alt="img" draggable="false" />
      </div>
      <h2>Kristina Zasiadko</h2>
      <span>Bank Manager</span>
    </li>
    <li className="card">
      <div className="img">
        <img src={img6} alt="img" draggable="false" />
      </div>
      <h2>Donald Horton</h2>
      <span>App Designer</span>
    </li>
  </ul>
  
</div>
</section>

        </>

    );
}
export default Carousel;