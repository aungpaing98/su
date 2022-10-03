import React from "react";
import otherClubInfo from "../data/otherClubs";
import ClubCard from "../components/ClubCard";
import { nanoid } from "nanoid";

function OtherClub() {
  return (
    <>
      <div className="container">
        <h1 className="text-center px-2">Other Clubs</h1>
        <div className="row g-5 pb-5">
          {otherClubInfo.map((clubInfo) => {
            return <ClubCard key={nanoid()} data={clubInfo} />;
          })}
        </div>
      </div>
    </>
  );
}

export default OtherClub;
