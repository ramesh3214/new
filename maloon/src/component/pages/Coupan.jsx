import React from "react";
import '../style/coupan.css';
import { Link } from "react-router-dom";

function Coupan(){
    return(
        <>
        <section className="coupan bg-customGreen">
            <Link to='ProductList'><p>Flat offer for new user Apply code!! "WELCOME75"</p></Link>
        </section>
        </>

    );
}
export default Coupan;