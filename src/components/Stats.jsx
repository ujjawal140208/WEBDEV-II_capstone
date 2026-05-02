import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Stats() {
  const { xp } = useContext(GameContext);

  return (
    <div className="stats">
      <div>XP: {xp}</div>
    </div>
  );
}