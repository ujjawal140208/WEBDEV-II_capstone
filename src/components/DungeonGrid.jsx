import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function DungeonGrid() {
  const { tasks } = useContext(GameContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.done).length;

  return (
    <div className="grid">

      {/* NO TASK STATE */}
      {totalTasks === 0 && (
        <p className="empty-dungeon">No enemies yet...</p>
      )}

      {/* DUNGEON CELLS */}
      {Array.from({ length: totalTasks }).map((_, i) => (
        <div
          key={i}
          className={`cell ${i < completedTasks ? "cleared" : "enemy"}`}
        >
          {i < completedTasks ? "💎" : "👾"}
        </div>
      ))}

    </div>
  );
}