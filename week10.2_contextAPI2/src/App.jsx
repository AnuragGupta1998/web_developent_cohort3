import React, { useState } from "react";
import { createContext, useContext } from "react";

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

        <LighBulbContext.Provider value={{bulbOn,setBulbOn}}>
          <div className="w-40 bg-green-300">
            <LightBulb />
          </div>
        </LighBulbContext.Provider>
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
  const{count}=useContext(CountContext)
  return <p>Count: {count}</p>;
}

function Decrease() {
  const{setCount} = useContext(CountContext)
  return (
    <button onClick={() => setCount((c) => c - 1)} className="bg-green-500 ">
      Decrease
    </button>
  );
}

function Incrase() {
  const{setCount}=useContext(CountContext)
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
  const{bulbOn}=useContext(LighBulbContext)
    return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
}

function ToggleBulbState() {
  const{setBulbOn}=useContext(LighBulbContext)
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

export default App;
