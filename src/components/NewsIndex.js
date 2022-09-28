import React from "react";
import NewsCardHorizon from "./NewsCardHorizon";

function NewsIndex() {
  return (
    <div className="container g-5 py-5">
      <h1 className="pb-4">RECENT News</h1>
      <NewsCardHorizon />
      <NewsCardHorizon />
    </div>
  );
}

export default NewsIndex;
