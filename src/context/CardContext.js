import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [allCards, setAllCards] = useState();
  const [isPackOpened, setIsPackOpened] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.hearthstonejson.com/v1/190920/enUS/cards.collectible.json');
      setAllCards(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {


    fetchData();
  }, []); 
  
  // useEffect(() => {
  //   setAllCards(data)
  // }, []);

  const value = { allCards,isPackOpened, setIsPackOpened };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

const useCard = () => {
  const context = useContext(CardContext);

  return context;
};
export { CardProvider, useCard };
