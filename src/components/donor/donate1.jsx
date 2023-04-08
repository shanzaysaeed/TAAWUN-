import React from 'react'
import { useNavigate } from 'react-router-dom';
import DonorSideBar from '../../views/DonorSideBar';

const Donate1 = () => {
    const navigate = useNavigate();
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
                            <button className='w-40 bg-purple-400 rounded-lg text-white border border-black '>
                                Cash
                            </button>
                            <button className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 '>
                                Non-Cash
                            </button>
                        </div>
                    </div>


                    <div className='p-5 mr-20 flex items-start  '>
                        <div className='flex flex-row w-full h-10 mt-2 mr-2 justify-center'>
                            <input className='p-3 rounded-2xl bg-white border border-black w-5/6 h-8 mt-4' type='text' placeholder='Search'></input>
                            <button className='absolute mt-5 ml-28'><img src="../components/search.jpeg" alt= "search" className='w-6 h-6 rounded'></img></button>
                        </div>
                        
                        <p className='text-black font-semibold underline text-lg mt-6 '>Mohtashim</p>
                        <img src="../components/dp.png" alt= "profile" className='rounded-1/2 w-10 flex-shrink-0 ml-4 mt-4'></img>
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

                    <div className='flex flex-row  w-full h-40 mt-3 justify-center'>
                        <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src="../components/akhuwat.png" alt="logo" className=' w-12 h-12 '></img>
                                <p className='font-bold text-lg mb-2'>Akhuwat</p>
                                <button onClick={() => {navigate("/donate2")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Donate Now!</button>
                            </div>
                        </div>

                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src="../components/jdc.png" alt="logo" className=' w-12 h-12 '></img>
                                <p className='font-bold text-lg mb-2'>JDC</p>
                                <button onClick={() => {navigate("/donate2")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Donate Now!</button>
                            </div>
                        </div>
                        
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src="../components/edhhi.png" alt="logo" className=' w-14 h-14 '></img>
                                <p className='font-bold text-lg mb-2'>Edhi</p>
                                <button onClick={() => {navigate("/donate2")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Donate Now!</button>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-row justify-between'>
                        <div className=' w-10 h-10 ml-6'>
                            <button><img src="../components/prev.png" alt="navigate"></img></button>
                        </div>
                        <div className=' w-10 h-10 mr-6'>
                            <button><img src="../components/next.png" alt="navigate"></img></button>
                        </div>
                    </div>

                    <div className='flex flex-row  w-full h-40 justify-center mt-2'>
                        
                        <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src="../components/Chhipa.png" alt="logo" className=' w-12 h-12 '></img>
                                <p className='font-bold text-lg mb-2'>Chiipa</p>
                                <button onClick={() => {navigate("/donate2")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Donate Now!</button>
                            </div>
                        </div>

                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src="../components/jdc.png" alt="logo" className=' w-12 h-12 '></img>
                                <p className='font-bold text-lg mb-2'>JDC</p>
                                <button onClick={() => {navigate("/donate2")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Donate Now!</button>
                            </div>
                        </div>
                        
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src="../components/alkhidmat.jpeg" alt="logo" className=' w-14 h-14 '></img>
                                <p className='font-bold text-lg mb-2'>Al-khidmat</p>
                                <button onClick={() => {navigate("/donate2")}} className='bg-[#26235C] text-white rounded-md  w-full h-8'>Donate Now!</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Donate1;
