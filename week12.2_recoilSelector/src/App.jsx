import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import Counter from "./components/Counter.jsx";
import Button from "./components/Button.jsx";
import IsEven from "./components/IsEven.jsx";

function App() {

  return (
   
      <RecoilRoot>
        <Counter />
        <Button />
        <IsEven />
      </RecoilRoot>
    
  );
}

export default App;
