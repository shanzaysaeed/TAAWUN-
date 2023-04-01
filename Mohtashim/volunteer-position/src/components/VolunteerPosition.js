// import React from "react";
// import Contact from "./Contact";
// import ContactNext from "./ContactNext";
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { db } from "../firebaseConfig";
// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";

// const VolunteerPosition = () => {

//     const [nextClicked, setNextClicked] = useState(false);
//     const [title, setTitle] = useState();
//     const [desc, setDesc] = useState();
//     const [workingHours, setWorkingHours] = useState();
  
//     const userCollectionRef = collection(db, "contactData");
//     function handleNextClick() {
//         if(nextClicked===false){
//             addDoc(userCollectionRef, {
//                 title: title,
//                 desc: desc,
//                 workingHours: workingHours,
//               })
//         }
//       setNextClicked(true);
//     }
  
//     return (
//       <div className="App">
//         <Router>
//           <Switch>
//             <Route exact path="/">
//               {nextClicked ? <Redirect to="/contactnext" /> : <Contact/>}
//             </Route>
//             <Route exact path="/contactnext">
//               <ContactNext />
//             </Route>
//             <Redirect to="/" />
//           </Switch>
//         </Router>
//       <div className="d-flex justify-content-center">
//         <button>Go Back</button>
//         <button onClick={handleNextClick}>Next</button>
//       </div>
//       </div>
//     ); 
// };

// export default VolunteerPosition;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../firebaseConfig";
// import { addDoc, collection } from "firebase/firestore";

function VolunteerPosition() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [picture, setPicture] = useState("");
  const [profession, setProfession] = useState("");
  const [about, setAbout] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection("users").add({
        name,
        age,
        picture,
        profession,
        about,
      });
      history.push("/success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Step 1</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Picture:
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
      </label>
      <button type="submit">Next</button>

      <h1>Step 2</h1>
      <label>
        Profession:
        <input
          type="text"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </label>
      <label>
        About:
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default VolunteerPosition;
