// import edhi from "../components/edhilogo.png";
import NGOSideBar from '../../views/NGOSideBar';

function SettingsNGO() {
    return (

        <div className='flex bg-purple-300 w-screen h-screen'>
            <NGOSideBar/>

            {/* {starts from here} */}

            <div className="flex flex-col justify-between w-3/4 h-screen">
                <div className='flex flex-row w-full justify-between h-20'>
                    <div className='flex flex-col mt-6 mx-14'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-bold'>
                            <p>Settings</p>
                        </div>

                    </div>


                    <div className='p-5 flex items-start'>
                        <p className='text-black font-bold text-lg mt-4 underline '>Edhi</p>
                        <img className='w-12 h-14' src="../components/edhilogo.png" alt='HAHAHAA'/>
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

                        <p className='mt-8 mr-24 font-semibold text-lg mb-2'>Upload a profile picture</p>
                        <input type='file' placeholder='E' className='p-1 w-2/3 h-10 rounded-md border-black border bg-white'>
                        </input>

                        <button className='w-36 h-10 mt-10 bg-green-500 text-lg rounded-lg border border-black'>Save</button>
                    </div>
                </div>
                
            </div>


        </div>


    );
}

export default SettingsNGO;