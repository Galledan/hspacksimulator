import React, { useEffect, useState } from "react";
import { useCard } from "../../context/CardContext";
import Randomly from "weighted-randomly-select";
import Card from "../Card/Card";
import "./pack.css"

function Pack({ cardSetName }) {
  const { allCards } = useCard();
  const [pack, setPack] = useState();

  const [commonCards, setCommonCards] = useState();
  const [rareCards, setRareCards] = useState();
  const [epicCards, setEpicCards] = useState();
  const [legendaryCards, setLegendaryCards] = useState();

  const distributeRarities = () => {
    const cardSet = allCards[cardSetName];

    const cc = cardSet.filter((card) => card.rarity === "Common");
    const rc = cardSet.filter((card) => card.rarity === "Rare");
    const ec = cardSet.filter((card) => card.rarity === "Epic");
    const lc = cardSet.filter((card) => card.rarity === "Legendary");

    setCommonCards(cc);
    setRareCards(rc);
    setEpicCards(ec);
    setLegendaryCards(lc);

    console.log("cards are ready");
  };

  const createPack = () => {
    let chance = Randomly.select([
      {
        chance: 0.71,
        result: "common",
      },
      {
        chance: 0.22,
        result: "rare",
      },
      {
        chance: 0.04,
        result: "epic",
      },
      {
        chance: 0.01,
        result: "legendary",
      },
    ]);

    let firstChance = Randomly.select([
      {
        chance: 0.92,
        result: "rare",
      },
      {
        chance: 0.04,
        result: "epic",
      },
      {
        chance: 0.01,
        result: "legendary",
      },
    ]);
    const newPack = [];

    const getRandomCard = (cardsArray) => {
      if (allCards) {
        return cardsArray[Math.floor(Math.random() * cardsArray.length)];
      }
    };

    switch (firstChance) {
      case "rare":
        newPack.push(getRandomCard(rareCards));
        break;
      case "epic":
        newPack.push(getRandomCard(epicCards));
        break;
      case "legendary":
        newPack.push(getRandomCard(legendaryCards));
        break;
      default:
        break;
    }

    for (let i = 1; i < 5; i++) {
      switch (chance) {
        case "common":
          newPack.push(getRandomCard(commonCards));
          break;
        case "rare":
          newPack.push(getRandomCard(rareCards));
          break;
        case "epic":
          newPack.push(getRandomCard(epicCards));
          break;
        case "legendary":
          newPack.push(getRandomCard(legendaryCards));
          break;
        default:
          break;
      }
    }
    setPack(newPack);
  };
  useEffect(() => {
    if (allCards) {
      distributeRarities();
    }
  }, []);

  useEffect(() => {
    if (commonCards) {
      createPack();
    }
  }, [commonCards]);

  return (
    <div className="cards">{pack && pack.map((card, i) => <Card key={i} card={card} />)}</div>
  );
}

export default Pack;
