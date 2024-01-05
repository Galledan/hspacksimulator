import React, { useEffect, useState } from "react";
import { useCard } from "./context/CardContext";
import Packs from "./components/Packs/Packs";

function App() {
  const { allCards } = useCard();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    if(allCards) {
      setLoading(false)
     
    }
  }, [allCards]);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Packs />
        </div>
      )}
    </div>
  );
}

export default App;
