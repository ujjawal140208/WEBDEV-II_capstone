import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import TaskList from "../components/TaskList";
import Stats from "../components/Stats";
import ProgressBar from "../components/ProgressBar";
import DungeonGrid from "../components/DungeonGrid";

import AICompanion from "../components/AICompanion";
import AchievementPopup from "../components/AchievementPopup";
import FocusMode from "../components/FocusMode";
import XpPopup from "../components/XpPopup";

import "../styles/game.css";

export default function Game() {
  const { xp, xpTrigger } = useContext(GameContext);

  return (
    <div className="container">

      <h1 className="title">⚔ Dungeon Game</h1>

      <div className="card">
        <Stats />
        <ProgressBar xp={xp} />
      </div>

      <div className="game-layout">

        <div className="card">
          <h3>🏰 Dungeon</h3>
          <DungeonGrid />
        </div>

        <div className="card">
          <h3>📋 Quests</h3>
          <TaskList />
        </div>

        <div className="card">
          <AICompanion />
          <FocusMode />
        </div>

      </div>

      <AchievementPopup />
      <XpPopup trigger={xpTrigger} />

    </div>
  );
}