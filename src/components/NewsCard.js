import React from "react";

function NewsCard(props) {
  const { imgSrc1, imgSrc2, title, description, btnText } = props.news;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-6">
            <img src={imgSrc1} className="card-img-top" alt="Recent News" />
          </div>
          <div className="col-6">
            <img src={imgSrc2} className="card-img-top" alt="Recent News" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="link-info">{btnText}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
