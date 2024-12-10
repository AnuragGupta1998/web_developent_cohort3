import React, { useEffect, useState } from "react";
import { useRef } from "react";

function RefHookDemo() {
  const nameRef = useRef(null);
  const passwordRef = useRef();

  function focusOnInput(e) {
    e.preventDefault();
    nameRef.current.focus();
    console.log(nameRef.current.value, passwordRef.current.value);
  }
  return (
    <>
      <form action="#" method="get">
        Signup
        <input
          type="text"
          ref={nameRef}
          placeholder="password"
          className="bg-grey-400 mr-5  border border-black"
        />
        <input
          type="text"
          ref={passwordRef}
          placeholder="name"
          className="bg-grey-400 mr-5 border border-black"
        />
        <button
          type="button"
          onClick={focusOnInput}
          className="bg-green-400  border border-black rounded-lg p-2"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export function RefSetInterval() {
  const [time, setTime] = useState(0);
  const refInterval = useRef(null);
  console.log("RefSetInterval Component")

  function startClock() {
    if (refInterval.current !== null) return;  // Already running, do nothing

      refInterval.current = setInterval(() => {
        setTime((preClock) => preClock + 1);
        console.log("time",time)
      }, 1000);
      console.log("refInterval",refInterval.current) 
  }

  function stopClock() {
    clearInterval(refInterval.current);
    refInterval.current=null;
  }

  return (
    <>
      <div className="bg-cyan-300 w-full h-52 flex gap-2 flex-col justify-center items-center">
        <h2>Timer{time}</h2>
        <button onClick={startClock} className="bg-green-400 w-fit"> Start Clock </button>
        <button onClick={stopClock} className="bg-red-400 w-fit"> Stop Clock </button>
      </div>
    </>
  );
}

export default RefHookDemo;
