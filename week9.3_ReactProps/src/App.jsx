import React, { Children, useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [count, setCount] = useState(0);
  const [appear,setAppear]=useState(false);

  function increamentCount() {
    setCount((preValue) => preValue + 1);
    setAppear(preState=>!preState)
  }

  const todos=[{name:"Anurag",age:25},{name:"Ashutosh",age:21},{name:"papa",age:65}]

  const todoComponet = todos.map((todo) => (
    <div key={uuidv4()}>
      <Todo na={todo.name} ag={todo.age} />

    </div>

  )) 

  return (
    <>
      <div className="text-center text-2xl">
        App Component Count value {count} <br />

        <button
          type="button"
          className="bg-black text-white rounded-lg p-1 mt-3"
          onClick={increamentCount}
        >
          App ClickMe
        </button>


        { appear && 
          <Card fn={increamentCount} cnt={count}>
           <hr className="border border-black" />
           <div> hi this is Card children </div>
          </Card>
        }

        <h4>the Todo Component is here</h4>
        {todoComponet}
      </div>

      <div className="bg-cyan-950 h-auto w-auto text-red-400"> this is another
        {
          todos.map(t=>(
            <li key={uuidv4()} className="text-2xl text-green-500">
              {t.name} {t.age}
            </li>
          ))
        }

      </div>
    </>
  );
}

function Card({children,fn,cnt}) {
  return (
    <div className="flex justify-center mt-5">
      <div className="bg-green-300 h-auto w-72 text-black text-center rounded-lg">
        hey there Card Component <br />
        count = {cnt}   <br />
       Card <button type="button" className="bg-black text-white rounded-lg p-1" onClick={fn}>click me</button>
      <div>this{children}</div>
      </div>
    </div>
  );
}

function Todo(props){
  return(
    <>
     <div className="bg-yellow-500">
      the Todo Component <br />
      {props.na} {props.ag}

     </div>
    

    </>
  )
}

export default App;
