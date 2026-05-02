import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Heatmap() {
  const { activity } = useContext(GameContext);

  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d.toISOString().slice(0, 10);
  }).reverse();

  return (
    <div className="heatmap">
      {days.map((day) => {
        const count = activity[day] || 0;

        return (
          <div
            key={day}
            className={`heat-cell level-${Math.min(count, 4)}`}
            title={`${day}: ${count} tasks`}
          />
        );
      })}
    </div>
  );
}