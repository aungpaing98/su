import React from "react";
import Intro from "../components/Intro";
import CDMCard from "../components/CDMCard";

import cdmIntro from "../data/cdmIntro";
import cdmDatas from "../data/cdmDatas";
import { nanoid } from "nanoid";

function CDM() {
  return (
    <div className="container px-3">
      <Intro data={cdmIntro} />
      {cdmDatas.map((cdmData) => {
        return <CDMCard key={nanoid()} cdmData={cdmData} />;
      })}
    </div>
  );
}

export default CDM;
