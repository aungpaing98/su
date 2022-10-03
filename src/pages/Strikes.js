import React from "react";
import Intro from "../components/Intro";
import StrikeCard from "../components/StrikeCard";
import strikeIntro from "../data/strikeIntro";
import strikeData from "../data/strikes";

function Strikes() {
  console.log(strikeIntro);
  return (
    <>
      <Intro data={strikeIntro} />
      {strikeData.map((data) => (
        <StrikeCard strikeData={data} />
      ))}
    </>
  );
}

export default Strikes;
