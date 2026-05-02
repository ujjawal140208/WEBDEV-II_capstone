import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  return (
    <div className="card">
      {/* INPUT BOX */}
      <div className="task-input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="✨ Add a new mission..."
        />
        <button onClick={addTask}>➕</button>
      </div>

      {/* TASK CONTAINER */}
      <div className="task-box">
        {tasks.map((task, index) => (
          <div className="task-item-anim" key={index}>
            <TaskItem task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}