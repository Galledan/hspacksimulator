import React, { useEffect, useState } from "react";
import { useCard } from "../../context/CardContext";
import Randomly from "weighted-randomly-select";
import Card from "../Card/Card";
import "./pack.css";

function Pack({ cardSetName }) {
  const { allCards } = useCard();
  const [pack, setPack] = useState();

  const [commonCards, setCommonCards] = useState();
  const [rareCards, setRareCards] = useState();
  const [epicCards, setEpicCards] = useState();
  const [legendaryCards, setLegendaryCards] = useState();

  const distributeRarities = () => {
    const cardSet = allCards.filter((card) => card.set === cardSetName)

    const cc = cardSet.filter((card) => card.rarity === "COMMON");
    const rc = cardSet.filter((card) => card.rarity === "RARE");
    const ec = cardSet.filter((card) => card.rarity === "EPIC");
    const lc = cardSet.filter((card) => card.rarity === "LEGENDARY");

    setCommonCards(cc);
    setRareCards(rc);
    setEpicCards(ec);
    setLegendaryCards(lc);

    console.log("cards are ready");
  };

  const createPack = () => {
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
      return cardsArray[Math.floor(Math.random() * cardsArray.length)];
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
    <div className="cards">
      {pack && pack.map((card, i) => <Card key={i} card={card} />)}
    </div>
  );
}

export default Pack;
