import React from "react";

function CampaignCard(props) {
  const { title, descriptions, buttonText, imgsSrc } = props.campaign;
  const imgLeft = props.imgLeft;
  return (
    <>
      {imgLeft ? (
        <div className="row g-3 pb-5">
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[0]} alt="Campaign" />
              </div>
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[1]} alt="Campaign" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[2]} alt="Campaign" />
              </div>
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[3]} alt="Campaign" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 py-3 py-lg-0">
            <h3 className="fw-bold">{title}</h3>
            <p>{descriptions}</p>
            <button className="btn btn-primary">{buttonText}</button>
          </div>
        </div>
      ) : (
        <div className="row g-3 pb-5">
          <div className="col-12 col-lg-6 py-3 py-lg-0">
            <h3 className="fw-bold">{title}</h3>
            <p>{descriptions}</p>
            <button className="btn btn-primary">{buttonText}</button>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[0]} alt="Campaign" />
              </div>
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[1]} alt="Campaign" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[2]} alt="Campaign" />
              </div>
              <div className="col-6 p-3">
                <img className="img-fluid" src={imgsSrc[3]} alt="Campaign" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CampaignCard;
