import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, deleteToy, updateLikes }) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      deleteToy={deleteToy}
      updateLikes={updateLikes}
    />
  ));

  return <div id="toy-collection">{toyCards}</div>;
}

export default ToyContainer;