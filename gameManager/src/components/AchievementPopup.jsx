import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function AchievementPopup() {
  const { latestAchievement } = useContext(GameContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (latestAchievement) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [latestAchievement]);

  if (!visible) return null;

  return (
    <div className="achievement-popup">
      🏆 Achievement Unlocked!
      <br />
      {latestAchievement}
    </div>
  );
}