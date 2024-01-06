import React, { useState } from "react";
import "./card.css";
function Card({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);



  const handleClick = () => {
    setIsFlipped(true);
  };

  return (
    <div className="card-container">
      <div className="card" onClick={handleClick}>
        <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
          <div className="card-front">
            <img
              className="passive-card"
              src={require("../../assets/cardback.webp")}
              alt="cardback"
            />
          </div>
          <div className="card-back">
            <img className="active-card" src={`https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${card.id}.png`} alt={card.name} />
          </div>
          {!isFlipped && <div className={`rarity ${card.rarity} `} />}
        </div>
      </div>
      
    </div>
  );
}

export default Card;
