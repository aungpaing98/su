import React from "react";
import ClubCard from "../components/ClubCard";
import clubsInfo from "../data/clubs";
import { nanoid } from "nanoid";

function Clubs() {
  return (
    <>
      <div className="container">
        <h1 className="text-center px-2">Other Clubs</h1>
        <div className="row g-5 pb-5">
          {clubsInfo.map((clubInfo) => {
            return <ClubCard key={nanoid()} data={clubInfo} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Clubs;
