import { Link } from "react-router-dom";
import React from "react";
import DonorSideBar from '../../views/DonorSideBar';

const VolunteerForGood2 = () => {
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <DonorSideBar/>

      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="top flex items-center justify-between ">
          <h1 className="text-3xl font-semibold">Volunteer For Greater Good</h1>
          <div className="flex items-center h-fit w-fit">
            <p className="text-md font-semibold px-1 w-fit">
              Mohtashim
            </p>
            <img
              className="px-1 w-14"
              src="../components/mohtashim.png"
              alt="HAHAH"
            />
          </div>
        </div>

        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-20 mb-3 pb-3 rounded-xl">
          <div class="p1 flex justify-between border-b border-black pb-4">
            <div class="textStuff flex flex-col">
                <div class="heading h1 text-xl font-bold">
                Fund Raising by Shahid Afridi Foudation
                </div>
                <p className="text-xs">
                    <b>Address</b>: 204 E.I Daud Pota Road, Karachi
                </p>
            </div>
            <div class="imagePoster">
                <img src="../components/SA.png" alt="SHUSH" className="w-24 rounded-lg"/>
            </div>
          </div>

          <div class="p2 flex justify-between border-b border-black pb-4">
          <div class="textStuff flex flex-col">
                <div class="heading h1 text-xl font-bold">
                    Description
                </div>
                <div class="causes flex items-center justify-between">
                    Join us in our mission to provide food supplies to those in need during Ramadan. We are looking for volunteers to help us distribute food and collect donations. No experience is necessary, applicants from every background are welcomed. Fill out the form to register and indicate your availability.
                </div>
            </div>
          </div>

          <div class="p3">
                <div class="heading h1 text-xl font-bold">
                    Responsibilities
                </div>
                <li>Fund Raising</li>
                <li>Packing Ration Bag</li>
          </div>
          <div className="buttons flex self-center">
            <button className="bg-[#CCCCCC] hover:bg-[#B6B0B0] text-black font-bold rounded-lg w-24 mx-8 py-1.5">
              <Link to="/vfg1">Go Back</Link>
            </button>
            <a href="/vfg3" className="bg-[#12D200] hover:bg-[#1EB40F] font-bold rounded-lg flex items-center justify-center px-5">
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForGood2;
