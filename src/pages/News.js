import React from "react";
import NewsCard from "../components/NewsCard";
import news from "../data/news";

function News() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">News</h1>
        <div className="row g-4">
          {news.map((newItem) => {
            return <NewsCard key={newItem.id} news={newItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default News;
