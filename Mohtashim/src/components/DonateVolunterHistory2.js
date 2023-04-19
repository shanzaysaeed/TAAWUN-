import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const DonateVolunterHistory2 = () => {
const navigate = useNavigate();
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <div className="bg-[#F2F2F2] h-screen w-1/4 flex flex-col justify-between items-center">
        {/* Logo's div */}
        <div className="image bg-opacity-100 h-1/6 flex justify-center">
          <img className="" src="../components/Logo_Final.png" alt="haha" />
        </div>

        {/* Menu options' div */}
        <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/home.png" alt="LMAO" />
            <a href="/" className="px-4">
              Home
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/donation.png" alt="LMAO" />
            <a href="/" className="px-4">
              Donate
            </a>
          </button>
          <a href='/vfg1' className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/deal.png" alt="LMAO"/>
            <a href="/vfg1" className="px-4">
              Volunteer
            </a>
          </a>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 bg-[#CBC7C7] rounded-r-3xl">
            <img className="h-5" src="../components/history.png" alt="LMAO" />
            <a href="/dvh" className="px-4">
              Donation/Volunteer History
            </a>
          </button>
          <a href='/mapViewVolunteer' className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/map.png" alt="LMAO" />
            <a href="/mapViewVolunteer" className="px-4">
              Map View
            </a>
          </a>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/settings.png" alt="LMAO" />
            <a href="/" className="px-4">
              Setting
            </a>
          </button>
        </div>
        {/* Log-out div */}
        <div className="log-out-btn flex w-2/5 py-2 my-8 bg-red-400 hover:bg-red-500 rounded-md justify-center items-center">
          <img className="h-5" src="../components/logout.png" alt="LMAO" />
          <button className="btn px-2">Log out</button>
        </div>
      </div>
          {/* Right wala dabba      j */}
      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
      <div className="top flex items-center justify-between ">
          <h1 className="text-3xl font-semibold">Donate/Volunteer History</h1>
          <div className="flex items-center h-fit w-fit">
            <p className="text-md font-semibold px-1 w-fit">
              Mohtashim
            </p>
            <img
              className="px-1 w-14"
              src="../components/mohtashim.png"
              alt="HAHAH"
            />
          </div>
        </div>
        {/* div for buttons */}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button className="btn-ongoing rounded-md bg-[#FFFFFF] px-2 py-1 mr-4  hover:bg-[#dedbdb]">
              <a href="/dvh">Donation History</a>
            </button>
            <a href='/volClosed' className="btn-successful rounded-md bg-[#AA8CFF] px-2 py-1 ml-4  hover:bg-[#9170ec]">
              <p>Volunteer History</p>
            </a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-96 flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl overflow-y-auto">
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/ramdan.png" className="w-12 rounded-full" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-4">Ramadan Ration Drive</div>
            </div>
            {/* Div for buttonx */}
            {/* <a href='/' className='bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]'>
              View Details
            </a> */}
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/mohtashim.png" className="w-12" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-4">Brain Donation Drive</div>
            </div>
            {/* Div for buttonx */}
            {/* <a href='/' className='bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]'>
              View Details
            </a> */}
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/volunteerPoster.png" className="w-12 rounded-full" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-4">Nafidu Volunteer Drive</div>
            </div>
            {/* Div for buttonx */}
            {/* <a href='/' className='bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]'>
              View Details
            </a> */}
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div class="imageAndTextDets flex items-center">
              <img src="../components/womenDay.png" className="w-12 rounded-full" alt="" />
              {/* Div for text dets */}
              <div className="text-xl font-bold ml-4">Women Internation Day Volunteer 2023</div>
            </div>
            {/* Div for buttonx */}
            {/* <a href='/' className='bg-[#6DA94E] text-white px-2 py-0.5 rounded-md hover:bg-[#588b3e]'>
              View Details
            </a> */}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default DonateVolunterHistory2
