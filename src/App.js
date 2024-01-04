import React, { useEffect, useState } from "react";
import Pack from "./components/Pack/Pack";
import { useCard } from "./context/CardContext";

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
          <Pack cardSetName="Classic" />
        </div>
      )}
    </div>
  );
}

export default App;
