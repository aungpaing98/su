import React from "react";

function Intro(props) {
  const { title, description } = props.data;
  return (
    <div className="container text-center">
      <h1 className="my-4">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Intro;
