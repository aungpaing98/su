import React from "react";

function ClubCard(props) {
  const { imgSrc, title, establishedYear } = props.data;
  return (
    <div className="col-6 col-lg-4">
      <div className="card border-0 d-flex align-items-center">
        <img
          src={imgSrc}
          alt={title}
          width="240px"
          height="240px"
          className=""
        />
        <div className="card-body text-center">
          <h5 className="card-title text-bold text-info">{title}</h5>
          {establishedYear && (
            <p className="text-muted">Estimated year - {establishedYear}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
