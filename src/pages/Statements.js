import React from "react";
import StatementCard from "../components/StatementCard";
import statements from "../data/statements";

function Statements() {
  return (
    <div className="container">
      <h1 className="text-center">Statements</h1>
      <div className="row">
        {statements.map((statement) => {
          return <StatementCard key={statement.id} statement={statement} />;
        })}
      </div>
    </div>
  );
}

export default Statements;
