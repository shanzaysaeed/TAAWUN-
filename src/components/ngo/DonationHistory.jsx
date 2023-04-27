import React from "react";
import NGOSideBar from "../../views/NGOSideBar";

const DonationHistory = () => {
  return (
    <div className="flex bg-purple-300 justify-between">
      <NGOSideBar />
      <div className="right-box bg-purple-300 w-3/4 mt-4 flex flex-col">
        <div className="flex flex-row w-full justify-between h-20">
          <div className="flex flex-col mt-6 ">
            <div className="tracking-tighter text-black font-mono text-4xl font-bold">
              <p>Donation History</p>
            </div>
          </div>

          <div className="p-5 mr-14 flex items-start">
            <p className="text-black font-bold text-lg s mt-4 underline ">Edhi</p>
            <img
              className="px-1 w-14 mt-2"
              src="../components/edhilogo.png"
              alt="HAHAH"
            />
            {/* <img src={edhi} className='rounded-1/2 w-12 h-12 flex-shrink-0 ml-4 mt-2'></img> */}
          </div>
        </div>

        <div className="flex flex-row w-full h-10 mt-2 justify-between">
          <div className="flex flex-col">
            <div className="w-full">
              <p className="font-bold text-xl">Flood Relief in Sindh:</p>
            </div>
          </div>

          <div className="mr-20 items-start bg-white rounded-lg border border-black">
            <div className="flex flex-row items-center">
              <button className="w-36 text-nowrap font-semibold">
                Sort by Campaign:
              </button>
              <img src="../components/drop.jpeg" className="w-1/12 h-3" alt="#" />
              {/* <button ><img src={drop} className='w-3 h-2 mt-1 mr-3'></img></button> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-4/5 h-full rounded mt-12">
          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          <div className="flex flex-row bg-[#F2F2F2] w-full items-center rounded-md px-4 py-2 my-1">
            
              {/* <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img> */}
              <img src="../components/mohtashim.png" className="w-10" alt="#" />
              <p className="font-sans text-lg font-semibold ml-2">
                Mohtashim Butt donated Rs.10000/-
              </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
