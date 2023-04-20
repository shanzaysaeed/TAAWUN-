import React from "react";
import NGOSideBar from "../../views/NGOSideBar";
// import { useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import { useNavigate } from 'react-router-dom';

const VolunteerPositionRejected = () => {
  // const navigate = useNavigate();
  //   // const [title, setTitle] = useState();
  //   const [overview, setOverview] = useState();
  //   const [causes, setCauses] = useState();
  //   const [location, setLocation] = useState();
  //   // const [timings, setTimings] = useState();
  //   const userCollectionRef = collection(db, "contactData");
  //   const handleSubmit = () => {
  //       addDoc(userCollectionRef, {
  //       // title: title,
  //       overview: overview,
  //       causes: causes,
  //       location: location,
  //       // timings: timings
  //       });
  //   };
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      {/* Left Dabba */}
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
              <a href="/vol2">Live Applications</a>
            </button>
            <button className="btn-successful rounded-md bg-[#FFFFFF] px-2 py-1 mr-4">
              <a href="/volApproved">Approved Applications</a>
            </button>
            <button className="btn-successful rounded-md bg-[#AA8CFF] px-2 py-1">
              <a href="/volRejected">Rejected Applications</a>
            </button>
          </div>
          <div className="rightButton rounded-md text-gray-50 bg-[#26235C] px-2 py-1 mr-4">
            <a href="/vol1">Create +</a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-6 px-8 mb-3 pb-3 rounded-xl">
          <div className="upper-wala-maal">
            <div className="title">
              <p className="text-2xl">Ramadan Ration Drive Volunteer 2023</p>
            </div>
            <div className="stats flex justify-between">
              <p className="text-sm"><b>Volunteers Needed</b>: 20</p>
              <p className="text-sm"><b>Volunteers Applied</b>: 69</p>
              <p className="text-sm"><b>Volunteers Accepted</b>: 12</p>
            </div>
          </div>
          {/* Position#2 */}
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md py-1 px-4 justify-between ">
          <div class="image-and-title flex">
              <img className="w-16" src="../components/zay.png" alt="" />
              <div className="text px-8 flex flex-col justify-between">
                <h1 className="text-xl font-semibold">Chocolate</h1>
                <div className="email-and-contact flex">
                  <div className="emial flex pr-4">
                    <img
                      className="w-4"
                      src="../components/contact-mail.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">0333-4568009</p>
                  </div>
                  <div className="contact flex pl-4">
                    <img
                      className="w-4"
                      src="../components/phone-call.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">butterfly@gmail.com</p>
                  </div>
                </div>
                <div className="address">
                  Address: 123, Street 4, block D, DHA Phase 5, Lahore.
                </div>
              </div>
            </div>
            <div class="icons flex flex-col w-1/5 justify-between px-2 items-center h-full">
              <div className="buttons flex w-1/3">
                <div className="w-fit mx-1">
                  <img src="../components/remove.png" alt="" />
                </div>
              </div>
              <a href="/volPSDAA">
                <p className="font-normal text-sm bg-[#2f2c72] hover:bg-[#1b184a] text-[#FFFFFF] px-2 py-0.5 rounded-md">See Details</p>
              </a>
            </div>
          </div>

          {/* Another position */}
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md py-1 px-4 justify-between">
          <div class="image-and-title flex">
              <img className="w-16" src="../components/zay.png" alt="" />
              <div className="text px-8 flex flex-col justify-between">
                <h1 className="text-xl font-semibold">Chocolate</h1>
                <div className="email-and-contact flex">
                  <div className="emial flex pr-4">
                    <img
                      className="w-4"
                      src="../components/contact-mail.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">0333-4568009</p>
                  </div>
                  <div className="contact flex pl-4">
                    <img
                      className="w-4"
                      src="../components/phone-call.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">butterfly@gmail.com</p>
                  </div>
                </div>
                <div className="address">
                  Address: 123, Street 4, block D, DHA Phase 5, Lahore.
                </div>
              </div>
            </div>
            <div class="icons flex flex-col w-1/5 justify-between px-2 items-center h-full">
              <div className="buttons flex w-1/3">
                <div className="w-fit mx-1">
                  <img src="../components/remove.png" alt="" />
                </div>
              </div>
              <a href="/volPSDAA">
                <p className="font-normal text-sm bg-[#2f2c72] hover:bg-[#1b184a] text-[#FFFFFF] px-2 py-0.5 rounded-md">See Details</p>
              </a>
            </div>
          </div>
          <a href="/vol2" className="button self-center rounded-md bg-[#2196F3] px-2 py-0.5">
            <p className="text-slate-50">Go Back</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPositionRejected;
