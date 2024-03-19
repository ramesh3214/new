import React  from 'react';
import { Link } from 'react-router-dom';
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
      <Link><p className='text-xs'>Unisex Saloon</p></Link>
    </li>
    <li className="card">
      <div className="img">
        <img src={img2} alt="img" draggable="false" />
      </div>
      
    </li>
    <li className="card">
      <div className="img">
        <img src={img3} alt="img" draggable="false" />
      </div>
     
    </li>
    <li className="card">
      <div className="img">
        <img src={img4} alt="img" draggable="false" />
      </div>
      
    </li>
    <li className="card">
      <div className="img">
        <img src={img5} alt="img" draggable="false" />
      </div>
      
    </li>
    <li className="card">
      <div className="img">
        <img src={img6} alt="img" draggable="false" />
      </div>
      
    </li>
  </ul>
  
</div>
</section>

        </>

    );
}
export default Carousel;