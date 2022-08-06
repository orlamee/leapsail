import React from "react";
import support from "../img/support.png"

function Support () {
  return (
    <section className="support">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={support} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6" style={{marginTop: "75px"}}>
            <h2 className="mb-4">24/7 customer support</h2>
            <h6>Our team is here to give you personalized support within the<br/>hour - available 24/7. Join daily live webinars, watch our<br/>tutorials, or browse through our knowledge bas</h6>
          </div>
        </div>
      </div>
    </section>
  )
}  

export default Support;