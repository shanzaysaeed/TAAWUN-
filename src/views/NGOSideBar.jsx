import React from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../contexts/AuthContext';

function NGOSideBar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/ngo');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };


    return (
    <div className="bg-[#F2F2F2] h-screen w-64 flex flex-col justify-between items-center">
    {/* Logo's div */}
    <div className="image bg-opacity-100 h-1/6 flex justify-center">
      <img className="" src="../components/Logo_Final.png" alt="haha" />
    </div>

    {/* Menu options' div */}
    <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
      <button onClick={() => navigate("/ngo_home")} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
        <img className="h-5" src="../components/home.png" alt="LMAO" />
        <p className="px-4">
          Home
        </p>
      </button>
      <button onClick={() => navigate("/campaigns")} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
        <img className="h-5" src="../components/donation.png" alt="LMAO" />
        <p  className="px-4">
          Campaigns
        </p>
      </button>
      <button onClick={() => navigate("/collab")} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
        <img className="h-5" src="../components/deal.png" alt="LMAO" />
        <p className="px-4">
          Collaboration
        </p>
      </button>
      <button onClick={() => navigate("/apps")} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
        <img
          className="h-5"
          src="../components/google-docs.png"
          alt="LMAO"
        />
        <p className="">
          Donation Applications
        </p>
      </button>
      <button onClick={() => navigate("/ngo_home")} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
        <img className="h-5" src="../components/history.png" alt="LMAO" />
        <a href="/donHistory" className="px-4">
          Donation History
        </a>
      </button>
      <button onClick={() => navigate("/ngo_map")} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
        <img className="h-5" src="../components/map.png" alt="LMAO" />
        <p  className="px-4">
          Map View
        </p>
      </button>
      <button
        className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl" onClick={() => navigate("/vol1")}>
        <img className="h-5" src="../components/volunteer.png" alt="LMAO" />
        <p href="/vol0" className="px-4">
          Volunteer Position
        </p>
      </button>
      <button onClick={() => navigate("/settingsNGO")} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
        <img className="h-5" src="../components/settings.png" alt="LMAO" />
        <p href="/settingsNGO" className="px-4">
          Setting
        </p>
      </button>
    </div>
    {/* Log-out div */}
    <div className="log-out-btn flex w-2/5 py-2 my-8 bg-red-400 hover:bg-red-500 rounded-md justify-center items-center">
      <img className="h-5" src="../components/logout.png" alt="LMAO" />
      <button onClick={handleLogout} className="btn px-2">Log out</button>
    </div>
  </div>
  )
}

export default NGOSideBar
