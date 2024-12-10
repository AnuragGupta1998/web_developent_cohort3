
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { Home, Landing, Profile, About } from "./App.jsx";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import RefHookDemo,{RefSetInterval} from "./refHook.jsx";

createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="landing" element={<Landing />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="demo" element={<Demo />} />
          <Route path="ref" element={<RefHookDemo />} />
          <Route path="interval" element={<RefSetInterval />} />


          {/* <Route path="*" element={<ErrorPage />} />  */}
        </Route>

        {/* this route for if no route match with above route */}
        <Route path="*" element={<ErrorPage />} /> 

      </Routes>
    </BrowserRouter>
  
  
);
function Demo(){
  return(
    <div className="bg-blue-600 text-white h-32 w-full ">
      <p>Demo Page</p>
      <Link to="/home">
      <button type="button" className="bg-green-500 text-black rounded-full p-2"> go to home page</button>
      </Link>
    </div>
  )
}
function ErrorPage(){
  return(
    <div className="bg-black text-white h-screen w-full text-2xl ">
      <p>Error Page</p>
      <Link to="/home">
      <button type="button" className="bg-green-500 text-black rounded-full p-2"> go to home page</button>
      </Link>
    </div>
  )
}

