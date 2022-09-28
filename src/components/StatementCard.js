import React from "react";

function StatementCard(props) {
  const { id, imgSrc, title, description, date } = props.statement;
  return (
    <div className="col-md-6">
      <div className="card card-box-shadow mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imgSrc}
              className="img-fluid rounded-start"
              alt="Statement banner"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">{date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatementCard;
