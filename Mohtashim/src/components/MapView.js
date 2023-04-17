import React from "react";
import { useNavigate } from "react-router-dom";

const MapView = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[#D5C6FF] h-screen w-screen flex">
        <div className="bg-[#F2F2F2] h-screen w-1/4 flex flex-col justify-between items-center">
          {/* Logo's div */}
          <div className="image bg-opacity-100 h-1/6 flex justify-center">
            <img className="" src="../components/Logo_Final.png" alt="haha" />
          </div>

          {/* Menu options' div */}
          <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
            <button className="flex items-center mt-1 pl-10 py-2 mr-8 rounded-r-3xl hover:bg-[#e5e1e1]">
              <img className="h-5" src="../components/home.png" alt="LMAO" />
              <a href="/" className="px-4">
                Home
              </a>
            </button>
            <button
              className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl"
              onClick={() => navigate("/cc1")}
            >
              <img
                className="h-5"
                src="../components/donation.png"
                alt="LMAO"
              />
              <a href="/cc1" className="px-4">
                Campaigns
              </a>
            </button>
            <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
              <img className="h-5" src="../components/deal.png" alt="LMAO" />
              <a href="/" className="px-4">
                Collaboration
              </a>
            </button>
            <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl ">
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
            <button className="flex items-center mt-1 pl-10 py-2 mr-8  bg-[#CBC7C7] rounded-r-3xl">
              <img className="h-5" src="../components/map.png" alt="LMAO" />
              <a href="/mapView" className="px-4">
                Map View
              </a>
            </button>
            <button
              className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl"
              onClick={() => navigate("/vol1")}
            >
              <img
                className="h-5"
                src="../components/volunteer.png"
                alt="LMAO"
              />
              <a href="/vol0" className="px-4">
                Volunteer Position
              </a>
            </button>
            <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
              <img
                className="h-5"
                src="../components/settings.png"
                alt="LMAO"
              />
              <a href="/vol1" className="px-4">
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
        <div class="righwladabbad bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
          <div className="top flex justify-between items-center">
            <div className="text-image">
              <h1 className="text-3xl font-semibold">Map View</h1>
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
          {/* Gray Area */}
          <div className="mapAndButton h-full bg-[#F2F2F2] rounded-md flex flex-col justify-between mb-3">
                <img className="object-fill w-full h-96" src="../components/WalledAndMe.png" alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapView;
