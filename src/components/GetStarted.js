import React from "react";
import tour from "../img/tour.png"

function GetStarted () {
  return (
    <section className="get-started">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h2 className="mb-3">Work in the way that works for you!</h2>
            <h6 className="mb-3">What would you like to manage with Leapsail.com?</h6>
            <img src={tour} alt="" className="img-fluid mb-5" />
            <a className='btn btn-warning text-white px-5 py-3 rounded-pill' href="/">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}  

export default GetStarted;