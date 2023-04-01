import React from "react";
// import { useHistory } from "react-router-dom";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import ContactNext from "./ContactNext";
import "./my.css";

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
    <div className="outer-container bg-signature flex-column">
      <div>
        <h1>Volunteer Position</h1>
      </div>
      <div className="flex-column bg-signature-gray d-inline-flex justify-content-center">
        <form action="contact-form">
          <div className="mb-3">
            <label>Enter the title of your campaign</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label>Short Description about the campaign</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setDesc(event.target.value);
              }}
            ></textarea>
          </div>

          <div className="mb-3">
            <label>Working Hours</label>
            <input
              type="text"
              onChange={(event) => {
                setWorkingHours(event.target.value);
              }}
            />

            <label>Upload Poster</label>
            <input className="form" type="file" id="formFile" />
          </div>

          <div className="mb-3">
            <label>Duration</label>
            <input type="text" />

            <label>Timings</label>
            <input type="text" />
          </div>
        </form>
        <div className="justify-content-center">
          <button>Go Back</button>
          <button onClick={handleSubmit}> <Link Link to = "/contactNext">Next</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
