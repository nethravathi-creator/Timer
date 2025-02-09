import React, { useState } from "react";
import { Timer } from "./Timer.js";

export const TimerContainer = () => {
  const [timers, setTimers] = useState([]);
  const addTimer = () => {
    setTimers([...timers, { id: Date.now() }]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div>
      <button onClick={addTimer}>Add Timer</button>
      <div>
        {timers.length > 0 && timers.map((timer) => <Timer id={timer.id} />)}
      </div>
    </div>
  );
};
