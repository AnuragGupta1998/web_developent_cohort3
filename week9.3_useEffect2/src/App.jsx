
import React,{useEffect, useState} from "react";

function App() {
  const[currentTab,setCurrentTab] = useState("users");
  const[tabData,setTabData] = useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(() => {
    setLoading(true);
   console.log("the currentTab is "+currentTab)
    fetch("https://jsonplaceholder.typicode.com/"+currentTab)
    .then(async(res) => {
      const data = await res.json();
      setTabData(data);
      setLoading(false)
    }).catch((e) => console.log("error while fetching",e))
  }, [currentTab])
  

  return (
    <>
      <div className="flex gap-2 mt-5 justify-center ">

        <button 
          className={`bg-slate-500 text-black rounded-full p-2 ${currentTab == "users" ? `bg-green-300 cursor-pointer`:null}`}
          onClick={()=>{
            setCurrentTab("users");  
          }}
            > Users </button>
        <button 
        className={`bg-slate-500 text-black rounded-full p-2 ${currentTab == "todos" ? `bg-green-300 cursor-pointer`:null}`}
          onClick={()=>{
            setCurrentTab("todos");  
          }}> Todos </button>

        <button 
        className={`bg-slate-500 text-black rounded-full p-2 ${currentTab == "Messages" ? `bg-green-300 cursor-pointer`:null}`}
          onClick={()=>{
            setCurrentTab("users");  
          }}> Messages </button>

        <button 
        className={`bg-slate-500 text-black rounded-full p-2 ${currentTab == "Jobs" ? `bg-green-300 cursor-pointer `:null}`}
          onClick={()=>{
            setCurrentTab("todos");  
          }}> Jobs </button>

      </div>
   
      {currentTab =="users" ?  <div>
  
        { loading ? "....Loading" :
          tabData.map(d =>(
            <div key={d.id}>

              <p>{d.id}</p>
              <p>{d.name}</p>
              <p>{d.email}</p>
              <p>{d.phone}</p>
            
            </div>
          ))
        }
      </div>:null}


      {currentTab =="todos" ?  <div className="bg-red-500 border-black flex flex-col items-center justify-center gap-5 h-full w-full">

        { loading ? "....Loading" :
          tabData.map(d =>(
            <div key={d.id} className="border-blue-600 border bg-cyan-300 text-center h-50 w-80">

                <p>{d.id}</p>
                <p>{d.title}</p>
                <p>{d.completed}</p>
              
            </div>
          ))
        }
  

      </div>:null}
    </>
  );
}

export default App;
