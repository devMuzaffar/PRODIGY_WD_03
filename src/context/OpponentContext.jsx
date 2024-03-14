import { createContext, useState } from "react";

export const OpponentContext = createContext();

export const OpponentProvider = ({ children }) => {
  // player - Player Opponent
  // enemy  - Enemy Opponent
  const [isOpponent, setIsOpponent] = useState("");

  return (
    <OpponentContext.Provider value={{ isOpponent, setIsOpponent }}>
      {children}
    </OpponentContext.Provider>
  );
};
