import React, { useEffect, useState } from "react";
import "./App.css";
import { PostComponent } from "./PostComponent";

function App() {
  // const[o,setO] = useState(1)
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <div className="flex justify-center items-center">
        <button onClick={addPost} className="bg-green-400 border-red-900 border  rounded-full p-5 flex justify-center mb-5">Add post</button>
      </div>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
          {/* <PostComponent
           name={"harkirat"}
           subtitle={"11000 followers"} 
           time={"2m ago"}
           image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} 
           description={"What to know how to win big? Check out how these folks won $6000"} 
          /> */}
        </div>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {/* <CounterComponent /> */}
  //     {/* <Post /> */}
  //     {/* <Count oe={o} set={setO}/>
  //     <Count oe={o} set={setO}/>
  //     <Count oe={o} set={setO}/> */}
  //     
  //   </div>
  // );
}

const Count =(props)=>{
  const [one,setOne] = useState(1);

  const[toggle,setToggle] = useState(false)

  function increaseValue(){
    setOne(d=>d+1)
  }

  return(
  <>

    <div>{props.oe}</div>
    <button onClick={()=>props.set(o=>o+1)}>App variable</button>
    <div>

      Count value is : {one}

      <button onClick = {()=>setOne(o=>o+1)} className="bg-red-400 border"> increase value </button>
      <button onClick = {increaseValue} className="bg-green-400 border"> increase value </button>

    </div>
    <br />
    {toggle ? <>this is toggle true</>:<>toggle false</>}
    {toggle && <h1>toggle is true</h1>}
    <button onClick={()=>setToggle(v => !v)} className="bg-blue-400 border rounded-full"> click here </button>
  </>
  )
}

function Post() {

  const [change, setChange] = useState(true);
  const [count,setCount]= useState(10);

  function toggle() {
    setChange(c => !c);
  }
  return (
    <>
    <div className="w-300px h-500px bg-green-300 flex justify-center items-center text-center gap-5">

      { change ? <div className=" bg-red-400 h-20 ">
                   conditional rendering One
                 </div>
               :
                 <div className="bg-cyan-400" >
                 conditional rendering two {count}
                </div> 
                
      }

    </div>
    hi
    <div className="flex justify-center">
      <button onClick={toggle} className="bg-gray-500 rounded-full text-black p-2 bg-transparent border-red-600 border"> clickme</button>
    </div>
    </>
  )
}

function CounterComponent() {
  const [count, setCount] = useState(0);
  console.log("App", count);

  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
      console.log("useEffect setInterval");
    }, 2000);

    console.log("only first time it get executed");
  }, []);

  function increase() {
    if (count >= 10) {
      return;
    }
    setCount((count) => count + 1);
  }

  function decrease() {
    if (count <= 0) {
      return;
    }
    setCount((count) => count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center gap-2 flex-col">
      <div className="text-2xl font-serif font-bold"> {count} </div>

      <button onClick={increase} className="bg-green-400 rounded-lg p-5">
        {" "}
        Increase{" "}
      </button>

      <button onClick={decrease} className="bg-green-400 rounded-lg p-5">
        {" "}
        Decrease{" "}
      </button>

      <button onClick={resetCount} className="bg-green-400 rounded-lg p-4">
        {" "}
        Reset Count{" "}
      </button>
    </div>
  );
}

export default App;
