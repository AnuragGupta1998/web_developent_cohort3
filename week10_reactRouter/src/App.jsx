import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import RefHookDemo from "./refHook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Link do not refresh the page to navigating to other routes  */}
      {/* <nav className="flex gap-10 justify-center">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/landing">Landing</Link>
      </nav> */}

      <Header />

      <div className="flex justify-center">
        {/* the outlet inject the child component route to parent component */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export function Landing() {
  const navigate = useNavigate(); //useNavigate hook use to navigate to routes
  useEffect(() => {
   const timer= setTimeout(() => {
      console.log("hello after 5 second");
      navigate("/home");
    }, 5000);

    return ()=>{
      clearInterval(timer); //cleanup function to clear the timer
    }
  }, []);
  return (
    <div className="bg-red-400 h-52 w-52 border-b-4 border-b-black text-start flex justify-center items-center">
      Landing page
    </div>
  );
}

export function Home() {
  return (
    <div className="bg-red-400 h-52 w-52 border-b-4 border-b-black text-start flex justify-center items-center">
      Home Page
    </div>
  );
}

export function About() {
  return (
    <div className="bg-red-400 h-52 w-52 border-b-4 border-b-black text-start flex justify-center items-center">
      About Page
    </div>
  );
}

export function Profile() {
  return (
    <div className="bg-red-400 h-52 w-52 border-b-4 border-b-black text-start flex justify-center items-center">
      Profile Page
    </div>
  );
}

export default App;
