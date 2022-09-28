import React from "react";
import style from "./Section.module.css";

function Union(props) {
  const { title, description, logo, subTitle } = props;
  return (
    <div className="container g-5 py-5">
      <h1 className="mb-4">{title}</h1>
      <div className="row g-5">
        <div className="col-md-6">
          <p className={`${style.description}`}>{description}</p>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-between text-center">
          <div className="">
            <img className="img-fluid" src={logo} alt="Studnet Union Logo" />
          </div>
          {subTitle ? <h1 className="px-3 lh-base">{subTitle}</h1> : <></>}
        </div>
      </div>
    </div>
  );
}

export default Union;
