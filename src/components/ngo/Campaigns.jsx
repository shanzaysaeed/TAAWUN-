import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NGOSideBar from "../../views/NGOSideBar";
import { collection, query, where, getDocs, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Campaigns = () => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [logoURL, setLogoURL] = useState({});
  const [loading, setLoading] = useState(true);
  const loggedIn = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    const getCampaigns = async () => {
      const campaignCollection = collection(db, "campaigns");
      const q = query(campaignCollection, where("status", "==", "Incomplete"), orderBy("createdBy", "desc"));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot || querySnapshot.empty) {
        setCampaigns([]);
        setLoading(false);
        return;
      }
      const campaignList = querySnapshot.docs.map((doc) => doc.data());
      setCampaigns(campaignList);
    };
    getCampaigns();
  }, []);

  const getCampaignLogo = async (ngoName) => {
    if (!ngoName) {
      return null;
    }
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("name", "==", ngoName));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const userData = querySnapshot.docs[0].data();
    return userData.logoURL;
  }

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
  }, [campaigns]);

  const handleDelete = async (title) => {
    try {
      await deleteDoc(doc(db, "campaigns", title));
      const newCampaigns = campaigns.filter(campaign => campaign.title !== title);
      setCampaigns(newCampaigns);
    } catch (error) {
      console.log("Error deleting campaign: ", error);
    }
  };
  

  return (
    <div className="flex bg-purple-300 justify-between">
      <NGOSideBar/>
      

      <div className="right-box bg-purple-300 w-3/4 pt-10 flex flex-col mr-10">  

        {/* Top Bar */}
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-4xl font-bold font-mono tracking-tighter">Campaigns</h1>
          </div>
          <div className="flex items-center">
            <p className="px-1 text-black font-semibold underline text-lg mt-4 mr-1">{loggedIn.name}</p>
            <img src={loggedIn.logoURL} alt="profile" className='rounded-full flex-shrink-0 px-1 h-10 w-12' />
          </div>
        </div>
        
        {/*Page Toggle Buttons*/}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button onClick={() => navigate("/campaigns")} className="rounded-md bg-purple-400 mr-4 px-4 text-white border border-black hover:bg-purple-500">
              On Going
            </button>
            <button onClick={() => navigate("/comp_camp")} className="rounded-md bg-white text-purple-400 ml-4 px-4 border border-black hover:bg-gray-500">
              Successful
            </button>
          </div>
          <div className="rightButton font-semibold rounded-md text-gray-50 bg-[#26235C] px-4 py-1 mr-4 hover:bg-purple-500 border border-black">
            <a href="/create_camp">Create +</a>
          </div>
        </div>

        {/* div for gray area */}

        {loading ? (
          <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl">
            <h1 className="text-2xl font-semibold">Loading ...</h1>
          </div>
        ) : (
          <div className="form bg-[#F2F2F2] h-96 flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl overflow-y-auto">
            {campaigns.slice(0, 3).map((campaign) => (
              <div key={campaign.id}
                className="campaign grid grid-cols-6 items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4 my-3">
                  
                <div className="logo col-span-1 flex justify-center items-center">
                  <img src={logoURL[campaign.createdBy]} alt="Logo" className="w-1/2 h-1/2"/> 
                </div>

                <div className="text col-span-4 px-8">
                  <h1 className="text-xl font-bold">{campaign.title}</h1>
                  <p className="text-xs font-semibold">{`${campaign.description.split(' ').slice(0, 20).join(' ')} ...`}</p>
                  <p className="text-xs font-semibold"> <b>Amount Needed: </b> Rs. {campaign.amount}/- </p>
                  <p className="text-xs font-semibold"> <b>Other Items Required:</b> {`${campaign.details.split(' ').slice(0, 8).join(' ')} ...`} </p>
                </div>

                <div className="icons col-span-1 flex flex-col justify-between items-center">
                  <div className="buttons flex">
                    <button className="w-fit mx-1">
                      <img src="../components/editing.png" alt="Edit Icon" className="w-6 h-6"/>
                    </button>
                    <button className="w-fit mx-1" onClick={() => {handleDelete(campaign.title)}}>
                      <img src="../components/delete.png" alt="Delete Icon" className="w-6 h-6"/>
                    </button>

                  </div>

                  <div className="location pt-2 flex items-center justify-center">
                    <img className="w-4" src="../components/placeholder.png" alt="Location Icon" />
                    <p className="font-bold">{campaign.location.split(",")[0]}</p>
                  </div>
                </div>
                
              </div>
            ))}
          {/* grey box div       */}
          </div>
        )}
      {/* right box div       */}
      </div>

    </div> // main div
  );
};

export default Campaigns;
