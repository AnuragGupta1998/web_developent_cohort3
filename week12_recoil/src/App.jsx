import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CountContextProvider } from "./CountContexApi.jsx";
import Count from "./components/Count";
import Increase from "./components/Increase.jsx";
import Decrease from "./components/Decrease.jsx";

import {RecoilRoot} from 'recoil';
import Show from "./components/Show.jsx";
import IncreaseNumber from "./components/IncreaseNumber.jsx";
import DecreaseNumber from "./components/DecreaseNumber.jsx";


function App() {
  console.log("app render");

  return (
    <>
    
    {/* recoil example */}
    <RecoilRoot>

      <h1>Recoil Example</h1>
      <Show />
      <IncreaseNumber />
      <DecreaseNumber /> 

    </RecoilRoot>



    {/* context api */}
      <CountContextProvider>
        <h1>Context API</h1>
        <Count />
        <Increase />
        <Decrease />
      </CountContextProvider>

    </>
  );
}

export default App;
