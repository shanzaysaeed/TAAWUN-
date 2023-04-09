import React from 'react'

const VolunteerPositionClosed = () => {
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <div className="bg-[#F2F2F2] h-screen w-1/4 flex flex-col justify-between items-center">
        {/* Logo's div */}
        <div className="image bg-opacity-100 h-1/6 flex justify-center">
          <img className="" src="../components/Logo_Final.png" alt="haha" />
        </div>

        {/* Menu options' div */}
        <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
          <button className="flex items-center mt-1 pl-10 py-2 mr-8  hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/home.png" alt="LMAO" />
            <a href="/" className="px-4">
              Home
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/donation.png" alt="LMAO" />
            <a href="cc1/" className="px-4">
              Campaigns
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/deal.png" alt="LMAO" />
            <a href="/" className="px-4">
              Collaboration
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img
              className="h-5"
              src="../components/google-docs.png"
              alt="LMAO"
            />
            <a href="/" className="px-4">
              Donation Applications
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/history.png" alt="LMAO" />
            <a href="/" className="px-4">
              Donation History
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/map.png" alt="LMAO" />
            <a href="/mapView" className="px-4">
              Map View
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8   bg-[#CBC7C7] rounded-r-3xl">
            <img className="h-5" src="../components/volunteer.png" alt="LMAO" />
            <a href="/vol0" className="px-4">
              Volunteer Position
            </a>
          </button>
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
