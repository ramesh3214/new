import React from "react";
import '../style/forsaloon.css';
import { Link } from 'react-router-dom';

function ForSaloon(){
    return(
        <>
        <div className="background-image-container" >
      <div className="overlay-content">
        <h4>Welcome to MalOOn</h4>
        <p>join us as a partner</p>
        <Link to='NewSaloon'><button>Contact us</button></Link>
      </div>
    </div>
        </>

    );
}
export default ForSaloon;
