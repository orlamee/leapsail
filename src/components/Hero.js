import React from "react";
import { Link } from "react-router-dom";
import google from "../img/google.png";
import apple from "../img/apple.png";

function Hero() {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 right">
            <h2 className="mb-5">We are revolutionising<br/>your concept of comfort.</h2>
            <h6 className="mb-5">Created with a can do and achievers mindset. A self-onboarding <br/>application with features that open you to a new way.</h6>
            <a className='btn btn-warning text-white px-5 py-3 rounded-pill' href="/">Get Started</a>
            <div className="mt-5">
              <Link to="/"><img src={apple} alt="" title="Download on Appstore" className="img-fluid me-3" /></Link>
              <Link to="/"><img src={google} alt="" title="Download on Playstore" className="img-fluid me-3" /></Link>
            </div>
          </div>
          <div className="col-md-6 left"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;