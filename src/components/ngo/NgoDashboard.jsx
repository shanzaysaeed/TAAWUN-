import React from "react";
import NGOSideBar from "../../views/NGOSideBar";

const NgoDashboard = () => {
  const loggedIn = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="flex bg-[#D5C6FF] w-screen h-screen">
      <NGOSideBar/>

      <div className="right-box w-3/4 px-10 pt-10 flex flex-col">
        <div className="flex flex-row w-full justify-between h-20">
          <div className="flex flex-col mt-6 mx-14">
            <div className="tracking-tighter text-black font-mono text-4xl font-semibold">
              <p>Welcome,</p>
            </div>
          </div>
          <div className="p-5 mr-20 flex items-start">
            <p className="text-black font-semibold text-xl mt-4 underline "> {loggedIn.name} </p>
            <img src={loggedIn.logoURL} alt="pp" className="rounded-full flex-shrink-0 px-1 h-14 w-16"></img>
          </div>
        </div>

        <div className=" ml-14 mr-24 mb-8">
          <p className="font-semibold text-lg text-wrap">
            Ta'awun is an NGO management system which provides the following
            features for the ease of NGO's to collaborate, create/edit/delete a
            campaign, view donation applications, post a volunteer position etc.
          </p>
        </div>

        <div className="border border-black w-4/5 ml-24 mb-4 rounded-md bg-gray-200">
          <div className="flex flex-row  w-full h-40 mt-4 mb-10 justify-center">
            <div className="flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20">
              <div className="flex flex-col  mx-4  mb-1 justify-center items-center">
                <img src="../components/donation.png" alt="" className=" w-14 h-14 ml-2"></img>
                <p className="font-bold text-lg mb-2 text-center">
                  Create campaign
                </p>
              </div>
            </div>
            <div className="flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-20">
              <div className="flex flex-col  mx-4  mb-1 justify-center items-center">
                <img src="../components/deal.png" alt="icon" className=" w-14 h-14 "></img>
                <p className="font-bold text-lg mb-2">Collaborate</p>
              </div>
            </div>
            <div className="flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center">
              <div className="flex flex-col  mx-4 justify-center items-center">
                <img src="../components/google-docs.png" alt="icon" className=" w-12 h-12 "></img>
                <p className="font-bold text-lg mb-2 text-center">
                  View Donor Applications
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row  w-full h-40 justify-center mb-4">
            <div className="flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20">
              <div className="flex flex-col  mx-4 justify-center items-center">
                <img src="../components/history.png" alt="" className=" w-12 h-12 mb-3 "></img>
                <p className="font-bold text-lg mb-2 text-center">
                  View Donation History
                </p>
              </div>
            </div>
            <div className="flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-20">
              <div className="flex flex-col  mx-4 justify-center items-center">
                <img src="../components/volunteer.png" alt="" className=" w-12 h-12 "></img>
                <p className="font-bold text-lg mb-2 text-center">
                  Create Volunteer positions
                </p>
              </div>
            </div>
            <div className="flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center">
              <div className="flex flex-col  mx-4 justify-center items-center">
                <img src="../components/map.png" alt="" className=" w-14 h-14 mb-3 "></img>
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

export default NgoDashboard;
