import DonorSideBar from '../../views/DonorSideBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, addDoc, Timestamp  } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState, useRef } from 'react';


const Donate51 = () => {
  const Wlocation = useLocation();
  const loggedIn = JSON.parse(localStorage.getItem('user'))
  const campaign = Wlocation.state.campaign;
  const createdBy = Wlocation.state.createdBy;
  const [phone, setPhone] = useState("")
  const [details, setDetails] = useState("")
  const [location, setLocation] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);
  const locationInputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.google) {
      const autocompleteInstance = new window.google.maps.places.Autocomplete(locationInputRef.current);
      setAutocomplete(autocompleteInstance);
    }
  }, []);

  const uploadDonationDetails = async () => {
    const donateCollection = collection(db, "Donation");

    const donationData = {
      phoneNumber: phone,
      details: details,
      location: location,
      campaign: campaign.title,
      Ngo: createdBy,
      donatedBy: loggedIn.email,
      donatedAt: Timestamp.fromDate(new Date()),
      type: "Non-Cash",
      status: "new",
    };
    
    try {
      await addDoc(donateCollection, donationData);

    } catch (error) {
      console.error("Error uploading donation details: ", error);
      alert("Error uploading donation details. Try again");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!phone || !details || !location) {
      alert("Please fill in all the fields.");
      return;
    }

    if (phone.length !== 11) {
      alert("Phone number must be 11 digits.");
      return;
    }
  
    setIsSubmitting(true);
  
    await uploadDonationDetails();
  
    setIsSubmitting(false);
    navigate("/donate4")
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
    <div className='flex bg-purple-300 w-screen h-screen'>
      <DonorSideBar/>
      <div className="flex flex-col justify-between w-full">
        <div className='flex flex-row w-full justify-between'>
          <div className='flex flex-col mt-6 mx-10'>
            <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
              <p>Donate For</p>
              <p>Greater Good</p>
            </div>
            <div className='my-8'>
              <button onClick={() => {navigate("/donate1")}} className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black hover:bg-gray-500'>
                Cash
              </button>
              <button onClick={() => {navigate("/donate5")}} className='w-40 bg-purple-400 rounded-lg text-white border border-black ml-4 hover:bg-purple-500'>
                Non-Cash
              </button>
            </div>
          </div>

          <div className='p-5 mr-20 flex items-start  '>
            <p className='text-black font-semibold underline text-lg mt-6 '>{loggedIn.firstName}</p>
            <img src={loggedIn.profilePictureURL} alt="profile" className='rounded-full flex-shrink-0 ml-4 mt-4 w-12 h-12' />
          </div>
        </div>

        <div className="bg-[#F2F2F2] my-6 mx-10 w-11/12 h-3/4 rounded justify-center">
          <div className='flex flex-row justify-center'>
            <button className='w-6 h-6 bg-purple-400  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <p className='text-black text-xl font-semibold ml-6 mt-4'>Enter your phone number:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='tel' placeholder='Contact number' value={phone} onChange={(e) => setPhone(e.target.value)} required></input>
            <p className='text-black text-xl font-semibold ml-6 mt-2 '>Details of things you are donating:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='text' placeholder='Description' value={details} onChange={(e) => setDetails(e.target.value)} required></input>
            <p className='text-black text-xl font-semibold ml-6 mt-2'>Pick-up Address:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='text' placeholder='Address' ref={locationInputRef} onChange={(e) => {setLocation(e.target.value);}} required></input>
          </div>

          <div className='flex justify-center'>
            <div className="flex flex-row w-1/5 mt-6 py-2 bg-[#CCCCCC] hover:bg-gray-500 rounded-3xl justify-center items-center mr-4">
              <img className="h-5 mr-2" src="../components/back.png" alt="back" />
              <button onClick={() => {navigate("/donate5")}} className="btn px-4 py-1">Go back</button>
            </div>
            <div className="flex flex-row w-1/5 mt-6 py-2 bg-green-500 hover:bg-green-600 rounded-3xl justify-center items-center">
              <button  onClick={handleSubmit} type='submit' className='px-6 py-1' disabled={isSubmitting} > {isSubmitting ? "Submitting..." : "Donate"} </button>
            </div>
          </div>


        </div>

      </div>
    </div>

  );
}



export default Donate51;