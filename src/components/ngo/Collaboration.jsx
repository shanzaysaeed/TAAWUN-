import React, { useState } from "react";
import NGOSideBar from "../../views/NGOSideBar";

const Collaboration = () => {
    const [color0, setColor0] = useState("bg-[#BFBFBF]");
    const [color1, setColor1] = useState("bg-[#BFBFBF]");
    const [color2, setColor2] = useState("bg-[#BFBFBF]");
    const [color3, setColor3] = useState("bg-[#BFBFBF]");
    const [color4, setColor4] = useState("bg-[#BFBFBF]");
    const [color5, setColor5] = useState("bg-[#BFBFBF]");
  return (
    <div className="flex bg-purple-300 justify-between">
      <NGOSideBar />
      <div className="flex flex-col justify-between w-3/4 h-screen">
        <div className="flex flex-row justify-between items-center mt-8 mr-14">
          <div className="flex flex-col">
            <p className="tracking-tighter text-black font-mono text-4xl font-semibold">
              Collaborations
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-black font-semibold text-lg mr-2 underline">Edhi</p>
            <img
              src="../components/akhuwat.png"
              alt="lol"
              className="w-10 h-10 mb-2"
            ></img>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <div className="tracking-tight text-black font-sans text-xl font-semibold">
              <p>Please select an NGO you want to collaborate with:</p>
            </div>
          </div>
        </div>

        <div className="h-96 rounded flex flex-col items-center justify-between">
          <div className="flex justify-between overflow-x-auto w-11/12 h-5/6 mr-14">
            <div className="flex flex-col mr-4 border border-black shadow-md bg-white rounded-2xl justify-center h-full">
              <button className="flex flex-col px-5 justify-center items-center">
                <img src="../components/akhuwat.png" alt="HAHAHA" />
                <p className="font-bold text-lg ">Akhuwat</p>
                <p className="text-sm text-black whitespace-nowrap mb-2">
                  Flood Relief in Sindh{" "}
                </p>
                <button className={`${color0} text-black rounded-md hover:bg-green-500 w-full h-8 `} onClick={()=>{
                    setColor0("bg-green-500")
                }}>
                  Select
                </button>
              </button>
            </div>
            <div className="flex flex-col mr-4 border border-black shadow-md bg-white rounded-2xl justify-center">
              <button className="flex flex-col px-5 justify-center items-center">
                <img src="../components/strong.png" alt="HAHAHA" />
                <p className="font-bold text-lg ">Grape Trust</p>
                <p className="text-sm text-black whitespace-nowrap mb-2">
                  Flood Relief in Sindh{" "}
                </p>
                <button className={`${color1} text-black rounded-md hover:bg-green-500 w-full h-8 `} onClick={()=>{
                    setColor1("bg-green-500")
                }}>
                  Select
                </button>
              </button>
            </div>
            <div className="flex flex-col mr-4 border border-black shadow-md bg-white rounded-2xl justify-center">
              <button className="flex flex-col px-5 justify-center items-center">
                <img src="../components/akhuwat.png" alt="HAHAHA" />
                <p className="font-bold text-lg ">Akhuwat</p>
                <p className="text-sm text-black whitespace-nowrap mb-2">
                  Flood Relief in Sindh{" "}
                </p>
                <button className={`${color2} text-black rounded-md hover:bg-green-500 w-full h-8 `} onClick={()=>{
                    setColor2("bg-green-500")
                }}>
                  Select
                </button>
              </button>
            </div>
            <div className="flex flex-col mr-4 border border-black shadow-md bg-white rounded-2xl justify-center">
              <button className="flex flex-col px-5 justify-center items-center">
                <img src="../components/strong.png" alt="HAHAHA" />
                <p className="font-bold text-lg ">Grape Trust</p>
                <p className="text-sm text-black whitespace-nowrap mb-2">
                  Flood Relief in Sindh{" "}
                </p>
                <button className={`${color3} text-black rounded-md hover:bg-green-500 w-full h-8 `} onClick={()=>{
                    setColor3("bg-green-500")
                }}>
                  Select
                </button>
              </button>
            </div>
            <div className="flex flex-col mr-4 border border-black shadow-md bg-white rounded-2xl justify-center">
              <button className="flex flex-col px-5 justify-center items-center">
                <img src="../components/akhuwat.png" alt="HAHAHA" />
                <p className="font-bold text-lg ">Akhuwat</p>
                <p className="text-sm text-black whitespace-nowrap mb-2">
                  Flood Relief in Sindh{" "}
                </p>
                <button className={`${color4} text-black rounded-md hover:bg-green-500 w-full h-8 `} onClick={()=>{
                    setColor4("bg-green-500")
                }}>
                  Select
                </button>
              </button>
            </div>
            <div className="flex flex-col mr-4 border border-black shadow-md bg-white rounded-2xl justify-center">
              <button className="flex flex-col px-5 justify-center items-center">
                <img src="../components/strong.png" alt="HAHAHA" />
                <p className="font-bold text-lg ">Grape Trust</p>
                <p className="text-sm text-black whitespace-nowrap mb-2">
                  Flood Relief in Sindh{" "}
                </p>
                <button className={`${color5} text-black rounded-md hover:bg-green-500 w-full h-8 `} onClick={()=>{
                    setColor5("bg-green-500")
                }}>
                  Select
                </button>
              </button>
            </div>
          </div>
          <a href="/collab1" className="bg-[#26235C] text-white text-lg font-semibold rounded-lg border border-black flex justify-center items-center hover:bg-gray-500 px-5 my-5">
            Collaborate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
