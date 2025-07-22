import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {  useRecoilState, useRecoilValue } from "recoil";
import { networkAtom, notificationAtom ,messagingAtom,jobsAtom,myTotalNotificationSelector} from "./atoms";

function App() {
  
  return (
    
    <MainApp />
    
  );
}

function MainApp() {
  
  const networkCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const [messagingCount,setMessagingCount] = useRecoilState(messagingAtom);

  // this is selector to get the total notifications
  const MyTotalNotification = useRecoilValue(myTotalNotificationSelector);
  return (
    <>
      <button>Home</button>
      <button> My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button> Jobs({jobsCount}) </button>
      <button> Notification ({notificationCount})</button>
      <button onClick={()=>setMessagingCount(messagingCount+1)}> Messaging ({messagingCount}) </button>

      <button>Me({MyTotalNotification})</button>
    </>
  );
}

export default App;
