import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.card.coverImg}`)}
        className="card--image"
        alt={`${props.card.title}`}
      />
      <div className="card--stats">
        <img
          src={require(`../images/card-star.png`)}
          className="card--star"
          alt="logo of a star"
        />
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviewCount}) • </span>
        <span className="gray">{props.card.location}</span>
      </div>
      <p>{props.card.title}</p>
      <p>
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </div>
  );
}
