import { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setLevel(Math.floor(xp / 100) + 1);
  }, [xp]);

  const addXP = (amount) => {
    setXp(prev => prev + amount);
  };

  return (
    <GameContext.Provider value={{ xp, level, streak, setStreak, addXP }}>
      {children}
    </GameContext.Provider>
  );
};