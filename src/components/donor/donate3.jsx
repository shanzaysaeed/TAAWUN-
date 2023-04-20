import DonorSideBar from '../../views/DonorSideBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, query, where, getDocs, addDoc, Timestamp  } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { useCallback, useEffect, useState } from 'react';


const Donate3 = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem('user'))
  const location = useLocation();
  const campaign = location.state.campaign;
  const createdBy = location.state.createdBy;
  const method = location.state.method;
  const [ngo, setNGO] = useState(null)

  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const fetchNGO = useCallback(async () => {
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('name', '==',createdBy));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const ngoData = querySnapshot.docs[0].data();
    setNGO(ngoData)
  }, [createdBy]);

  useEffect(() => {
    fetchNGO();
  }, [fetchNGO]);

  const uploadDonationDetails = async () => {
    const donateCollection = collection(db, "Donation");

    const storageRef = ref(storage, `donation/${campaign.title}_${loggedIn.email}_${amount}`);
    await uploadBytes(storageRef, screenshot);
    const pictureURL = await getDownloadURL(storageRef); 


    const donationData = {
      phoneNumber: phoneNumber,
      amount: parseFloat(amount),
      campaign: campaign.title,
      Ngo: createdBy,
      donatedBy: loggedIn.email,
      proofSS: pictureURL,
      donatedAt: Timestamp.fromDate(new Date()),
      type: "Cash",
      mode: method,
      status: "new"
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
  
    if (!phoneNumber || !amount || !screenshot) {
      alert("Please fill in all the fields.");
      return;
    }

    if (phoneNumber.length !== 11) {
      alert("Phone number must be 11 digits.");
      return;
    }
  
    setIsSubmitting(true);
  
    await uploadDonationDetails();
  
    setIsSubmitting(false);
    navigate("/donate4")
  };

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
                            <button onClick={() => {navigate("/donate2")}} className='w-40 bg-purple-400 rounded-lg text-white border border-black hover:bg-purple-500'>
                                Cash
                            </button>
                            <button onClick={() => {navigate("/donate5")}} className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 hover:bg-gray-500'>
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
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-purple-400 rounded-full mt-2 border border-black'></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black'></button>
          </div>
          
          <div className='flex flex-col justify-center items-center'>
            <p className='text-black text-xl font-semibold ml-6 mt-4'>{ngo && `Account Number: ${ngo.accountNo}`}</p>
            <p className='text-black text-xl font-semibold ml-6 mt-4'>Enter your phone number:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='tel' placeholder='Contact number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required></input>
            <p className='text-black text-xl font-semibold mt-2' style={{marginLeft: '1.5rem'}}>Enter the amount:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='number' placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} required></input>
            <p className='text-black text-xl font-semibold mt-2' style={{marginLeft: '1.5rem'}}>Upload screenshot:</p>
            <div className='border-2 border-gray-300 rounded-md p-2 w-80 mt-2'>
              <input className='mt-2' type='file' accept='image/*' onChange={(e) => setScreenshot(e.target.files[0])} required></input>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className="flex flex-row w-1/5 mt-6 py-2 bg-[#CCCCCC] hover:bg-gray-500 rounded-3xl justify-center items-center mr-4">
              <img className="h-5 mr-2" src="../components/back.png" alt="back" />
              <button onClick={() => {navigate("/donate2", { state: { campaign, createdBy } })}} className="btn px-4 py-1">Go back</button>
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


export default Donate3;
