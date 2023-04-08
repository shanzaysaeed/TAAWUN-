import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
import { setDoc, collection, doc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import NGOSideBar from "../../views/NGOSideBar";

const CreateCampaign = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [details, setDetails] = useState();
  const [location, setLocation] = useState();
  const [media, setMedia] = useState(null);
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
      
      <NGOSideBar/>

      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-3xl font-bold">Campaigns</h1>
          </div>
          <div className="flex items-center">
            <p className="text-2xl font-semibold px-1">EDHI</p>
            <img className="px-1 w-20 h-18" src="../components/edhhi.png" alt="ngo_logo" />
          </div>
        </div>

        <div className="middle pt-6">
          <p className="font-bold">Create a Campaign</p>
        </div>

        <div className="bottom pt-4 px-16 w-5/6">
          <div className="pb-4 pt-2">
            <h1 className="text-2xl font-bold">Info</h1>
          </div>
          
          <div className="title pb-2">
            <p className="text-sm font-bold">Title</p>
            <input className="w-full p-1 rounded-md" type="text" onChange={(e) => {setTitle(e.target.value); }}/>
          </div>
          
          <div className="description pb-2">
            <p className=" text-sm font-bold">Description</p>
            <textarea className="w-full p-1 rounded-md" type="text" onChange={(e) => {setDescription(e.target.value);}}/>
          </div>
          
          <div className="location pb-2">
            <p className="text-sm font-bold">Amount Needed</p>
            <input className="w-full p-1 rounded-md" type="text" onChange={(e) => {setAmount(e.target.value);}}/>
          </div>
          
          <div className="description pb-2">
            <p className="text-sm font-bold">Details about others things needed</p>
            <textarea className="w-full p-1 rounded-md" type="text" onChange={(e) => {setDetails(e.target.value);}}/>
          </div>
          
          <div className="amount-needed pb-2 flex justify-between">
            <div className="location">
              <p className="text-sm font-bold pb-2">Location</p>
              <input className="w-full p-1 rounded-md" type="text" onChange={(e) => {setLocation(e.target.value);}}/>
            </div>
            
            <div className="media">
              <label className="text-sm font-bold" for="multiple_files">Upload Media</label>
              <div className="border-2 border-black-300 rounded-md w-80 p-2">
                <input className="" type="file" accept="image/*" onChange={(e) => {setMedia(e.target.file);}}></input>
              </div>
            </div>

          </div>
          
          <div className="buttons flex justify-center pt-2">
            <button onClick={() => {navigate("/campaigns")}} className="bg-white  hover:bg-gray-500 text-black font-bold rounded-lg w-24 mx-8 py-1.5">
              Back
            </button>
            <button className="bg-[#12D200] hover:bg-[#1EB40F] font-bold rounded-lg w-24 mx-8 py-1.5" onClick={handleSubmit}>
              Post
            </button>
          </div>

        </div>
      
      </div>
    
    </div>
  );
};

export default CreateCampaign;
