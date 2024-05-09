import React, { useEffect, useState } from "react";
import "./stopwatch.css"
export default function Stopwatch() {
  const [isRunning, setisRunning] = useState(false);
  const [time, setTime] = useState(0);
useEffect(()=>{
    let timer;
    if(isRunning){
        timer = setInterval(()=>{
            setTime(prevTime => prevTime+1);
        }, 1000);
    }else{
        clearInterval(timer);
    }
    return ()=> clearInterval(timer);
}, [isRunning]);

  const handlestartstop = ()=>{
        setisRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = ()=>{
    
    setTime(0);
    setisRunning(false);
  }


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div className="controls">
        {isRunning ? (
          <button onClick={handlestartstop} className="btn">Stop</button>
        ) : (
          <button onClick={handlestartstop} className="btn">Start</button>
        )}
          <button onClick={handleReset} className="btn">Reset</button>

      </div>
    </div>
  );
}
