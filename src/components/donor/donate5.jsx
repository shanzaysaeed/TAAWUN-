import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import DonorSideBar from '../../views/DonorSideBar';
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import CampaignDescription2 from './CampaignDescription2';

const Donate5 = () => {
    const navigate = useNavigate();
    const loggedIn = JSON.parse(localStorage.getItem('user'))
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [createdBy, setCreatedBy] = useState(null);
    const [campaigns, setCampaigns] = useState([]);
    const [logoURL, setLogoURL] = useState({});
    const [loading, setLoading] = useState(true);

    const getCampaigns = useCallback(async () => {
        const campaignCollection = collection(db, 'campaigns');
        const q = query(campaignCollection, where('status', '==', 'Incomplete'), orderBy('createdBy', 'desc'));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot || querySnapshot.empty) {
          setCampaigns([]);
          setLoading(false);
          return;
        }
        const campaignList = querySnapshot.docs.map((doc) => doc.data());
        setCampaigns(campaignList);
      }, []);
    
      useEffect(() => {
        getCampaigns();
      }, [getCampaigns]);
    
      const getCampaignLogo = useCallback(async (ngoName) => {
        if (!ngoName) {
          return null;
        }
        const usersCollection = collection(db, 'users');
        const q = query(usersCollection, where('name', '==', ngoName));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          return null;
        }
        const userData = querySnapshot.docs[0].data();
        return userData.logoURL;
      }, []);
    
      useEffect(() => {
        const loadLogoUrls = async () => {
          const urls = {};
          for (const campaign of campaigns) {
            urls[campaign.createdBy] = await getCampaignLogo(campaign.createdBy);
          }
          setLogoURL(urls);
          setLoading(false);
        };
        if (campaigns.length > 0) {
          loadLogoUrls();
        }
      }, [campaigns, getCampaignLogo]);
    
      const handleCampaignClick = (campaign) => {
        setSelectedCampaign(campaign);
      };

    return (
        <>
        {selectedCampaign ? (
            <CampaignDescription2 campaign={selectedCampaign} createdBy={createdBy}/>
        ) : (  
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
                        <div className='flex flex-row w-full h-10 mt-2 mr-2 justify-center'>
                            <input className='p-3 rounded-2xl bg-white border border-black w-5/6 h-8 mt-4' type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                            <button className='absolute mt-5 ml-28'><img src="../components/search.jpeg" alt= "search" className='w-6 h-6 rounded'></img></button>
                        </div>
                        
                        <p className='text-black font-semibold underline text-lg mt-6 '>{loggedIn.firstName}</p>
                        <img src={loggedIn.profilePictureURL} alt="profile" className='rounded-full flex-shrink-0 ml-4 mt-4 w-12 h-12' />
                    </div>

                </div>

                <div className="bg-[#F2F2F2] my-6 mx-10 w-11/12 h-2/3 rounded">

                    <div className='flex flex-row justify-center'>
                        <button className='w-6 h-6 bg-purple-400 rounded-full mt-2 border border-black '></button>
                        <a href='/' className='mt-2'>------------</a>
                        <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black '></button>
                        <a href='/' className='mt-2'>------------</a>
                        <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black'></button>
                        <a href='/' className='mt-2'>------------</a>
                        <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black'></button>
                    </div>

                    {loading ? (
                        <h1 className="text-2xl ml-8 font-semibold">Loading ...</h1>
                    ) : (
                    <div>
                        <div className='upper-row flex flex-row w-full h-40 mt-2 justify-center'>
                        {campaigns.filter((campaign) => campaign.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 3).map((campaign) => (
                            <div onClick={() => {handleCampaignClick(campaign); setCreatedBy(campaign.createdBy)}} className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <button className='flex flex-col mx-4 mb-4 justify-center items-center'>
                                <img src={logoURL[campaign.createdBy]} alt="logo" className='w-12 h-12'></img>
                                <p className='font-bold text-lg'>{campaign.createdBy}</p>
                                <p className='font-semibold text-sm truncate'>{campaign.title}</p>
                                <button onClick={() => {navigate("/donate5_1", { state: { campaign, createdBy: campaign.createdBy } })}} className='bg-[#26235C] text-white rounded-md w-32 mt-2 w-full h-8 hover:bg-purple-500'>Donate Now!</button>
                            </button>
                            </div>
                        ))}
                        </div>

                        <div className='page-navigate flex flex-row justify-between'>
                        <div className=' w-10 h-10 ml-6'>
                            <button><img src="../components/prev.png" alt="navigate"></img></button>
                        </div>
                        <div className=' w-10 h-10 mr-6'>
                            <button><img src="../components/next.png" alt="navigate"></img></button>
                        </div>
                        </div>

                        <div className='lower-row flex flex-row  w-full h-40 justify-center mt-2'>
                        {campaigns.filter((campaign) => campaign.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(3, 6).map((campaign) => (
                            <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <button className='flex flex-col mx-4 mb-4 justify-center items-center'>
                                <img src={logoURL[campaign.createdBy]} alt="logo" className='w-12 h-12'></img>
                                <p className='font-bold text-lg'>{campaign.createdBy}</p>
                                <p className='font-semibold text-sm truncate'>{campaign.title}</p>
                                <button onClick={() => {navigate("/donate5_1", { state: { campaign, createdBy: campaign.createdBy } })}} className='bg-[#26235C] text-white rounded-md w-32 mt-2 w-full h-8 hover:bg-purple-500'>Donate Now!</button>
                            </button>
                            </div>
                        ))}
                        </div>
                    </div>
                    )}

                </div>

            </div>
        </div> )}
    </>
    );
}

export default Donate5;
