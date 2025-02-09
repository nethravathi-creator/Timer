import { useEffect, useState } from "react";

export const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div>
      <p>Time:{time}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset} style={{ marginLeft: "20px" }}>
        Reset
      </button>
    </div>
  );
};
