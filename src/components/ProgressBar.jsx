import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function ProgressBar() {
  const { xp } = useContext(GameContext);
  const progress = xp % 100;

  return (
    <div className="progress-wrapper">
      <div className="xp-bar">
        <div
          className="xp-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}