import { useState, useEffect, useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function FocusMode() {
  const [minutesInput, setMinutesInput] = useState(25);
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const { setXp } = useContext(GameContext);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setRunning(false);

          setXp((prevXp) => prevXp + 20);

          alert("🎉 Focus complete! +20 XP");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const start = () => {
    setTime(minutesInput * 60);
    setRunning(true);
    setFullscreen(true);
  };

  const reset = () => {
    setRunning(false);
    setTime(minutesInput * 60);
  };

  return (
    <div className={fullscreen ? "focus-fullscreen" : "focus-box"}>
      <h3>⏳ Focus Mode</h3>

      {!running && (
        <input
          type="number"
          value={minutesInput}
          onChange={(e) => setMinutesInput(e.target.value)}
        />
      )}

      <p className="timer">
        {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
      </p>

      <div className="focus-buttons">
        {!running ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={() => setRunning(false)}>Pause</button>
        )}

        <button onClick={reset}>Reset</button>

        {fullscreen && (
          <button onClick={() => setFullscreen(false)}>Exit</button>
        )}
      </div>
    </div>
  );
}