import React, { useEffect, useState } from 'react'
import "./timer.css"

export default function Timer() {

    const[seconds, setSeconds]=useState(0)
    const [minutes, setMinutes]=useState(0)

    var timer;

    useEffect(()=>{
        timer = setInterval(()=>{
          setSeconds(seconds+1);
          if(seconds===59){
            setMinutes(minutes+1)
            setSeconds(0)
          }
        },1000)
        return ()=>clearInterval(timer)
    })


    const handleStop =()=>{
      clearInterval(timer)
    }

    const handleRestart=()=>{
      setSeconds(0)
      setMinutes(0)
    }

    const handleStart =()=>{
        timer = setInterval(() => {
          setSeconds(seconds + 1);
          if (seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);
          }
        }, 1000);
        return () => clearInterval(timer);
    }
  return (
    <div>
      <h1>TIMER</h1>
      <h3>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h3>
      <button onClick={handleStart} className="timerbtn">START</button>
      <button onClick={handleStop} className="timerbtn">STOP</button>
      <button onClick={handleRestart} className="timerbtn">RESTART</button>
    </div>
  );
}
