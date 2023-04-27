import React from "react";
import NGOSideBar from "../../views/NGOSideBar";
// import { useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import { useNavigate } from 'react-router-dom';

const VolunteerPosition2 = () => {
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
    <div className="flex bg-purple-300 justify-between">
      {/* Left Dabba */}
      <NGOSideBar/>

      {/* Right wala dabba */}
      <div className="right-box bg-purple-300 w-3/4 pt-10 flex flex-col">
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-4xl font-bold font-mono tracking-tighter">Volunteer Position</h1>
          </div>
          <div className="flex items-center mr-12">
            <p className="text-lg font-semibold px-1 underline">Edhi</p>
            <img
              className="px-1 w-12 h-12"
              src="../components/edhilogo.png"
              alt="HAHAH"
            />
          </div>
        </div>
        {/* div for buttons */}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button className="btn-ongoing rounded-md bg-purple-400 px-2 mr-4 border border-black font-semibold">
              <a href="/vol2">Live Applications</a>
            </button>
            <button className="btn-successful rounded-md bg-[#FFFFFF] px-2 mr-4 border border-black font-semibold">
              <a href="/volApproved">Approved Applications</a>
            </button>
            <button className="btn-successful rounded-md bg-[#FFFFFF] px-2 border border-black font-semibold">
              <a href="/volRejected">Rejected Applications</a>
            </button>
          </div>
          <div className="rightButton rounded-md text-gray-50 bg-[#26235C] px-4 py-1 mr-14 border border-black">
            <a href="/vol1">Create +</a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-6 px-8 mb-3 pb-3 rounded-xl mr-14">
          <div className="upper-wala-maal">
            <div className="title">
              <p className="text-2xl font-bold mb-4">Ramadan Ration Drive Volunteer 2023</p>
            </div>
            <div className="stats flex justify-between mb-2">
              <p className="text-sm"><b>Volunteers Needed</b>: 20</p>
              <p className="text-sm"><b>Volunteers Applied</b>: 69</p>
              <p className="text-sm"><b>Volunteers Accepted</b>: 12</p>
            </div>
          </div>
          {/* Position#1 */}
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md py-1 px-4 justify-between">
            <div class="image-and-title flex w-full">
              <img className="w-16" src="../components/mohtashim.png" alt="" />
              <div className="text px-8 flex flex-col justify-between">
                <h1 className="text-xl font-bold">Mohtashim Clown</h1>
                <div className="email-and-contact flex">
                  <div className="emial flex pr-4">
                    <img
                      className="w-4"
                      src="../components/contact-mail.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">0333-5634122</p>
                  </div>
                  <div className="contact flex pl-4">
                    <img
                      className="w-4"
                      src="../components/phone-call.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">pain@gmail.com</p>
                  </div>
                </div>
                <div className="address">
                  Address: 123, Street 4, block D, DHA Phase 5, Lahore.
                </div>
              </div>
            </div>
            <div class="icons flex flex-col w-1/5 justify-between px-2 items-center h-full">
              <div className="buttons flex w-2/3 mt-1">
                <button className="w-8 mx-1">
                  <img src="../components/correct.png" alt="" />
                </button>
                <button className="w-8 mx-1">
                  <img src="../components/remove.png" alt="" />
                </button>
              </div>
              <a href="/vol3">
              <p className="font-normal text-sm bg-[#2f2c72] hover:bg-[#1b184a] text-[#FFFFFF] px-2 py-0.5 rounded-md border border-black">See Details</p>
              </a>
            </div>
          </div>
          {/* Position#2 */}
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md py-1 px-4 justify-between">
            <div class="image-and-title flex w-full">
              <img className="w-16" src="../components/maryam.png" alt="" />
              <div className="text px-8 flex flex-col justify-between">
                <h1 className="text-xl font-bold">Maryam Shakeel</h1>
                <div className="email-and-contact flex">
                  <div className="emial flex pr-4">
                    <img
                      className="w-4"
                      src="../components/contact-mail.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">0333-9912755</p>
                  </div>
                  <div className="contact flex pl-4">
                    <img
                      className="w-4"
                      src="../components/phone-call.png"
                      alt=""
                    />
                    <p className="text-xs pl-2">lmao@gmail.com</p>
                  </div>
                </div>
                <div className="address">
                  Address: 123, Street 4, block D, DHA Phase 5, Lahore.
                </div>
              </div>
            </div>
            <div class="icons flex flex-col w-1/5 justify-between px-2 items-center h-full">
              <div className="buttons flex w-2/3 mt-1">
                <button className="w-8 mx-1">
                  <img src="../components/correct.png" alt="" />
                </button>
                <button className="w-8 mx-1">
                  <img src="../components/remove.png" alt="" />
                </button>
              </div>
              <a href="/vol3">
              <p className="font-normal text-sm bg-[#2f2c72] hover:bg-[#1b184a] text-[#FFFFFF] px-2 py-0.5 rounded-md border border-black">See Details</p>
              </a>
            </div>
          </div>

          {/* Position#3 */}
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md py-1 px-4 justify-between">
            <div class="image-and-title flex w-full">
              <img className="w-16" src="../components/zay.png" alt="" />
              <div className="text px-8 flex flex-col justify-between">
                <h1 className="text-xl font-bold">Chocolate</h1>
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
              <div className="buttons flex w-2/3 mt-1">
                <button className="w-8 mx-1">
                  <img src="../components/correct.png" alt="" />
                </button>
                <button className="w-8 mx-1">
                  <img src="../components/remove.png" alt="" />
                </button>
              </div>
              <a href="/vol3">
              <p className="font-normal text-sm bg-[#2f2c72] hover:bg-[#1b184a] text-[#FFFFFF] px-2 py-0.5 rounded-md border border-black">See Details</p>
              </a>
            </div>
          </div>
          <a href="/vol0" className="button self-center rounded-md bg-[#1b184a] px-4 py-1">
            <p className="text-slate-50">Go Back</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPosition2;
