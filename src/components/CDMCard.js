import React from "react";

function CDMCard(props) {
  const { title, description, imgSrc } = props.cdmData;
  return (
    // <></>
    <div className="row g-5 py-3">
      <div className="col-12 col-lg-6 py-3 py-lg-0">
        <h3 className="fw-bold pb-3">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="col-12 col-lg-6 py-3 py-lg-0">
        {typeof imgSrc == "string" ? (
          <img src={imgSrc} alt="Campaing" />
        ) : (
          <>
            <div className="row">
              <div className="col-6">
                <img className="img-fluid" src={imgSrc[0]} alt="Campaign" />
              </div>
              <div className="col-6">
                <img className="img-fluid" src={imgSrc[1]} alt="Campaign" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img className="img-fluid" src={imgSrc[2]} alt="Campaign" />
              </div>
              <div className="col-6">
                <img className="img-fluid" src={imgSrc[3]} alt="Campaign" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CDMCard;
