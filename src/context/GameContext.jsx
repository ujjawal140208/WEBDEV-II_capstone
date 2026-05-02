import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [xp, setXp] = useState(0);

  const [latestAchievement, setLatestAchievement] = useState(null);
  const [activity, setActivity] = useState({});
  const [xpTrigger, setXpTrigger] = useState(false);

  const addTask = (text) => {
    if (!text.trim()) return;

    setTasks(prev => [
      ...prev,
      { id: Date.now(), text, done: false }
    ]);
  };

  const completeTask = (id) => {
    let completedCount = 0;

    setTasks(prev => {
      const updated = prev.map(t =>
        t.id === id ? { ...t, done: true } : t
      );

      completedCount = updated.filter(t => t.done).length;
      return updated;
    });

    // XP
    setXp(prev => prev + 10);

    // XP POPUP TRIGGER
    setXpTrigger(true);
    setTimeout(() => setXpTrigger(false), 100);

    // Activity
    const today = new Date().toISOString().slice(0, 10);
    setActivity(prev => ({
      ...prev,
      [today]: (prev[today] || 0) + 1
    }));

    // Achievements
    triggerAchievements(completedCount);
  };

  const triggerAchievements = (completed) => {
    if (completed === 1) {
      setLatestAchievement("First Blood 🩸");
    } else if (completed === 5) {
      setLatestAchievement("Getting Started ⚔️");
    } else if (completed === 10) {
      setLatestAchievement("Task Slayer 🔥");
    }
  };

  return (
    <GameContext.Provider
      value={{
        tasks,
        addTask,
        completeTask,
        xp,
        setXp,
        latestAchievement,
        activity,
        xpTrigger
      }}
    >
      {children}
    </GameContext.Provider>
  );
}