import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./context/GameContext";

import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Game from "./pages/Game";
import Dashboard from "./pages/Dashboard";

import bgVideo from "./assets/landing-bg.mp4";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>

        {/* GLOBAL VIDEO */}
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>

        <div className="app">
          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/game" element={<div className="page-content"><Game /></div>} />
            <Route path="/dashboard" element={<div className="page-content"><Dashboard /></div>} />
          </Routes>
        </div>

      </BrowserRouter>
    </GameProvider>
  );
}

export default App;