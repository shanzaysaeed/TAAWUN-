import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import DonorSideBar from '../../views/DonorSideBar1';

const DonateVolunterHistory = () => {
//   const navigate = useNavigate();
  return (
    <div className="flex bg-purple-300 justify-between">
      <DonorSideBar/>
      {/* Right wala dabba      j */}
      <div className="right-box bg-purple-300 w-3/4 pt-10 flex flex-col mr-10">
        <div className="top flex items-center justify-between ">
          <h1 className="text-4xl font-bold font-mono tracking-tighter">Donate/Volunteer History</h1>
          <div className="flex items-center h-fit w-fit">
            <p className="text-lg font-semibold px-1 w-fit underline">Mohtashim</p>
            <img
              className="px-1 w-12 mb-2"
              src="../components/mohtashim.png"
              alt="HAHAH"
            />
          </div>
        </div>
        {/* div for buttons */}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button className="btn-ongoing rounded-md bg-purple-400 px-2 mr-4 hover:bg-[#9170ec] border border-black">
              <a href="/dvh">Donation History</a>
            </button>
            <a
              href="/dvh2"
              className="btn-successful rounded-md bg-slate-100 px-2 ml-4 hover:bg-[#dedbdb] border border-black"
            >
              <p>Volunteer History</p>
            </a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-2/3 flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl overflow-y-auto">
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between my-2 py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/edhilogo.png" className="w-2/12" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-4">
                Donated 10,000/- to Edhi Foundation
              </div>
            </div>
            {/* Div for buttonx */}
            {/* <a
              href="/"
              className="bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]"
            >
              View Details
            </a> */}
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between my-2 py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/mohtashim.png" className="w-16" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-7">
                Donated 50,000/- to depressed Mohtashim
              </div>
            </div>
            {/* Div for buttonx */}
            {/* <a
              href="/"
              className="bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]"
            >
              View Details
            </a> */}
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between my-2 py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/panda.png" className="w-20" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-4">
                Donated 50 Trees to WTF
              </div>
            </div>
            {/* Div for buttonx */}
            {/* <a
              href="/"
              className="bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]"
            >
              View Details
            </a> */}
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between my-2 py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/jdc.png" className="w-2/12" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-5">
                Donated 10kg ration to JDC Foundation
              </div>
            </div>
            {/* Div for buttonx */}
            {/* <a
              href="/"
              className="bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]"
            >
              View Details
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateVolunterHistory;
