import React from "react";
import DonorSideBar from "../../views/DonorSideBar";
import Map from "../map/Map";

const DonorMapView = () => {
  const loggedIn = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <div className="bg-[#D5C6FF] h-screen w-screen flex">
        <DonorSideBar/>
        <div class="righwladabbad bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
          <div className="top flex justify-between items-center">
            <div className="text-image">
              <h1 className="text-3xl font-semibold">Map View</h1>
            </div>
            <div className="flex items-center">
              <p className='text-black font-semibold underline text-lg mt-6 '>{loggedIn.firstName}</p>
              <img src={loggedIn.profilePictureURL} alt="profile" className='rounded-full flex-shrink-0 ml-4 mt-4 w-12 h-12' />
            </div>
          </div>
          <div className="mapAndButton h-full bg-[#F2F2F2] rounded-md flex flex-col justify-between mb-3">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorMapView;
