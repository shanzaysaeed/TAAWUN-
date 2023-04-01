import React from "react";
import { db } from "../firebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const ContactNext = () => {
  const [detailedOverview, setDetailedOverview] = useState();
  const [associatedCauses, setAssociatedCauses] = useState();
  const [location, setLocation] = useState();

  const userCollectionRef = collection(db, "contactData");

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
        detailedOverview: detailedOverview,
        associatedCauses: associatedCauses,
        location: location,
    });
  };
  // const [title,setTitle] = useState();

  return (
    <div className="outer-container">
      <div className="d-flex justify-content-center">
        <form action="contact-form">
          <div>
            <h1>Volunteer Position</h1>
          </div>

          <div className="mb-3">
            <label>Detailed overview about the Position</label>
            <textarea
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(event) => {
                setDetailedOverview(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label>Associated Causes</label>
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setAssociatedCauses(event.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <button>Go Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ContactNext;
