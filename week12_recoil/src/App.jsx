import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CountContextProvider } from "./CountContexApi.jsx";
import Count from "./components/Count";
import Increase from "./components/Increase.jsx";
import Decrease from "./components/Decrease.jsx";

function App() {
  console.log("app render");

  return (
    <>
    {/* context api */}
      <CountContextProvider>
        <Count />
        <Increase />
        <Decrease />
      </CountContextProvider>
    </>
  );
}

export default App;
