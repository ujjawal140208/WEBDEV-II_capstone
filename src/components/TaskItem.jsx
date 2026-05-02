import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function TaskItem({ task }) {
  const { addXP } = useContext(GameContext);

  const completeTask = () => {
    if (!task.done) {
      task.done = true;
      addXP(10);
    }
  };

  return (
    <div className={`task ${task.done ? "completed" : ""}`}>
      <span>{task.text}</span>

      <div
        className={`tick ${task.done ? "active" : ""}`}
        onClick={completeTask}
      >
        ✔
      </div>
    </div>
  );
}