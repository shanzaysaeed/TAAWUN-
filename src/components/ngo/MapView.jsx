import React from "react";
import NGOSideBar from "../../views/NGOSideBar";
import Map from "../map/Map"

const NGOMapView = () => {
    const loggedIn = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="flex bg-purple-300 justify-between">
      <NGOSideBar />

      <div className="right-sidebar bg-purple-300 w-3/4 pt-10 flex flex-col">
        <div className="top flex items-center justify-between">
          <h1 className="text-4xl font-mono tracking-tighter font-bold">Map View</h1>
          <div className="flex items-center">
            <p className="text-black font-semibold underline text-lg mt-4 mr-6">{loggedIn.name}</p>
            <img src={loggedIn.logoURL} alt="profile" className='rounded-full flex-shrink-0 mr-10 h-12 w-12' />
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
