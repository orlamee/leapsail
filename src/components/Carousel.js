import React from "react";
import one from "../img/one.png";
import two from "../img/two.png";

function Carousel() {
  return (
    <section className="carousel-section">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={one} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 investment">
                  <h2 className="mb-4">Investment</h2>
                  <h5 className="mb-4">Reap enticing investment rewards! Be confident<br/>in your investment because of the security we<br/>provide you. </h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="row">
                  <div className="col-md-6 investment">
                    <h2 className="mb-4">Pay Small Small</h2>
                    <h5 className="mb-4">No matter how solid your plans are,<br/>sometimes you don t have all the money.</h5>
                    <a href="/" className="fs-5">Learn More</a>
                  </div>
                  <div className="col-md-6">
                    <img src={two} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={one} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 investment">
                  <h2 className="mb-4">Investment</h2>
                  <h5 className="mb-4">Reap enticing investment rewards! Be confident<br/>in your investment because of the security we<br/>provide you. </h5>
                  <a href="/" className="fs-5">Learn More</a>
                </div>
                <div className="row">
                  <div className="col-md-6 investment">
                    <h2 className="mb-4">Pay Small Small</h2>
                    <h5 className="mb-4">No matter how solid your plans are,<br/>sometimes you don t have all the money.</h5>
                    <a href="/" className="fs-5">Learn More</a>
                  </div>
                  <div className="col-md-6">
                    <img src={two} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </section>
  )
}

export default Carousel;