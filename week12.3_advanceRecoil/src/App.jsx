import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom, notificationAtom } from "./atoms";

function App() {
  
  return (
    
    <MainApp />
    
  );
}

function MainApp() {
  
  const notificationCount = useRecoilValue(networkAtom);
  return (
    <>
      <button>Home</button>
      <button> My Network ({notificationCount >= 100 ? "99+" : notificationCount})</button>
      <button> Jobs </button>
      <button> Notification </button>
      <button> Messaging. </button>

      <button>Me</button>
    </>
  );
}

export default App;
