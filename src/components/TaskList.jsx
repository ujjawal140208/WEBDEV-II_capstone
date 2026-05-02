import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, addTask } = useContext(GameContext);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <div>

      {/* INPUT */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a quest..."
        />

        <button onClick={handleAdd}>
          Add
        </button>
      </div>

      {/* TASKS */}
      <div style={{ marginTop: "15px" }}>
        {tasks.length === 0 && (
          <p style={{ opacity: 0.6 }}>No quests yet...</p>
        )}

        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

    </div>
  );
}