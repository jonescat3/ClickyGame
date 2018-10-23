//sets up the reusable FriendCard component
import React from "react";
import "./friendcard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt="dog" src={props.image} />
    </div>
  </div>
);

export default FriendCard;