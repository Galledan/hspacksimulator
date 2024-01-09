import React, { useEffect, useState } from "react";
import { useCard } from "./context/CardContext";
import Packs from "./components/Packs/Packs";
import "./App.css"

function App() {
  const { allCards, isPackOpened } = useCard();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(allCards) {
      setLoading(false)
      console.log(allCards);
    }
  }, [allCards]);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="app-container">
          {!isPackOpened && <div className="welcome-container">
          <h1>Welcome to</h1>
          <h1>the</h1>
          <img src={require("./assets/Hearthstone_Logo.png")} alt="logo" />
          <h2>Pack Simulator</h2>
          </div>}
          {!isPackOpened &&<h2>Packs</h2>}
          <Packs />
          {!isPackOpened &&
          <div className="explain-container">
            <p>Select a pack to open</p>
          </div>}
        </div>
      )}
    </div>
  );
}

export default App;
