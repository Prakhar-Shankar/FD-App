import React from "react";

export default function Carousel() {
  return (
    <div> 
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel" >
        <div className="craousel-caption mt-10" style={{zIndex: "10"}}>
            <form class="d-flex m-2 ">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success text-white bg-success " type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            
            <img
              src="https://source.unsplash.com/random/300×300?burgers"
              className="d-block w-100"
              style={{filter: "brightness(50%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300?pastry"
              className="d-block w-100"
              style={{filter: "brightness(50%)"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300?barbeque"
              className="d-block w-100"
              style={{filter: "brightness(50%)"}}
              alt="..."
            />
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
            
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  );
}
