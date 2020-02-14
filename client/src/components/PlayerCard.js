import React from "react";

export const PlayerCard = (props) => {
  return (
    <div className="card-wrapper">
      <h1 className="card-name">{props.players.name}</h1>
      <h2 className="card-team">Team: {props.players.team}</h2>
      <h4 className="card-rank">World Ranking: {props.players.rank}</h4>
    </div>
  );
};
