import React from "react";
import NewsCard from "./NewsCard";
import news from "../data/news";

function News() {
  //   console.log(news);
  return (
    <div className="container">
      <h1 className="text-center">News</h1>
      <div className="row g-4">
        {/* {news.map((newItem) => {
          console.log(newItem);
          return <News news={news} />;
        })} */}
        {news.map((newItem) => {
          return <NewsCard key={newItem.id} news={newItem} />;
        })}
      </div>
    </div>
  );
}

export default News;
