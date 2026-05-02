import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Link } from "react-router-dom";

import Heatmap from "../components/Heatmap";
import ProgressBar from "../components/ProgressBar";

import "../styles/dashboard.css";

export default function Dashboard() {
  const { xp, tasks } = useContext(GameContext);

  const completed = tasks.filter(t => t.done).length;
  const total = tasks.length;
  const level = Math.floor(xp / 100);

  return (
    <div className="container">

      <h1 className="title">📊 Dashboard</h1>

      <div className="top-cards">
        <div className="card neon green">
          <h3>XP</h3>
          <p>{xp}</p>
        </div>

        <div className="card neon">
          <h3>Level</h3>
          <p>{level}</p>
        </div>

        <div className="card neon red">
          <h3>Progress</h3>
          <p>{completed}/{total}</p>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <ProgressBar xp={xp} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>🔥 Activity</h3>
        <Heatmap />
      </div>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/game">
          <button>⚔ Back to Game</button>
        </Link>
      </div>

    </div>
  );
}