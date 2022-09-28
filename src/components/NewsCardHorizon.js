import React from "react";

const cardInfo = {
  imagesrc: "/utils/news.png",
  actionText: "Fundraisin",
  title: "Title",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestia quis dicta odit excepturi explicabo nihil blanditiis vitae quisquam maiores modi, ut ad non distinctio ipsum sapiente fugiat qui? Fugiat iste eos vero harum exercitationem ipsa pariatur. Consequatur quidem obcaecati fugit enim tempora similique unde quis error voluptas amet corrupti rerum dolores, ratione modi quaerat repellendus fugiat eos deserunt id natus recusandae in. Quibusdam incidunt iure ipsam pariatur magnam sapiente labore consectetur sint voluptatibus earum vitae, maxime neque minus quas voluptatum id et magni debitis ab nemo totam a? Enim architecto labore commodi officiis nostrum nulla facere quia neque earum pariatur!",
};

function NewsCardHorizon() {
  return (
    <div className="row my-3">
      <div className="col-4 col-md-2">
        <img src={cardInfo.imagesrc} alt="News" className="img-fluid" />
      </div>
      <div className="col-8 col-md-10 card-body d-flex flex-column justify-content-between">
        <div>
          <button type="button" className="btn btn-primary">
            {cardInfo.actionText}
          </button>
        </div>
        <h5 className="card-title">{cardInfo.title}</h5>
        <div className="d-flex ">
          <p className="card-text text-truncate p-0 m-0">
            {cardInfo.description}
          </p>
          <button type="button" className="btn btn-link p-0 b-0">
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCardHorizon;
