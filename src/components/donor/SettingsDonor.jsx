import DonorSideBar from '../../views/DonorSideBar';

function SettingsDonor() {
    return (

        <div className='flex bg-purple-300 w-screen h-screen'>
            <DonorSideBar/>
            {/* {starts from here} */}

            <div className="flex flex-col justify-between w-full mt-4">
                <div className='flex flex-row w-full justify-between h-20'>
                    <div className='flex flex-col mt-6 mx-14'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Settings</p>
                        </div>

                    </div>


                    <div className='p-5 mr-20 flex items-start'>
                        <p className='text-black font-semibold text-lg mt-4 underline '>Profile</p>
                        <img src="../components/mohtashim.png" alt='LOL' className='rounded-1/2 w-10 h-10 flex-shrink-0 ml-4 mt-2'></img>
                    </div>

                </div>

                



                <div className="flex flex-col mx-14 w-4/5 h-full rounded mt-4 justify-center items-center">
                    <div className='flex flex-col w-1/2 h-full items-center'>
                        <p className='mt-12 mr-52 font-semibold text-lg mb-2'>Edit Name</p>
                        <input type='text' placeholder='Enter Name' className='p-2 w-2/3 h-10 rounded-md border-black border'>
                        </input>

                        <p className='mt-8 mr-44 font-semibold text-lg mb-2'>Edit Password</p>
                        <input type='password' placeholder='Enter Password' className='p-2 w-2/3 h-10 rounded-md border-black border'>
                        </input>

                        <p className='mt-8 mr-24 font-semibold text-lg mb-2'>Change a profile picture</p>
                        <input type='file' placeholder='E' className='p-1 w-2/3 h-10 rounded-md border-black border bg-white'>
                        </input>

                        <button className='w-36 h-10 mt-10 bg-green-500 text-lg rounded-lg'>Save</button>
                    </div>
                </div>
                
            </div>


        </div>


    );
}

export default SettingsDonor;