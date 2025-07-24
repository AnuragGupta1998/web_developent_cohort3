import React from "react";

function SideBar1() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-red-500 transition-all delay-1000 duration-1000 ease-linear md:w-96 w-0  ">SideBar</div>
        <div className="bg-green-400 w-full">Content</div>
      </div>
    </>
  );
}

export default SideBar1;
