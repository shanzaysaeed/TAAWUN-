import React from "react";
// import { useHistory } from "react-router-dom";
import { db } from "./firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
// import ContactNext from "./ContactNext";
// import "./my.css";

const Contact = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [workingHours, setWorkingHours] = useState();
  // const history = useHistory();

  const userCollectionRef = collection(db, "contactData");
  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      title: title,
      desc: desc,
      workingHours: workingHours,
    });
    // history.push("/contactnext");
  };

  return (
    <>
      <div className="outer-container flex h-screen w-screen bg-[#D5C6FF] flex-col">
        <div>
          <h1>Volunteer Position</h1>
        </div>
        <div className="gray-content flex-col inline-block bg-signature-gray border-2 border-black rounded-xl px-16 py-8 ml-96 w-auto h-screen my-10 mr-10 space-y-10">
          <div action="contact-form" className="flex flex-col justify-evenly space-y-12">
            <div className="mb-3 flex justify-between">
              <label>Enter the title of your campaign</label>
              <input
                type="text"
                className="form-control w-1/2 p-1"
                id="exampleFormControlInput1"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>

            <div className="mb-3 flex justify-between">
              <label>Short Description about the campaign</label>
              <textarea
                className="form-control w-1/2 p-1"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
              ></textarea>
            </div>

            <div className="mb-3 flex">
              <div className="flex">
                <label>Working Hours</label>
                <input
                  className="mx-4 w-1/2 p-1"
                  type="text"
                  onChange={(event) => {
                    setWorkingHours(event.target.value);
                  }}
                />
              </div>
              <div className="flex">
                <label>Upload Poster</label>
                <input className="form ml-2 p-1 border-2 border-black" type="file" id="formFile" />
              </div>
            </div>

            <div className="mb-3 flex">
              <div className="flex justify-between">
                <label>Duration</label>
                <input className="mx-10 w-1/2 p-1" type="text" />
              </div>
              
              <div className="flex justify-betwen">
                <label>Timings</label>
                <input className="ml-10 p-1" type="text" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#CCCCCC] hover:bg-[#B6B0B0] text-black font-bold py-2 px-3 mx-10 rounded">
              Go Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#12D200] hover:bg-[#1EB40F] py-2 px-4 mx-10 rounded font-bold">
              <Link Link to="/contactNext">
                Next
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
