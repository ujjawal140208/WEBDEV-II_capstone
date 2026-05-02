import { GameProvider } from "./context/GameContext";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  return (
    <GameProvider>
      <div className="container">
        <h1 className="title">🎮 Gamified Task Manager</h1>

        <Stats />
        <ProgressBar />
        <TaskList />
      </div>
    </GameProvider>
  );
}

export default App;