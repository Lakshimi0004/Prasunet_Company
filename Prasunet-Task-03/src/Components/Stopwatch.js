import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
    setLaps([]);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-blue-500 p-6"
      style={{
        backgroundImage:'url(https://images.unsplash.com/photo-1597626133663-53df9633b799?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9
      }}
    >
      <div className="text-6xl font-mono mb-6 text-black shadow-lg">{formatTime(time)}</div>
      <div className="space-x-4 mb-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md transition-transform transform hover:scale-105"
          onClick={() => setRunning(true)}
        >
          Start
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md transition-transform transform hover:scale-105"
          onClick={() => setRunning(false)}
        >
          Stop
        </button>
        <button
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-md transition-transform transform hover:scale-105"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition-transform transform hover:scale-105"
          onClick={handleLap}
        >
          Lap
        </button>
      </div>
      <ul className="text-black font-mono text-2xl">
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stopwatch;
