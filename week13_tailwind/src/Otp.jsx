import React, { useRef, useState } from 'react'

export function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const [disabled,setDisabled] = useState(true); // You can set this based on your logic
  return (
    <div className='flex flex-row justify-center mt-10'>
        <SubOtpBox onDone={()=> ref2.current.focus()} reference={ref1} />
        <SubOtpBox onDone={()=> ref3.current.focus()} reference={ref2}/>
        <SubOtpBox onDone={()=> ref4.current.focus()} reference={ref3}/>       
        <SubOtpBox onDone={()=> ref5.current.focus()} reference={ref4}/>
        <SubOtpBox onDone={()=> ref6.current.focus()} reference={ref5}/>
        <SubOtpBox onDone={()=> setDisabled(e => !e)  }   reference={ref6}/>

        <Button disabled={disabled} />
    </div>
  )
}


function SubOtpBox({reference,onDone}) {
    return (
        <div className=' m-1 text-white'>
            <input type="text" ref={reference} onChange={() => onDone()} className='w-[40px] h-[50px] rounded-2xl bg-blue-500 text-center'/>
        </div>
    )
}

function Button({disabled}){
    return (
        <button disabled={disabled} className={`w-[100px] h-[50px] rounded-2xl bg-blue-500 text-white ${disabled ? 'bg-blue-600' : 'bg-green-400'}`}>
            Submit
        </button>
    )
}

