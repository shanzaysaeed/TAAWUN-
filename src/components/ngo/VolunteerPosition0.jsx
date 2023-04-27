import React from 'react'
import NGOSideBar from '../../views/NGOSideBar'

const VolunteerPosition0 = () => {
  return (
    <div className="flex bg-purple-300 justify-between">
      <NGOSideBar/>
      {/* Right wala dabba */}
      <div className="right-box bg-purple-300 w-3/4 pt-10 flex flex-col">
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-4xl font-bold font-mono tracking-tighter">Volunteer Position</h1>
          </div>
          <div className="flex items-center mr-10">
            <p className="text-lg font-semibold px-1 underline">Edhi</p>
            <img
              className="px-1 w-12 h-12"
              src="../components/edhilogo.png"
              alt="HAHAH"
            />
          </div>
        </div>
        {/* div for buttons */}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button className="btn-ongoing rounded-md bg-purple-400 px-4 mr-3 border border-black">
              <a href="/cc1">Active</a>
            </button>
            <a href='/volClosed' className="btn-successful rounded-md bg-[#FFFFFF] px-4 ml-4 py-1 border border-black">
              <p>Closed</p>
            </a>
          </div>
          <div className="rightButton rounded-md text-gray-50 bg-[#26235C] px-4 py-1 mr-12 border border-black">
            <a href="/vol1">Create +</a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-3/4 flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl overflow-y-auto mr-12">
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div class="imageAndTextDets flex">
              <img src="../components/edhilogo.png" alt="" />
              {/* Div for text dets */}
              <div className="textDets flex flex-col px-4">
                <div className="header flex flex-col">
                  <p className='text-2xl font-semibold'>Ramadan Ration Drive Volunteer 2023</p>
                  <div className="grayedDets flex">
                    <p className='text-xs mr-2'><b>Date:</b> DD-MM-YYYY</p>
                    <p className='text-xs mx-2'><b>Time:</b> HH:MM - HH:MM</p>
                    <p className='text-xs ml-2'><b>Duration:</b> HH to HH hrs</p>
                  </div>
                </div>
                <div className="footer">
                  <p><b>Address:</b> 123, Street 4, block D, DHA Phase 5, Lahore.</p>
                </div>
              </div>
            </div>
            {/* Div for buttonx */}
            <a href='/vol2' className='bg-[#6DA94E] text-white px-2 py-0.5 rounded-md'>
              View Applications
            </a>
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div class="imageAndTextDets flex">
              <img src="../components/jdc.png" alt="" />
              {/* Div for text dets */}
              <div className="textDets flex flex-col px-4">
                <div className="header flex flex-col">
                  <p className='text-2xl font-semibold'>Ramadan Ration Drive Volunteer 2023</p>
                  <div className="grayedDets flex">
                    <p className='text-xs mr-2'><b>Date:</b> DD-MM-YYYY</p>
                    <p className='text-xs mx-2'><b>Time:</b> HH:MM - HH:MM</p>
                    <p className='text-xs ml-2'><b>Duration:</b> HH to HH hrs</p>
                  </div>
                </div>
                <div className="footer">
                  <p><b>Address:</b> 123, Street 4, block D, DHA Phase 5, Lahore.</p>
                </div>
              </div>
            </div>
            {/* Div for buttonx */}
            <a href='/vol2' className='bg-[#6DA94E] text-white px-2 py-0.5 rounded-md'>
              View Applications
            </a>
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <div class="imageAndTextDets flex">
              <img src="../components/SA.png" alt="" />
              {/* Div for text dets */}
              <div className="textDets flex flex-col px-4">
                <div className="header flex flex-col">
                  <p className='text-2xl font-semibold'>Ramadan Ration Drive Volunteer 2023</p>
                  <div className="grayedDets flex">
                    <p className='text-xs mr-2'><b>Date:</b> DD-MM-YYYY</p>
                    <p className='text-xs mx-2'><b>Time:</b> HH:MM - HH:MM</p>
                    <p className='text-xs ml-2'><b>Duration:</b> HH to HH hrs</p>
                  </div>
                </div>
                <div className="footer">
                  <p><b>Address:</b> 123, Street 4, block D, DHA Phase 5, Lahore.</p>
                </div>
              </div>
            </div>
            {/* Div for buttonx */}
            <a href='/vol2' className='bg-[#6DA94E] text-white px-2 py-0.5 rounded-md'>
              View Applications
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerPosition0
