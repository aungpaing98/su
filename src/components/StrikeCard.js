import React from "react";

function StrikeCard(props) {
  const { title, imgSrc } = props.strikeData;
  return (
    <div className="container">
      <h2>{title}</h2>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner d-flex justify-content-center">
          <div className="carousel-item active">
            <img src={imgSrc[0]} className="d-block w-30" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgSrc[1]} className="d-block w-30" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgSrc[2]} className="d-block w-30" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrikeCard;
