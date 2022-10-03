import React from "react";
import associations from "../data/studentAssociations";

import ClubCard from "../components/ClubCard";
import { nanoid } from "nanoid";

function StudentsAssociation() {
  return (
    <>
      <div className="container">
        <h1 className="text-center px-2">Students' Associations</h1>
        <div className="row g-5 pb-5">
          {associations.map((association) => {
            return <ClubCard key={nanoid()} data={association} />;
          })}
        </div>
      </div>
    </>
  );
}

export default StudentsAssociation;
