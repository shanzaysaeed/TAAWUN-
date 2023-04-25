import React from 'react'
import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function DonorSideBar() {
    const { logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await logout();
          navigate('/donor');
          console.log('You are logged out')
        } catch (e) {
          console.log(e.message);
        }
    };


  return (
        <div className="bg-slate-100 h-screen w-64 flex flex-col justify-between items-center">

            <div className="image bg-opacity-100 h-1/6 flex justify-center">
                <img className="" src="../components/Logo_Final.png" alt="Logo" />
            </div>

            <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
            <button onClick={() => {navigate("/donor_home")}} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
                <img className="h-5" src="../components/home.png" alt="Home" />
                <p className="px-4"> Home </p>
            </button>

            <button onClick={() => {navigate("/donate1")}} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
                <img className="h-5" src="../components/donation.png" alt="Donate" />
                <p className="px-4"> Donate </p>
            </button>

            <button onClick={() => {navigate("/vfg1")}} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
                <img className="h-5" src="../components/volunteer2.png" alt="Volunteer" />
                <p className="px-4"> Volunteer </p>
            </button>

            <button onClick={() => {navigate("/dvh")}} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
                <img className="h-5" src="../components/history.png" alt="History" />
                <p className="px-4"> Donation History </p>
            </button>

            <button onClick={() => {navigate("/donor_map")}} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
                <img className="h-5" src="../components/map.png" alt="Map view" />
                <p className="px-4"> Map View </p>
            </button>

            <button onClick={() => {navigate("/settingsDonor")}} className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
                <img className="h-5" src="../components/settings.png" alt="Setting" />
                <p className="px-4"> Setting </p>
            </button>

            </div>
                <div className="log-out-btn flex w-1/2 py-2 my-8 bg-red-400 hover:bg-red-500 rounded-md justify-center items-center">
                    <img className="h-5" src="../components/logout.png" alt="Logout" />
                <button onClick={handleLogout} className="btn px-2"> Log out </button>
            </div>
    </div>
  )
}

export default DonorSideBar