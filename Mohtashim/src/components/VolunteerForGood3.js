import React from "react";
import { useState } from "react";
import { db } from "../firebaseConfig";
// import { Link } from "react-router-dom";
import { setDoc, collection, doc } from "firebase/firestore";
import { storage } from "../firebaseConfig";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const VolunteerForGood3 = () => {
  const [motivation, setMotivation] = useState();
  const [experience, setExperience] = useState();
  const [myResume, setMyResume] = useState();
  const userCollectionRef = collection(db, "VolunteerApplyingForPosition");
  const contactData = doc(userCollectionRef)
  const navigate = useNavigate();

  const handleNavigate = async () => {
    navigate("/vfg1");
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    const storageRef = ref(storage, `volunteerApplying/${setMyResume.name}`)
    await uploadBytes(storageRef, myResume)
    const resumeURL = await getDownloadURL(storageRef)
    await setDoc(contactData, {
      motivation: motivation,
      experience: experience,
      resumeURL
    });
    handleNavigate();
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
            <a href="/dvh" className="px-4">
            Donation/Volunteer History
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/map.png" alt="LMAO" />
            <a href="/mapView" className="px-4">
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
        <div className="text-image flex justify-between items-center">
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
        {/* Gray Area */}
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-20 mb-3 pb-3 rounded-xl">
            <p className="heading h1 text-xl font-bold border-b border-slate-400 pb-2">Fund Raising by Shahid Afridi Foudation</p>
          <div className="title flex flex-col">
            <label className="py-1">Why do you want this position (tell us about your motivation)?</label>
            <textarea
              type="text"
              className="form-control rounded-md px-2 py-1"
              id="exampleFormControlInput1"
              onChange={(event) => {
                setMotivation(event.target.value);
              }}
            />
          </div>

          <div className="description flex flex-col">
            <label className="py-1">Any prior experience?</label>
            <textarea
              className=" rounded-md px-2 py-1"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setExperience(event.target.value);
              }}
            ></textarea>
          </div>
          <div class="siappa flex justify-between">
                <label className="">Upload Resume:</label>
                <input className="w-2/3" type="file" id="formFile" onChange={(event) => {
                setMyResume(event.target.files[0]);
              }} />
          </div>
          <div className="buttons flex self-center">
            <button className="bg-[#CCCCCC] hover:bg-[#B6B0B0] text-black font-bold rounded-lg w-24 mx-8 py-1.5" onClick={()=>{
              navigate("/vfg2");
            }}>
              Go Back
            </button>
            <button className="bg-[#12D200] hover:bg-[#1EB40F] font-bold rounded-lg w-24 mx-8 py-1.5" onClick={handleSubmit} >
              {/* <Link to= "/VolunteerPosition2">Next</Link> */}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForGood3;
