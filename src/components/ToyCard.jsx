import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={"toy.image" /* Toy's Image */}
        alt={"toy.name" /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{"toy.likes" /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={() => onLike(toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDelete(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
