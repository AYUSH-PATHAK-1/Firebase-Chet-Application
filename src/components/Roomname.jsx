import React, { useRef } from "react";

const Roomname = ({setRoom}) => {

const roomInputRef=useRef(null)


  return (
    <>
      <div className=" justify-center items-center h-screen flex  gap-10 font-mono">
        <div className=" flex flex-col gap-9 p-5">
          <div className="flex flex-row gap-9">
            <label className=" font-bold text-4xl">Enter Room Name:</label>
            <input
              type="text"
              className=" p-2 rounded-lg border-[1px] border-black"
              ref={roomInputRef}
            />
          </div>
          <div className=" justify-center flex">
            <button onClick={()=>setRoom(roomInputRef.current.value)} className=" rounded-lg justify-center items-center flex p-3 bg-yellow-300 border-[1px] border-black">
              Enter Chat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomname;
