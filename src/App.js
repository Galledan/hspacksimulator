import React, { useEffect, useState } from "react";
import { useCard } from "./context/CardContext";

function App() {
  const { cardSets } = useCard();
  const [loading, setLoading] = useState(true);
  const [pack, setPack] = useState()

  const openPack = (setName) => {
    const targetSet = cardSets.find((set) => set.setName === setName);

    if (!targetSet) {
      console.error(`Set ${setName} not found.`);
      return [];
    }

    const namesFromSet = targetSet.data.map((card) => card.img);

  const randomNames = [];
  const numberOfNamesToSelect = Math.min(5, namesFromSet.length);

  for (let i = 0; i < numberOfNamesToSelect; i++) {
    const randomIndex = Math.floor(Math.random() * namesFromSet.length);
    randomNames.push(namesFromSet.splice(randomIndex, 1)[0]);
  }

  return randomNames;
  };

  useEffect(() => {
    if (cardSets.length > 0) {
      setLoading(false);

      const firstPack = openPack("Classic");

      if (firstPack.length > 0) {
        console.log("Opened Pack:", firstPack);
        setPack(firstPack)
      } else {
        console.log("Array is not ready with filled data yet.");
      }
    }
  }, [cardSets]);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            {pack.map(card => (
              <img src={card} alt={card} height={300} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
