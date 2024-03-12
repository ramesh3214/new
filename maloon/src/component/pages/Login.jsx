import React, { useState } from 'react';
import '../style/login.css';
import { Form, Link } from 'react-router-dom';
import Footer from '../Footer';

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };
  

  return (
    <>
    <section className='login1'>
      <div id="container1" className={`container1 ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        {/* FORM SECTION */}
        <div className="row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group1">
                  <i className="bx bxs-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group1">
                  <i className="bx bx-mail-send" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group1">
                  <i className="bx bx-mail-send" />
                  <input  type="text" placeholder="Number" />
                
                  
                  
                </div>
                <div className="input-group1">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-group1">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Confirm password" />
                </div>
                <button className='signup-btn'>Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN UP */}
          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group1">
                  <i className="bx bxs-user" />
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group1">
                  <i className="bx bxs-lock-alt" />
                  <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
                <p>
                  <Link>Forgot password?</Link>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/* END FORM SECTION */}
        {/* CONTENT SECTION */}
        <div className="row content-row">
          {/* SIGN IN CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome to MalOOn</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          {/* END SIGN IN CONTENT */}
          {/* SIGN UP CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up font-medium"></div>
            <div className="text sign-up ">
              <h2>"Join us now for exclusive benefits!"</h2>
            </div>
          </div>
          {/* END SIGN UP CONTENT */}
        </div>
        {/* END CONTENT SECTION */}
      </div>
    </section>
    <div>
    <Footer/>
    </div>
    
    </>
  );
}

export default Login;
