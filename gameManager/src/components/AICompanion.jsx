import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

const messages = [
  "⚔️ Ready for your next quest?",
  "🔥 Stay focused, hero!",
  "💀 The dungeon awaits...",
  "✨ You're doing great!",
];

const compliments = [
  "🔥 Great job!",
  "⚔️ Enemy defeated!",
  "💎 Quest completed!",
  "👑 You're unstoppable!",
];

export default function AICompanion() {
  const { tasks } = useContext(GameContext);
  const [message, setMessage] = useState(messages[0]);

  // detect task completion
  useEffect(() => {
    if (tasks.length > 0) {
      const lastTask = tasks[tasks.length - 1];
      if (lastTask.done) {
        const random =
          compliments[Math.floor(Math.random() * compliments.length)];
        setMessage(random);
      }
    }
  }, [tasks]);

  // idle message change
  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        messages[Math.floor(Math.random() * messages.length)];
      setMessage(random);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ai-box">
      <h3>🤖 Companion</h3>
      <p>{message}</p>
    </div>
  );
}