import React, { useState } from "react";
import "./card.css";

function Card({ card }) {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="card-container">
      <div onClick={() => setShowCard(true)} className={"card " + card.rarity}>
        {showCard !== true && (
          <img src={require("../../assets/cardback.webp")} alt="cardback" />
        )}
        {showCard === true && <img src={card.img} alt={card.name} />}
      </div>
      <div className="rarity"/>
    </div>
  );
}

export default Card;
