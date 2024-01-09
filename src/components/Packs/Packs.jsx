import React, { useState } from "react";
import Pack from "../Pack/Pack";
import "./packs.css";
import { useCard } from "../../context/CardContext";

function Packs() {
  const cardSetList = [
    { setName: "EXPERT1", setImg: "Legacy_-_Card_pack.webp" },
    {
      setName: "GVG",
      setImg: "Goblins_vs_Gnomes_-_Card_pack.webp",
    },
    {
      setName: "TGT",
      setImg: "The_Grand_Tournament_-_Card_pack.webp",
    },
    {
      setName: "OG",
      setImg: "Whispers_of_the_Old_Gods_-_Card_pack.webp",
    },
    {
      setName: "GANGS",
      setImg: "Mean_Streets_of_Gadgetzan_-_Card_pack.webp",
    },
    {
      setName: "UNGORO",
      setImg: "Journey_to_UnGoro_-_Card_pack.webp",
    },
    {
      setName: "ICECROWN",
      setImg: "Knights_of_the_Frozen_Throne_-_Card_pack.webp",
    },
    {
      setName: "LOOTAPALOOZA",
      setImg: "Kobolds_and_Catacombs_-_Card_pack.webp",
    },
    { setName: "GILNEAS", setImg: "The_Witchwood_-_Card_pack.webp" },
    {
      setName: "BOOMSDAY",
      setImg: "The_Boomsday_Project_-_Card_pack.webp",
    },
    {
      setName: "TROLL",
      setImg: "Rastakhan_Rumble_-_Card_pack.webp",
    },
    { setName: "DALARAN", setImg: "Rise_of_Shadows_-_Card_pack.webp" },
    {
      setName: "ULDUM",
      setImg: "Saviors_of_Uldum_-_Card_pack.webp",
    },
    {
      setName: "DRAGONS",
      setImg: "Descent_of_Dragons_-_Card_pack.webp",
    },
    {
      setName: "BLACK_TEMPLE",
      setImg: "Ashes_of_Outland_-_Card_pack.webp",
    },
    {
      setName: "SCHOLOMANCE",
      setImg: "Scholomance_Academy_-_Card_pack.webp",
    },
    {
      setName: "DARKMOON_FAIRE",
      setImg: "Madness_at_the_Darkmoon_Faire_-_Card_pack.webp",
    },
    {
      setName: "THE_BARRENS",
      setImg: "Forged_in_the_Barrens_-_Card_pack.webp",
    },
    { setName: "LEGACY", setImg: "Legacy_-_Card_pack.webp" },
    { setName: "CORE", setImg: "Standard_-_Card_pack.webp" },
    { setName: "VANILLA", setImg: "Standard_-_Card_pack.webp" },
    {
      setName: "STORMWIND",
      setImg: "United_in_Stormwind_-_Card_pack.webp",
    },
    {
      setName: "ALTERAC_VALLEY",
      setImg: "Fractured_in_Alterac_Valley_-_Card_pack.webp",
    },
    {
      setName: "THE_SUNKEN_CITY",
      setImg: "Voyage_to_the_Sunken_City_-_Card_pack.webp",
    },
    {
      setName: "REVENDRETH",
      setImg: "Murder_at_Castle_Nathria_-_Card_pack.webp",
    },
    {
      setName: "RETURN_OF_THE_LICH_KING",
      setImg: "March_of_the_Lich_King_-_Card_pack.webp",
    },
    { setName: "TITANS", setImg: "TITANS_-_Card_pack.webp" },
  ];
  const { isPackOpened, setIsPackOpened } = useCard();

  const [cardSet, setCardSet] = useState("");

  const openPack = (cardSetName) => {
    setCardSet(cardSetName);
    setIsPackOpened(true);
  };

  return (
    <div className="packs-container">
      <div className="packs">
        {!isPackOpened &&
          cardSetList.map((cardSet, i) => (
            <div
              className="pack"
              key={i}
              onClick={() => openPack(cardSet.setName)}
            >
              <img
                src={require(`../../assets/packs/${cardSet.setImg}`)}
                alt={cardSet.setName}
              />
            </div>
          ))}
      </div>

      {isPackOpened && <Pack cardSetName={cardSet} />}
    </div>
  );
}

export default Packs;
