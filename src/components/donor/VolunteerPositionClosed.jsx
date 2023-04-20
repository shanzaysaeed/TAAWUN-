import React from 'react'
import NGOSideBar from '../../views/NGOSideBar'

const VolunteerPositionClosed = () => {
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <NGOSideBar/>
      {/* Right wala dabba */}
      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-3xl font-semibold">Volunteer Position</h1>
          </div>
          <div className="flex items-center">
            <p className="text-2xl font-semibold px-1">EDHI</p>
            <img
              className="px-1"
              src="../components/edhilogo.png"
              alt="HAHAH"
            />
          </div>
        </div>
        {/* div for buttons */}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button className="btn-ongoing rounded-md bg-[#FFFFFF] px-2 py-1 mr-4">
              <a href="/vol0">Active</a>
            </button>
            <button className="btn-successful rounded-md bg-[#AA8CFF] px-2 py-1 ml-4">
              <a href="/vol2">Closed</a>
            </button>
          </div>
          <div className="rightButton rounded-md text-gray-50 bg-[#26235C] px-2 py-1 mr-4">
            <a href="/vol1">Create +</a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl">
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
            <div className='bg-[#FB5050] text-white px-2 py-0.5 rounded-md'>
              Closed
            </div>
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
            <div className='bg-[#FB5050] text-white px-2 py-0.5 rounded-md'>
              Closed
            </div>
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
            <div className='bg-[#FB5050] text-white px-2 py-0.5 rounded-md'>
              Closed
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerPositionClosed
