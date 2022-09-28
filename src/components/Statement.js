import React from "react";
import StatementCard from "./StatementCard";
import statements from "../data/statements";

function Statement() {
  return (
    <div className="container">
      <h1 className="text-center">Statements</h1>
      <div className="row">
        {statements.map((statement) => {
          console.log(statement);
          return <StatementCard statement={statement} />;
        })}
      </div>
    </div>
  );
}

export default Statement;
