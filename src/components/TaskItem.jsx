import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";

export default function TaskItem({ task }) {
  const { completeTask } = useContext(GameContext);
  const [clicked, setClicked] = useState(false);

  const handleComplete = () => {
    if (task.done) return;

    setClicked(true);

    // small delay for animation feel
    setTimeout(() => {
      completeTask(task.id);
      setClicked(false);
    }, 150);
  };

  return (
    <div
      className={`task 
        ${task.done ? "completed" : ""} 
        ${clicked ? "clicking" : ""}`}
    >
      <span className="task-text">
        👾 {task.text}
      </span>

      <div
        className={`tick ${task.done ? "active" : ""}`}
        onClick={handleComplete}
      >
        ✔
      </div>
    </div>
  );
}