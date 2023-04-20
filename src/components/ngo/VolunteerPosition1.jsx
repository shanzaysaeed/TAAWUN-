import React from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
// import { Link } from "react-router-dom";
import { setDoc, collection, doc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import NGOSideBar from "../../views/NGOSideBar";

const VolunteerPosition1 = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [workingHours, setWorkingHours] = useState();
  const [duration, setDuration] = useState();
  const [timings, setTimings] = useState();
  const [myPicture, setMyPicture] = useState();
  const userCollectionRef = collection(db, "contactData");
  const contactData = doc(userCollectionRef)
  const navigate = useNavigate();

  const handleNavigate = async () => {
    navigate("/vol0");
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    const storageRef = ref(storage, `posters/${title}_${myPicture.name}`)
    await uploadBytes(storageRef, myPicture)
    const pictureURL = await getDownloadURL(storageRef)
    await setDoc(contactData, {
      title: title,
      desc: desc,
      workingHours: workingHours,
      duration: duration,
      timings: timings,
      pictureURL
    });
    handleNavigate();
  };
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      {/* Left Dabba */}
      <NGOSideBar/>

      {/* Right wala dabba */}
      <div class="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="text-image flex justify-between items-center">
          <h1 className="text-3xl font-semibold leading-none">
            Volunteer Position
          </h1>
          <div className="flex items-center">
            <p className="text-2xl font-semibold px-1">EDHI</p>
            <img className="px-1" src="../components/edhilogo.png" alt="HAHAH"/>
          </div>
        </div>

        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-20 mb-3 pb-3 rounded-xl">
          <div className="title flex flex-col">
            <label className="py-1">Enter the title of your campaign</label>
            <input
              type="text"
              className="form-control rounded-md px-2 py-1"
              id="exampleFormControlInput1"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="description flex flex-col">
            <label className="py-1">Short Description about the campaign</label>
            <textarea
              className=" rounded-md px-2 py-1"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setDesc(event.target.value);
              }}
            ></textarea>
          </div>
          <div class="siappa flex justify-between">
            <div className="working-hours upload-picture flex flex-col justify-between h-20">
              <div className="flex justify-between">
                <label className="pr-2">Working Hours</label>
                <input
                  className="rounded-md px-2 py-1"
                  type="text"
                  onChange={(event) => {
                    setWorkingHours(event.target.value);
                  }}
                />
              </div>
              <div className="flex justify-between">
                <label className="pr-2">Timings</label>
                <input className="rounded-md px-2 py-1" type="text" onChange={(event) => {
                setTimings(event.target.value);
              }} />
              </div>
            </div>

            <div className="duration timings flex flex-col justify-between h-20">
              <div className="">
                <label className="pr-2">Duration</label>
                <input className="rounded-md px-2 py-1" type="text" onChange={(event) => {
                setDuration(event.target.value);
              }}/>
              </div>
              <div className="flex justify-between items-center">
                <label className="">Upload Poster</label>
                <input className="w-2/3" type="file" id="formFile" onChange={(event) => {
                setMyPicture(event.target.files[0]);
              }} />
              </div>
            </div>
          </div>
          <div className="buttons flex self-center">
            <button className="bg-[#CCCCCC] hover:bg-[#B6B0B0] text-black font-bold rounded-lg w-24 mx-8 py-1.5" onClick={()=>{
              navigate("/vol0");
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

export default VolunteerPosition1;
