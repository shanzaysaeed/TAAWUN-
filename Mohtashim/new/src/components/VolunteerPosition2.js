import React from 'react'
import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const VolunteerPosition2 = () => {
  const navigate = useNavigate();
    // const [title, setTitle] = useState();
    const [overview, setOverview] = useState();
    const [causes, setCauses] = useState();
    const [location, setLocation] = useState();
    // const [timings, setTimings] = useState();
    const userCollectionRef = collection(db, "contactData");
    const handleSubmit = () => {
        addDoc(userCollectionRef, {
        // title: title,
        overview: overview,
        causes: causes,
        location: location,
        // timings: timings
        });
    };
    return (
    <div className="flex bg-[#D5C6FF] justify-between">
      {/* Left Dabba */}
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
            <a href="/" className="px-4">
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
            <a href="/" className="px-4">
              Map View
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8   bg-[#CBC7C7] rounded-r-3xl">
            <img className="h-5" src="../components/volunteer.png" alt="LMAO" />
            <a href="/" className="px-4">
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
      <div class="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="text-image">
          <h1 className="text-3xl font-semibold leading-none">
            Volunteer Position 22222222
          </h1>
        </div>

        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-20 mb-3 pb-3 rounded-xl">
          <div className="description flex flex-col">
            <label className="py-1">Detialed overview about the position</label>
            <textarea
              className=" rounded-md px-2 py-1"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setOverview(event.target.value);
              }}
            ></textarea>
          </div>

          <div className="description flex flex-col">
            <label className="py-1">Associated Causes</label>
            <textarea
              className=" rounded-md px-2 py-1"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setCauses(event.target.value);
              }}
            ></textarea>
          </div>
          
          <div className="description flex flex-col">
            <label className="py-1">Location</label>
            <textarea
              className=" rounded-md px-2 py-1"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            ></textarea>
          </div>

          <div className="buttons flex self-center">
            <button className="bg-[#CCCCCC] hover:bg-[#B6B0B0] text-black font-bold rounded-lg w-24 mx-8 py-1.5" onClick={()=>{
              navigate("vol1");
            }}>
              Go Back
            </button>
            <button className="bg-[#12D200] hover:bg-[#1EB40F] font-bold rounded-lg w-24 mx-8 py-1.5" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerPosition2
