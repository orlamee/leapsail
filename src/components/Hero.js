import React from "react";
// import bg from "../img/bg.png";

function Hero() {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 right">
            <h2 className="mb-5">We are revolutionising<br/>your concept of comfort.</h2>
            <h6 className="mb-5">Created with a can do and achievers mindset. A self-onboarding <br/>application with features that open you to a new way.</h6>
            <a className='btn btn-warning text-white px-4 py-3 rounded-pill' href="/">Get Started</a>
          </div>
          <div className="col-md-6 left"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;