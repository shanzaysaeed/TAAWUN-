import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
import { setDoc, collection, doc, getDocs, query, where } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import NGOSideBar from "../../views/NGOSideBar";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem('user'))
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState("");
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [amountError, setAmountError] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const locationInputRef = useRef(null);

  const localUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (window.google) {
      const autocompleteInstance = new window.google.maps.places.Autocomplete(locationInputRef.current);
      setAutocomplete(autocompleteInstance);
    }
  }, []);
  
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!title || !description || !amount || !location) {
      setError("* Required");
    }
    
    if (!title) {
      setTitleError("*");
    }
    const titleWords = title.split(" ");
    if (titleWords.length > 8) {
      setTitleError("The Title field must be 8 words or less.");
    }
    
    if (!description) {
      setDescriptionError("*");
    }
    const descriptionWords = description.split(" ");
    if (descriptionWords.length > 50) {
      setDescriptionError("The Description field must be 50 words or less.");
      
    }
    
    if (!amount) {
      setAmountError("*");
    }
    if (!amount.match(/^\d+$/)) {
      setAmountError("Please enter a valid numeric value for the Amount field."); 
    }    
    
    if (!location) {
      setLocationError("*");
    }


    const geocodingAPIEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBmFFRPLokgcO-WnxqEAifTc2Q5MyGfflc`;
    const response = await fetch(geocodingAPIEndpoint);
    const data = await response.json();
    
    if (data.status === "OK") {
      const { lat, lng } = data.results[0].geometry.location;
      try{
        const campaignsRef = collection(db, "campaigns");

        const querySnapshot = await getDocs(
          query(campaignsRef, where("title", "==", title))
        );
    
        if (!querySnapshot.empty) {
          setLoading(false);
          setError("A similar campaign already exist. You can collaborate on that");
          return;
        }
    
        const campDocRef = doc(campaignsRef, title);
        let pictureURL = ""
        
        if (!media) {
          pictureURL = "https://firebasestorage.googleapis.com/v0/b/taawun-cs360.appspot.com/o/Campaigns%2Fbc.jpg?alt=media&token=2876a65f-5949-4c8e-8cba-1861d3221848"
        
        } else {
          const storageRef = ref(storage, `ngo_logos/${title}_${media.name}`);
          await uploadBytes(storageRef, media); // upload profile picture file to Firebase Storage
          pictureURL = await getDownloadURL(storageRef); // get the URL of the uploaded profile picture
        }

        await setDoc(campDocRef, {
          title,
          description,
          amount,
          amountCollected:0,
          details,
          location,
          pictureURL,
          lat,
          lng,
          dateCreated: new Date(),
          createdBy: localUser.name,
          status: "Incomplete",
        });
        setLoading(false);
        navigate("/campaigns")
      } catch (err) {
        console.error(err);
        setLoading(false);
        setError("Error creating campaign. Please try again later.");
      }
    }
    else{

      setLocationError("Please enter a valid location")
    }
  };

  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setLocation(place.formatted_address);
      });
    }
  }, [autocomplete]);
  

  return (
    <div className="flex bg-purple-300 justify-between">
      
      <NGOSideBar/>

      <div className="right-box bg-purple-300 w-3/4 pt-10 flex flex-col">
        
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-4xl font-bold font-mono tracking-tighter">Campaigns</h1>
          </div>
          <div className="flex items-center mr-10">
            <p className="px-2 text-black font-semibold underline text-lg mt-4">{loggedIn.name}</p>
            <img src={loggedIn.logoURL} alt="profile" className='rounded-full flex-shrink-0 px-1 h-10 w-12 mt-2' />
          </div>
        </div>

        <div className="middle pt-5">
          <p className="font-bold text-lg">Create a Campaign</p>
        </div>


        <div className="bottom pt-3 px-16 w-5/6 mt-4">
          {error && <p className="text-red-500 ">{error}</p>}

          <div className="title pb-2">
            <p className="text-sm font-bold">Title</p>
            {titleError && <p className="text-red-500 ">{titleError}</p>}
            <input className={`w-full p-1 border-2 border-gray-300 rounded-md ${titleError && 'border-red-500'}`} type="text" onChange={(e) => {setTitle(e.target.value); }}/>
          </div>
          
          <div className="description pb-2">
            <p className=" text-sm font-bold">Description</p>
            {descriptionError && <p className="text-red-500 ">{descriptionError}</p>}
            <textarea className={`w-full p-1 border-2 border-gray-300 rounded-md ${descriptionError && 'border-red-500'}`} type="text" onChange={(e) => {setDescription(e.target.value);}}/>
          </div>
          
          <div className="location pb-2">
            <p className="text-sm font-bold">Amount Needed</p>
            {amountError && <p className="text-red-500 ">{amountError}</p>}
            <input className={`w-full p-1 border-2 border-gray-300 rounded-md ${amountError && 'border-red-500'}`} type="num" onChange={(e) => {setAmount(e.target.value);}}/>
          </div>
          
          <div className="description pb-2">
            <p className="text-sm font-bold">Details about others things needed</p>
            <textarea className="w-full p-1 border-2 border-gray-300 rounded-md" type="text" onChange={(e) => {setDetails(e.target.value);}}/>
          </div>
          
          <div className="amount-needed pb-2 flex justify-between">
            <div className="location">
              <p className="text-sm font-bold pb-2">Location</p>
              {locationError && <p className="text-red-500 ">{locationError}</p>}
              <input className={`w-full p-1 border-2 border-gray-300 rounded-md ${amountError && 'border-red-500'}`} type="text" ref={locationInputRef} onChange={(e) => {setLocation(e.target.value);}}/>
            </div>
            
            <div className="media">
              <label className="text-sm font-bold" for="multiple_files">Upload Media</label>
              <div className="border-2 border-black-300 rounded-md w-80 p-2">
                <input className="" type="file" onChange={(e) => {setMedia(e.target.files[0]);}}></input>
              </div>
            </div>

          </div>
          
          <div className="buttons flex justify-center pt-2">
            <button onClick={() => {navigate("/campaigns")}} className="bg-white  hover:bg-gray-500 text-black font-bold rounded-lg w-24 mx-8 py-1.5">
              Back
            </button>
            <button className="bg-green-500 hover:bg-[#1EB40F] font-bold rounded-lg w-24 mx-8 py-1.5" onClick={handleSubmit} disabled={loading}>
              {loading ? '.....' : 'Post'}
            </button>
          </div>

        </div>
      
      </div>
    
    </div>
  );
};

export default CreateCampaign;
