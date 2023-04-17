
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { setDoc, collection, doc } from "firebase/firestore";
import { storage } from "../firebaseConfig";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";

const CreateCampaign = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [details, setDetails] = useState();
  const [location, setLocation] = useState();
  const [media, setMedia] = useState();
  const userCollectionRef = collection(db, "createCampaign");
  const createCampaign = doc(userCollectionRef)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const storageRef = ref(storage, `createCampaigns/${title}_${media.name}`)
    await uploadBytes(storageRef, media)
    const pictureURL = await getDownloadURL(storageRef)
    await setDoc(createCampaign, {
      title: title,
      description: description,
      amount: amount,
      details: details,
      location: location,
      pictureURL
    });
  }

  const navigate = useNavigate();
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <div className="bg-[#F2F2F2] h-screen w-1/4 flex flex-col justify-between items-center">
        {/* Logo's div */}
        <div className="image bg-opacity-100 h-1/6 flex justify-center">
          <img className="" src="../components/Logo_Final.png" alt="haha" />
        </div>

        {/* Menu options' div */}
        <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/home.png" alt="LMAO" />
            <a href="/" className="px-4">
              Home
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8  bg-[#CBC7C7] rounded-r-3xl">
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
          <button
            className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl"
            onClick={() => navigate("/vol1")}
          >
            <img className="h-5" src="../components/volunteer.png" alt="LMAO" />
            <a href="/vol0" className="px-4">
              Volunteer Position
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/settings.png" alt="LMAO" />
            <a href="/vol1" className="px-4">
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
      {/* Right Wala dabba */}
      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-3xl font-semibold">Volunteer Position</h1>
          </div>
          <div className="flex items-center">
            <p className="text-2xl font-semibold px-1">EDHI</p>
            <img className="px-1" src="../components/edhilogo.png" alt="HAHAH"/>
          </div>
        </div>

        <div className="middle">
          <p className="font-bold">Create Campaigns</p>
        </div>

        <div className="bottom pt-4 px-16">
          <div className="title pb-4">
            <p className="text-sm font-medium text-gray-900">Title of the Campaign</p>
            <input className="w-full p-1 rounded-md" type="text" onChange={(event) => {
                setTitle(event.target.value);
              }}/>
          </div>
          <div className="description pb-3">
            <p className="text-sm font-medium text-gray-900">Detialed descrition about the campaign</p>
            <textarea className="w-full p-1 rounded-md" type="text" onChange={(event) => {
                setDescription(event.target.value);
              }}/>
          </div>
          <div className="location pb-3">
            <p className="text-sm font-medium text-gray-900">Enter the amout needed</p>
            <input className="w-full p-1 rounded-md" type="text" onChange={(event) => {
                setAmount(event.target.value);
              }}/>
          </div>
          <div className="description pb-3">
            <p className="text-sm font-medium text-gray-900">Enter the details about the non-monetry stuff needed</p>
            <textarea className="w-full p-1 rounded-md" type="text" onChange={(event) => {
                setDetails(event.target.value);
              }}/>
          </div>
          <div className="amount-needed pb-3 flex justify-between">
            <div className="location">
              <p className="text-sm font-medium text-gray-900">Enter the location</p>
              <input className="w-full p-1 rounded-md" type="text"  onChange={(event) => {
                setLocation(event.target.value);
              }}/>
            </div>
            <div className="media">
              <label className="block text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload Media</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1" id="multiple_files" type="file" multiple onChange={(event) => {
                setMedia(event.target.files[0]);
              }} />
            </div>
          </div>
          <div className="buttons flex justify-center">
            <button className="bg-[#CCCCCC] hover:bg-[#B6B0B0] text-black font-bold rounded-lg w-24 mx-8 py-1.5">
              <Link to='/cc1'>Back</Link>
            </button>
            {/* <a href="/"> */}
              <button className="bg-[#12D200] hover:bg-[#1EB40F] font-bold rounded-lg w-24 mx-8 py-1.5" onClick={handleSubmit}>
                <Link to="/cc1">Post</Link>
              </button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
