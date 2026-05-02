import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Stats() {
  const { xp, level, streak } = useContext(GameContext);

  return (
    <div>
      <p>XP: {xp}</p>
      <p>Level: {level}</p>
      <p>🔥 Streak: {streak}</p>
    </div>
  );
}