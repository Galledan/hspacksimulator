import React, { useState,useEffect,createContext, useContext } from "react";
import api from "../api/hsapi";

const CardContext = createContext();

const CardProvider = ({ children }) => {

  const [cardSets, setCardSets] = useState([]);

  const getCardSet = async (cardSet) => {
    const res = await api.get(`/cards/sets/${cardSet}?collectible=1`);
    return res
  };

  const fetchCardSets = async () => {
    const setsArray = [
      { setName: 'Classic', varName: 'classic' },
      { setName: 'The%20Grand%20Tournament', varName: 'tgt' },
      { setName: 'Whispers%20of%20the%20Old%20Gods', varName: 'tgt' },
    ];

    const fetchedSets = await Promise.all(
      setsArray.map(async ({ setName }) => {
        const response = await getCardSet(setName);
        return { setName, data: response.data };
      })
    );

    setCardSets(fetchedSets);
  };

  useEffect(() => {
    if (cardSets.length === 0) {
      fetchCardSets();
    }
  }, [cardSets]);

  const value = { cardSets };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

const useCard = () => {
  const context = useContext(CardContext);

  return context;
};
export { CardProvider, useCard };
