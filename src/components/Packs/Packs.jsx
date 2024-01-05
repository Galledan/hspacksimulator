import React, { useState } from "react";
import Pack from "../Pack/Pack";
import "./packs.css"

function Packs() {
  const cardSetList = [
    { setName: "Classic", setImg: "Legacy_-_Card_pack.webp" },
    {
      setName: "Goblins vs Gnomes",
      setImg: "Goblins_vs_Gnomes_-_Card_pack.webp",
    },
    {
      setName: "The Grand Tournament",
      setImg: "The_Grand_Tournament_-_Card_pack.webp",
    },
    {
      setName: "Whispers of the Old Gods",
      setImg: "Whispers_of_the_Old_Gods_-_Card_pack.webp",
    },
    {
      setName: "Mean Streets of Gadgetzan",
      setImg: "Mean_Streets_of_Gadgetzan_-_Card_pack.webp",
    },
    {
      setName: "Journey to Un'Goro",
      setImg: "Journey_to_UnGoro_-_Card_pack.webp",
    },
    {
      setName: "Knights of the Frozen Throne",
      setImg: "Knights_of_the_Frozen_Throne_-_Card_pack.webp",
    },
    {
      setName: "Kobolds & Catacombs",
      setImg: "Kobolds_and_Catacombs_-_Card_pack.webp",
    },
    { setName: "The Witchwood", setImg: "The_Witchwood_-_Card_pack.webp" },
    {
      setName: "The Boomsday Project",
      setImg: "The_Boomsday_Project_-_Card_pack.webp",
    },
    {
      setName: "Rastakhan's Rumble",
      setImg: "Rastakhan_Rumble_-_Card_pack.webp",
    },
    { setName: "Rise of Shadows", setImg: "Rise_of_Shadows_-_Card_pack.webp" },
    {
      setName: "Saviors of Uldum",
      setImg: "Saviors_of_Uldum_-_Card_pack.webp",
    },
    {
      setName: "Descent of Dragons",
      setImg: "Descent_of_Dragons_-_Card_pack.webp",
    },
    {
      setName: "Ashes of Outland",
      setImg: "Ashes_of_Outland_-_Card_pack.webp",
    },
    {
      setName: "Scholomance Academy",
      setImg: "Scholomance_Academy_-_Card_pack.webp",
    },
    {
      setName: "Madness At The Darkmoon Faire",
      setImg: "Madness_at_the_Darkmoon_Faire_-_Card_pack.webp",
    },
    {
      setName: "Forged in the Barrens",
      setImg: "Forged_in_the_Barrens_-_Card_pack.webp",
    },
    { setName: "Legacy", setImg: "Legacy_-_Card_pack.webp" },
    { setName: "Core", setImg: "Standard_-_Card_pack.webp" },
    { setName: "Vanilla", setImg: "Standard_-_Card_pack.webp" },
    {
      setName: "United in Stormwind",
      setImg: "United_in_Stormwind_-_Card_pack.webp",
    },
    {
      setName: "Fractured in Alterac Valley",
      setImg: "Fractured_in_Alterac_Valley_-_Card_pack.webp",
    },
    {
      setName: "Voyage to the Sunken City",
      setImg: "Voyage_to_the_Sunken_City_-_Card_pack.webp",
    },
    {
      setName: "Murder at Castle Nathria",
      setImg: "Murder_at_Castle_Nathria_-_Card_pack.webp",
    },
    {
      setName: "March of the Lich King",
      setImg: "March_of_the_Lich_King_-_Card_pack.webp",
    },
    {
      setName: "Festival of Legends",
      setImg: "Festival_of_Legends_-_Card_pack.webp",
    },
    { setName: "TITANS", setImg: "TITANS_-_Card_pack.webp" },
  ];

  const [isPackOpened, setIsPackOpened] = useState(false);

  const [cardSet, setCardSet] = useState("")

  const openPack = (cardSetName) => {
    setCardSet(cardSetName)
    setIsPackOpened(true)
  }

  return (
    <>
      {!isPackOpened && cardSetList.map((cardSet, i) => (
        <div className="pack" key={i} onClick={() => openPack(cardSet.setName)}>
          <img
            src={require(`../../assets/packs/${cardSet.setImg}`)}
            alt={cardSet.setName}
          />
          <p>{cardSet.setName}</p>
        </div>
      ))}
      {isPackOpened &&
      <Pack cardSetName={cardSet} />}
    </>
  );
}

export default Packs;
