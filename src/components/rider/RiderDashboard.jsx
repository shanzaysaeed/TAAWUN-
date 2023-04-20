import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import logo from './Logo_Final.png';
import edhi from './edhi.jpeg';
import correct from './correct.jpeg';
import d from './d.jpeg';
import jdc from './Jdc-Logo.png';
import guy from './guy.jpeg';
import logout from './logout.png';
import search from './search.jpeg';
import dp from './dp.png';


const RiderDashboard = () => {
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
    <div className='flex bg-purple-300 w-screen h-screen'>


    {/* {starts from here} */}

    <div className="flex flex-col justify-between w-full">
        <div className='flex flex-row w-full justify-between'>
            <div className='flex flex-col mt-8 mx-10'>
                <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                    <p className='ml-20'>Hi, Waleed</p>
                </div>
            </div>

            <div className='flex flex-col w-40 ml-24'>
                <img src={logo} alt='Taawun' className='w-24'></img>
            </div>

            <div className='p-5 mr-20 flex items-start '>
                <div className='flex flex-row w-full h-10 justify-center'>
                    <input className='p-3 rounded-2xl bg-white border border-black w-3/4 h-8 mt-5' type='text' placeholder='Search'></input>
                    <button className='absolute mt-5 ml-28 '><img src={search} className='w-6 h-6 rounded mt-1'></img></button>
                </div>
                <button className='text-black font-bold text-xl mt-6 underline'>Profile</button>
                <img src={dp} className='rounded w-12 h-12 flex-shrink-0 ml-4 mt-2'></img>
            </div>


        </div>

        {/* 
        <div className='flex flex-row w-full justify-between'>
            <div className='flex flex-col mx-14'>
                <div className='tracking-tight text-black font-sans text-2xl font-semibold'>
                    <p>Please select the campaign you want to collaborate in:</p>
                </div>
            </div>

        </div> */}
        <div className='flex flex-col mb-4 ml-28 '>
            <div className='flex flex-row mb-2'>
                <p className='p-2 font-sans text-blaxk font-bold text-xl'>Pick Up Requests</p>
            </div>
            <div className='flex flex-row '>
                <button className='w-36 bg-purple-400 rounded-lg text-white border border-black '>
                    Pending
                </button>
                <button className='w-36 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 '>
                    Registered
                </button>
                <button className='w-36 bg-green-400 text-white rounded-lg border border-black ml-4 '>
                    Completed
                </button>
            </div>
        </div>

        <div className="flex flex-col w-2/3 h-fit rounded mb-8 ml-28">
            <div className='flex flex-row bg-[#F2F2F2] w-full h-28 rounded-md'>
                <div className=' w-40 h-full justify-center items-center'>
                    <img src={edhi} className='rounded-full w-20 h-20 mt-3 ml-8'></img>
                </div>
                <div className='flex flex-col h-full w-1/2 ml-6'>
                    <p className='font-sans text-4xl font-bold'>Edhi Foundation</p>
                    <p className='font-sans text-md font-bold'>Address: </p>
                    <p className='font-sans text-md font-bold'>Items: </p>
                    <p className='font-sans text-md font-bold'>Contact: </p>
                </div>
                <div className='p-2 flex flex-row ml-16'>
                    <button className=''><img src={correct} alt='accept' className='w-7 h-7 ml-10 mb-2'></img></button>
                    <button className=''><img src={d} alt='accept' className='w-7 h-7 ml-10 mb-2'></img></button>
                </div>
            </div>


            <div className='flex flex-row bg-[#F2F2F2] w-full h-28 rounded-md mt-4'>
                <div className=' w-40 h-full justify-center items-center'>
                    <img src={jdc} className='rounded-full w-20 h-20 mt-3 ml-8'></img>
                </div>
                <div className='flex flex-col h-full w-1/2 ml-6'>
                    <p className='font-sans text-4xl font-bold '>JDC Pakistan</p>
                    <p className='font-sans text-md font-bold'>Address: </p>
                    <p className='font-sans text-md font-bold'>Items: </p>
                    <p className='font-sans text-md font-bold'>Contact: </p>
                    
                </div>
                <div className='p-2 flex flex-row ml-16'>
                    <button className=''><img src={correct} alt='accept' className='w-7 h-7 ml-10 mb-2'></img></button>
                    <button className=''><img src={d} alt='accept' className='w-7 h-7 ml-10 mb-2'></img></button>
                </div>
            </div>

            <div className='flex flex-row bg-[#F2F2F2] w-full h-28 rounded-md mt-4'>
                <div className=' w-40 h-full justify-center items-center'>
                    <img src={guy} className='rounded-full w-20 h-20 mt-3 ml-8'></img>
                </div>
                <div className='flex flex-col h-full w-1/2 ml-6 '>
                    <p className='font-sans text-3xl font-bold '>Kashf Foundation</p>
                    <p className='font-sans text-md font-bold'>Address: </p>
                    <p className='font-sans text-md font-bold'>Items: </p>
                    <p className='font-sans text-md font-bold'>Contact: </p>
                </div>
                <div className='p-2 flex flex-row ml-16'>
                    <button className=''><img src={correct} alt='accept' className='w-7 h-7 ml-10 mb-2'></img></button>
                    <button className=''><img src={d} alt='accept' className='w-7 h-7 ml-10 mb-2'></img></button>
                </div>
            </div>

        </div>

        <button className='fixed bottom-0 right-0 flex flex-col w-1/4 h-20 ml-40 items-center'>
            <button className="log-out-btn flex w-40 py-2 my-6 bg-red-400 hover:bg-red-500 rounded-3xl justify-center items-end left-0">
                <img className="h-5" src={logout} />
                <button className="btn px-2">Log out</button>
            </button>
        </button>

    </div>


</div>
  );
};

export default RiderDashboard;








