import React, { useState } from "react";
import Pack from "../Pack/Pack";
import "./packs.css";

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

  // CardSet": {"ALTERAC_VALLEY": 1626, "BASIC": 2, "BATTLEGROUNDS": 1453, "BATTLE_OF_THE_BANDS": 1809, "BLACK_TEMPLE": 1414, "BLANK": 9, "BOOMSDAY": 1127, "BRM": 14, "CHEAT": 8, "CORE": 1637, "CREDITS": 16, "DALARAN": 1130, "DARKMOON_FAIRE": 1466, "DEBUG_SP": 10, "DEMO": 6, "DEMON_HUNTER_INITIATE": 1463, "DRAGONS": 1347, "EXPERT1": 3, "FP1": 12, "FP2": 14, "GANGS": 25, "GANGS_RESERVE": 26, "GILNEAS": 1125, "GVG": 13, "HERO_SKINS": 17, "HOF": 4, "ICECROWN": 1001, "INVALID": 0, "KARA": 23, "KARA_RESERVE": 24, "LEGACY": 1635, "LETTUCE": 1586, "LOE": 20, "LOOTAPALOOZA": 1004, "MERCENARIES_DEV": 1705, "MISSIONS": 5, "NAXX": 12, "NONE": 7, "OG": 21, "OG_RESERVE": 22, "PATH_OF_ARTHAS": 1869, "PE1": 13, "PE2": 15, "PLACEHOLDER_202204": 1810, "PROMO": 11, "RETURN_OF_THE_LICH_KING": 1776, "REVENDRETH": 1691, "REWARD": 4, "SCHOLOMANCE": 1443, "SLUSH": 19, "STORMWIND": 1578, "TAVERNS_OF_TIME": 1143, "TB": 18, "TEMP1": 15, "TEST_TEMPORARY": 1, "TGT": 15, "THE_BARRENS": 1525, "THE_SUNKEN_CITY": 1658, "TITANS": 1858, "TROLL": 1129, "TUTORIAL": 1904, "ULDUM": 1158, "UNGORO": 27, "VANILLA": 1646, "WAILING_CAVERNS": 1559, "WILD_EVENT": 1439, "WILD_WEST": 1892, "WONDERS": 1898, "YEAR_OF_THE_DRAGON": 1403}, 

  const [isPackOpened, setIsPackOpened] = useState(false);

  const [cardSet, setCardSet] = useState("");

  const openPack = (cardSetName) => {
    setCardSet(cardSetName);
    setIsPackOpened(true);
  };

  return (
    <div className="packs-container">
      <h2>Packs</h2>
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
