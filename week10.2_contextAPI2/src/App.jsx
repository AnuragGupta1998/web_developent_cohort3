import React, { useState } from "react";
import { createContext, useContext } from "react";
import NameContextProvider, { NameContext } from "./context/nameContext";

const CountContext = createContext();
const LighBulbContext = createContext();

// App Component
const App = () => {
  const [count, setCount] = useState(0);
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      {/* Providing Context to component */}
      <div className="flex justify-center">
        <CountContext.Provider value={{ count, setCount }}>
          <div className="w-40 bg-red-300 mr-5">
            <Parent />
          </div>
        </CountContext.Provider>

        <LighBulbContext.Provider value={{ bulbOn, setBulbOn }}>
          <div className="w-40 bg-green-300">
            <LightBulb />
          </div>
        </LighBulbContext.Provider>
      </div>

      {/* Name ContextAPI applying here  */}
      <div className="bg-red-400 mt-5 text-center">
        <h1>Name Context</h1>
        <NameContextProvider>
          <NameCompo />
        </NameContextProvider>
      </div>
    </>
  );
};

function Parent() {
  return (
    <>
      <Value />
      <Decrease />
      <Incrase />
    </>
  );
}

function Value() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function Decrease() {
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount((c) => c - 1)} className="bg-green-500 ">
      Decrease
    </button>
  );
}

function Incrase() {
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount((c) => c + 1)} className="bg-green-200">
      Increase
    </button>
  );
}

//another example with lightBulb Example
function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(LighBulbContext);
  return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(LighBulbContext);
  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn((pre) => !pre);
  }

  return (
    <div>
      <button onClick={toggle} className="bg-green-400 border border-black">
        Toggle the bulb
      </button>
    </div>
  );
}

//second contextAPI
function NameCompo() {
  const { number, setNumber } = useContext(NameContext);

  function increseN() {
    setNumber((preNumber) => preNumber + 10);
  }
  function resetN() {
    setNumber(0);
  }

  return (
    <>
      <div className="bg-red-400">
        <h1 className="text-2xl font-bold"> the number is {number}</h1>
        <button onClick={increseN} className="bg-black text-white mr-2">increaseNumber</button>
        <button onClick={resetN}>reset to zero</button>
      </div>
    </>
  );
}

export default App;
