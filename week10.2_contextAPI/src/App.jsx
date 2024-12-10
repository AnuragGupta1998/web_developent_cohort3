import React, { useEffect, useState } from 'react';

// App Component
const App = () => {

  return <div className='flex justify-center'>
    <div className='w-40 bg-red-300 mr-5'>
    <Parent />

    </div>

    <div className='w-40 bg-green-300'>
    <LightBulb />

    </div>
  </div>
};

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <Value    name={name} count={count} />
      <Decrease setCount={setCount} />
      <Incrase  setCount={setCount}  />
    </>
  );
}

function Decrease({  setCount }) {
  return <button onClick={() => setCount(c => c - 1)} className='bg-green-500 '>Decrease</button>;
}

function Incrase({setCount }) {
  return <button onClick={() => setCount(c => c+1)} className='bg-green-200'>Increase</button>;
}

function Value({count }) {
  return <p>Count: {count}</p>;
}

//another example with lightBulb Example
function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(pre => !pre)  
  }

  return <div>
    <button onClick={toggle} className='bg-green-400 border border-black'>Toggle the bulb</button>
  </div>
}



export default App;
