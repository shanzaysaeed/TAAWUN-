import React from 'react'
import { useNavigate } from "react-router-dom";
import NGOSideBar from '../../views/NGOSideBar';

const CompletedCampaigns = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <NGOSideBar/>

      {/* Right wala dabba */}

      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-3xl font-semibold">Campaigns</h1>
          </div>
          <div className="flex items-center">
            <p className="text-2xl font-semibold px-1">EDHI</p>
            <img className="px-1 w-20 h-18" src="../components/edhhi.png" alt="ngo_logo" />
          </div>
        </div>
        {/* div for buttons */}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button onClick={() => navigate("/campaigns")} className="rounded-md bg-white text-[#AA8CFF] px-2 py-1 mr-4 border border-black hover:bg-gray-500">
              On Going
            </button>
            <button onClick={() => navigate("/comp_camp")} className="rounded-md bg-purple-400 px-2 py-1 ml-4 text-white border border-black hover:bg-purple-500">
              Successful
            </button>
          </div>
          <div className="rightButton font-semibold rounded-md text-gray-50 bg-[#26235C] px-2 py-1 mr-4 hover:bg-purple-500">
            <a href="/create_camp">Create +</a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl">

          <div className="campaign grid grid-cols-6 items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div className="logo col-span-1 flex justify-center items-center">
              <img src="../components/edhhi.png" alt="Logo" />
            </div>
            <div className="text col-span-4 px-8">
              <h1 className="text-xl font-semibold">Children Hospital Fund</h1>
              <p className="text-xs">
                Donation and blood required for thalassemia patients. Around 35 kids are looking for your kind contributions...
              </p>
              <p className="text-xs">
                <b>Amount Needed:</b> PKR 10,00,000/-
              </p>
              <p className="text-xs">
                <b>Blood Required:</b> Several bottles of every blood group
              </p>
            </div>
            <div class="icons col-span-1 flex flex-col justify-between items-center">
              <button className="w-5/6 mx-1 flex flex-col items-center">
                <img className='w-1/2' src="../components/analytics.png" alt="" />
                <p className='text-xs font-bold pt-1'>Show Analytics</p>
              </button>
              <div className="location pt-2 flex items-center justify-center">
                <img className="w-1/6" src="../components/placeholder.png" alt="Location Icon"/>
                <p className="font-bold">Lahore</p>
              </div>
            </div>
          </div>

          <div className="campaign grid grid-cols-6 items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
          <div className="logo col-span-1 flex justify-center items-center">
            <img src="../components/jdc.png" alt="" />
          </div>
            <div className="text col-span-4 px-8">
              <h1 className="text-xl font-semibold">Flood Relief Fund</h1>
              <p className="text-xs">
                Donation required for the flood victims in North. The damage
                caused by the flood is so massive that people...
              </p>
              <p className="text-xs">
                <b>Amount Needed:</b> PKR 90,00,000/-
              </p>
              <p className="text-xs">
                <b>Other Stuff Required:</b>Blanket, clean water, medicines,
                sanitary products...
              </p>
            </div>
            <div class="icons col-span-1 flex flex-col justify-between items-center">
              <div className="buttons flex">
              <button className="w-5/6 mx-1 flex flex-col items-center">
                <img className='w-1/2' src="../components/analytics.png" alt="" />
                <p className='text-xs font-bold pt-1'>Show Analytics</p>
              </button>
              </div>
              <div className="location pt-2 flex items-center justify-center">
                <img className="w-1/6" src="../components/placeholder.png" alt="" />
                <p className="font-bold">Sawaat</p>
              </div>
            </div>
          </div>

          <div className="campaign grid grid-cols-6 items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
          <div className="logo col-span-1 flex justify-center items-center">
            <img src="../components/SA.png" alt="" />
          </div>
            <div className="text col-span-4 px-8">
              <h1 className="text-xl font-semibold">Children Hospital Fund</h1>
              <p className="text-xs">
                Donation and blood required for thalassemia patients. Around 35
                kids are looking for your kind contributions...
              </p>
              <p className="text-xs">
                <b>Amount Needed:</b> PKR 10,00,000/-
              </p>
              <p className="text-xs">
                <b>Blood Required:</b> Several bottles of every blood group
              </p>
            </div>
            <div class="icons col-span-1 flex flex-col justify-between items-center">
              <div className="buttons flex">
              <button className="w-5/6 mx-1 flex flex-col items-center">
                <img className='w-1/2' src="../components/analytics.png" alt="" />
                <p className='text-xs font-bold pt-1'>Show Analytics</p>
              </button>
              </div>
              <div className="location pt-2 flex items-center justify-center">
                <img className="w-1/6" src="../components/placeholder.png" alt="" />
                <p className="font-bold">Lahore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompletedCampaigns
