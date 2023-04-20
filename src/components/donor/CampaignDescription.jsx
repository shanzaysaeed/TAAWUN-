import React from "react";
import { useNavigate } from "react-router-dom";
import DonorSideBar from '../../views/DonorSideBar';


const CampaignDescription = ({campaign, createdBy}) => {
    const loggedIn = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();
    return (
        <div className='flex bg-purple-300 w-screen h-screen'>
            <DonorSideBar/>
            {/* {starts from here} */}
            <div className="flex flex-col justify-between w-full">
                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col mt-6 mx-10'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Donate For</p>
                            <p>Greater Good</p>
                        </div>
                    </div>

                    <div className='p-5 mr-20 flex items-start  '>
                    <p className='text-black font-semibold underline text-lg mt-6 '>{loggedIn.firstName}</p>
                        <img src={loggedIn.profilePictureURL} alt="profile" className='rounded-full flex-shrink-0 ml-4 mt-4 w-12 h-12' />
                    </div>

                </div>


                <div className='flex flex-col mt-6 mx-10'>
                    <div className='text-black font-mono text-3xl font-semibold'>
                        <p>Campaign Details</p>
                    </div>
                </div>

                <div className='flex flex-col w-5/6 h-4/6 ml-10 bg-white rounded-md mb-4'>
                    <div className='flex flex-row'>
                        <div className='flex flex-row h-fit'>
                            <img src={campaign.pictureURL} alt='kid' className='w-96 h-64 ml-8 mt-4 rounded-md'></img>
                        </div>
                        <div className='flex flex-col w-1/2 h-72 ml-8 mt-2'>
                            <p className='font-bold text-4xl font-sans tracking-tight m-0'>{createdBy}</p>
                            <p className='font-semibold text-2xl font-sans tracking-tight mt-1'>{`Campaign: ${campaign.title}`}</p>
                            <p className='font-medium text-md font-sans text-lg mt-1'><p className='font-semibold text-xl underline mt-2'>Description:</p>
                                {campaign.description}</p>
                        </div>

                    </div>

                    <div className='flex flex-row   w-1/2 '>
                        <p className='ml-8 font-bold font-sans mr-4 text-lg'>Location:</p>
                        <div className='flex flex-col'>
                            <p className='font-semibold font-sans text-md'>{campaign.location}</p>
                        </div>
                    </div>
                    <div className='flex flex-row   w-1/2 '>
                        <p className='ml-8 font-bold font-sans mr-4 text-lg'>Items required:</p>
                        <div className='flex flex-col'>
                            <p className='font-semibold font-sans text-md'>{campaign.details}</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className="flex flex-row w-36 mt-4 py-2 bg-[#CCCCCC] hover:bg-gray-500 rounded-3xl justify-center items-center mr-4">
                            <img className="h-5" src="../components/back.png" alt="back"/>
                            <button onClick={() => window.location.reload()} className="btn px-2">Go back</button>
                        </div>
                        <div className="flex flex-row w-1/8 mt-4 py-2 bg-green-500 hover:bg-green-600 rounded-3xl justify-center items-center">
                            <button className='px-6' onClick={() => {navigate("/donate2", { state: { campaign, createdBy: campaign.createdBy } })}}>Donate Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CampaignDescription;