import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Otp } from './Otp'
import SideBar1 from './component/SideBar1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className=' flex flex-row flex-wrap w-screen h-full text-black font-mono bg-gray-200'>

      <div className='bg-blue-300 w-50 text-center p-5 text-2xl font-bold
      ml-10 mr-10'>Tailwind</div>
      <div className='bg-red-400 w-50 text-center p-5 text-2xl font-bold
      ml-10 mr-10'>hello</div>
      <div className='bg-yellow-400 w-50 text-center p-5 text-2xl font-bold
      ml-10 mr-10'>hello</div>
      <div className='bg-green-400 w-50 text-center p-5 text-2xl font-bold
      ml-10 mr-10 basis-128'>hello</div>
    </div>
    <div className='grid grid-cols-2 text-black'>
      <div className='col-span-3 bg-green-400'>hi</div>
      <div className='col-span-2 bg-yellow-300'>hello</div>
      <div className='col-span-2 bg-red-400'>how</div>
      <div className='bg-blue-100 col-span-4'>hooooo</div>
    </div> */}

    {/* <Otp /> */}
    <SideBar1 />
    <div className='dark:bg-black text-white'>hi</div>
    </> 
  )
}

export default App
