import React from "react";
import DonorSideBar from "../../views/DonorSideBar";

const DonorDashboard = () => {
  const loggedIn = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="flex bg-purple-300 w-screen h-screen">
      {/* {starts from here} */}

        <DonorSideBar/>
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-row w-full justify-between h-20">
          <div className="flex flex-col mt-6 mx-14">
            <div className="tracking-tighter text-black font-mono text-4xl font-semibold">
              <p>Welcome,</p>
            </div>
          </div>

          <div className="p-5 mr-20 flex items-start">
            <p className='text-black font-semibold underline text-lg mt-6 '>{loggedIn.firstName}</p>
            <img src={loggedIn.profilePictureURL} alt="profile" className='rounded-full flex-shrink-0 ml-4 mt-4 w-12 h-12' />
          </div>
        </div>

        <div className=" ml-14 mr-24 mb-8">
          <p className="font-semibold text-lg text-wrap">
            Ta'awun is an NGO management system which provides the following
            features for the ease of Donor's to donate, volunteer for a
            campaign, view donation history etc.
          </p>
        </div>

        <div className="border border-black w-4/5 ml-24 mb-4 rounded-md bg-gray-200">
          <div className="flex flex-row  w-full h-40 mt-4 mb-10 justify-center ml-10">
            <div className="flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20">
              <div className="flex flex-col mx-4 justify-center items-center">
                <img
                  src="../components/donation.png"
                  alt=""
                  className=" w-14 h-14 ml-2"
                ></img>
                <p className="font-bold text-lg  text-center">Donate</p>
              </div>
            </div>
            <div className="flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-20">
              <div className="flex flex-col  mx-4  mb-1 justify-center items-center">
                <img
                  src="../components/volunteer2.png"
                  alt=""
                  className=" w-14 h-14 "
                ></img>
                <p className="font-bold text-lg ">Volunteer</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row  w-full h-40 justify-center mb-4">
            <div className="flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20">
              <div className="flex flex-col  mx-4 justify-center items-center">
                <img
                  src="../components/history.png"
                  alt=""
                  className=" w-12 h-12 "
                ></img>
                <p className="font-bold text-lg mb-2 text-center">
                  View Donation History
                </p>
              </div>
            </div>
            <div className="flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center">
              <div className="flex flex-col  mx-4 justify-center items-center">
                <img
                  src="../components/map.png"
                  alt=""
                  className=" w-14 h-14 mb-3 "
                ></img>
                <p className="font-bold text-lg mb-2 text-center">
                  Check Map View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
