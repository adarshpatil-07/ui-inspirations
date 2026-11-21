import { useEffect, useState } from "react";
import Snowfall from "./Snowfall"
import "./miyuki.css";

export default function OpeningSequence() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 2000),
      setTimeout(() => setPhase(2), 5000),
      setTimeout(() => setPhase(3), 7000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="opening-screen">
        <Snowfall />
      <div className={`opening-title ${phase === 0 ? "visible" : "hidden"}`}>
        美雪
      </div>

      <div className={`opening-title english-title ${phase >= 1 ? "visible" : "hidden"}`}>
        miyuki.
      </div>

      <p className={`opening-tagline ${phase >= 2 ? "visible" : "hidden"}`}>
        Where winter feels endless.
      </p>
    </main>
  );
}
