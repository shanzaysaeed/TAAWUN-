import React from "react";
import NGOSideBar from "../../views/NGOSideBar";
import Map from "../Map/Map"

const NGOMapView = () => {
    const loggedIn = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <NGOSideBar />

      <div className="right-sidebar bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="top flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Map View</h1>
          <div className="flex items-center">
            <p className="px-1 text-black font-semibold underline text-lg mt-4 mr-1">{loggedIn.name}</p>
            <img src={loggedIn.logoURL} alt="profile" className='rounded-full flex-shrink-0 px-1 h-14 w-16' />
          </div>
        </div>
        {/* Gray Area */}
        <div className="mapAndButton h-full bg-[#F2F2F2] rounded-md flex flex-col justify-between mb-3">
            <Map />
          </div>
      </div>
    </div>
  );
};

export default NGOMapView;
