import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NGOSideBar from "../../views/NGOSideBar";
import { collection, query, where, getDocs, doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const NonCash= () => {
    const loggedIn = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [donations, setDonation] = useState([]);
    const [logoURL, setLogoURL] = useState({});
    const [names, setNames] = useState({});
    const [selectedDonation, setSelectedDonation] = useState(null);
    const [riders, setRiders] = useState([]);
    const [selectedRider, setSelectedRider] = useState(null);

    const getRiders = async () => {
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("role", "==", "Rider"));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setRiders([]);
          return;
        }
        const riderList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRiders(riderList);
      };

          
    const closePopup = () => {
        setSelectedDonation(null);
      };

   
      const handleRightClick = async (donation) => {
        setSelectedDonation(donation);
        await getRiders(); // Fetch riders when a donation is clicked
      };

      const assignRider = async () => {
        if (!selectedRider) return;
    
        const donationRef = doc(db, "Donation", selectedDonation.id);
        await updateDoc(donationRef, { riderEmail: selectedRider.email, status: "assigned" });
    
        const riderDocRef = doc(db, "users", selectedRider.email);
        await setDoc(riderDocRef, { assignedDonation: selectedDonation.id }, { merge: true });
    
        closePopup();
      };
      

      // Modify the useEffect that fetches donations
    useEffect(() => {
        const getDonation = async () => {
        const campaignCollection = collection(db, "Donation");
        const q = query(
            campaignCollection,
            where("status", "==", "new"),
            where("type", "==", "Non-Cash")
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot || querySnapshot.empty) {
            setDonation([]);
            setLoading(false);
            return;
        }
        const campaignList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setDonation(campaignList);
        };
        getDonation();
    }, [selectedDonation, donations]);
    

      const getDonorPic = async (donor) => {
        if (!donor) {
          return null;
        }
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("email", "==", donor));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return null;
        }
        const userData = querySnapshot.docs[0].data();
        return userData.profilePictureURL;
      }

      const getDonorName = async (donor) => {
        if (!donor) {
          return null;
        }
        const usersCollection = collection(db, "users");
        const q = query(usersCollection, where("email", "==", donor));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return null;
        }
        const userData = querySnapshot.docs[0].data();
        return userData.firstName;
      }

      useEffect(() => {
        const loadLogoUrls = async () => {
          const urls = {};
          const ns = {}
          for (const donation of donations) {
            urls[donation.donatedBy] = await getDonorPic(donation.donatedBy);
            ns[donation.donatedBy]  = await getDonorName(donation.donatedBy);
          }
          setLogoURL(urls);
          setNames(ns);
          setLoading(false);
        };
        if (donations.length > 0) {
          loadLogoUrls();
        }
      }, [donations]);


    return (
        <div className="flex bg-purple-300 justify-between">
            
            <NGOSideBar/>

            <div className="right-box bg-purple-300 w-3/4 mt-4 flex flex-col">
                <div className='flex flex-row w-full justify-between'>

                    <div className='flex flex-col mt-6'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-bold'>
                            <p>Donation Applications</p>
                        </div>
                        <div className='my-14'>
                            <button onClick={()=>{navigate("/apps")}} className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black hover:bg-gray-500'> Cash </button>
                            <button onClick={()=>{navigate("/noncash_apps")}} className='w-40 bg-purple-400 rounded-lg text-white border border-black ml-4 hover:bg-purple-500'> Non Cash </button>
                        </div>
                    </div>

                    <div className="p-5 mr-20 flex flex items-start">
                        <p className="px-1 text-black font-semibold underline text-lg mt-4 mr-1">{loggedIn.name}</p>
                        <img src={loggedIn.logoURL} alt="profile" className='rounded-full flex-shrink-0 px-1 h-10 w-12 mt-2' />
                    </div>

                </div>

                {loading ? (
                <div className="flex flex-col w-11/12 h-full rounded ">
                    <h1 className="text-2xl font-semibold">Loading ...</h1>
                </div>
                ) : (
                <div className="flex flex-col w-4/5 h-full rounded ">
                {donations.slice(0, 3).map((donation) => (

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-1/4 rounded-md mb-4'>
                        <div className=' w-40 h-full justify-center items-center'>
                            <img src={logoURL[donation.donatedBy]} alt="Donorpicture" className='rounded-full w-20 h-20 mt-3 ml-8'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3'>
                            <p className='font-sans text-2xl font-bold mt-1 ml-2'>{names[donation.donatedBy]}</p>
                            <div className='flex flex-row'>
                                <img src="../components/Amount.png" alt='Amount' className='w-6 h-4 mt-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>{`Address: ${donation.location}`}</p>
                            </div>
                            <div className='flex flex-row'>
                                <img src="../components/time.jpeg" alt='time' className='w-4 h-4 mt-2 ml-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>{new Date(donation.donatedAt.seconds * 1000).toLocaleString()}</p>
                            </div>
                            
                        </div>
                        <div className='p-2 flex flex-row items-start justify-center items-center'>
                            <button onClick={() => handleRightClick(donation)} className='w-10 ml-6 h-10 flex justify-center items-center '>
                                <img src="../components/view.png" alt='view'></img>
                            </button>
                        </div>
                    </div>
                ))}

                {selectedDonation && (
                    <div className="fixed inset-0 z-10 flex items-center justify-center">
                        {/* ... previous JSX code ... */}

                        <div className="bg-white rounded-lg w-4/6 h-4/6 p-8 flex flex-col justify-center items-center">
                        {/* ... previous JSX code ... */}

                        <div className="mt-4 flex justify-center">
                            <select
                            value={selectedRider?.email}
                            onChange={(e) => {
                                const rider = riders.find((r) => r.email === e.target.value);
                                setSelectedRider(rider);
                            }}
                            >
                            <option value="">Select Rider</option>
                            {riders.map((rider) => (
                                <option key={rider.email} value={rider.email}>
                                {rider.firstName} {rider.lastName}
                                </option>
                            ))}
                            </select>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4" onClick={assignRider}>
                            Assign Rider
                            </button>
                        </div>
                        </div>
                    </div>
                    )}

            </div>
            )}
        </div>
    </div>
    );
}

export default NonCash;