import React, { useState, useEffect, createContext, useContext } from "react";
import data from "../data/data.json";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [allCards, setAllCards] = useState();

  
  useEffect(() => {
    setAllCards(data)
  }, []);

  const value = { allCards };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

const useCard = () => {
  const context = useContext(CardContext);

  return context;
};
export { CardProvider, useCard };
