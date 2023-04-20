import React from 'react'
// import { Navigate, useNavigate } from 'react-router-dom';
import DonorSideBar from '../../views/DonorSideBar';

const DonateVolunterHistory2 = () => {
// const navigate = useNavigate();
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <DonorSideBar/>
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