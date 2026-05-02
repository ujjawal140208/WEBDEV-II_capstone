import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function Navbar() {
  const { xp, tasks } = useContext(GameContext);

  const completed = tasks.filter(t => t.done).length;
  const total = tasks.length;

  return (
    <div className="navbar">

      <div className="nav-left">⚔ Dungeon</div>

      <div className="nav-center">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/game" className="link">Game</NavLink>
        <NavLink to="/dashboard" className="link">Stats</NavLink>
      </div>

      {/* NEW STATS */}
      <div className="nav-right">
        <span>XP: {xp}</span>
        <span>{completed}/{total}</span>
      </div>

    </div>
  );
}