import logo from './Logo_Final.png';
import home from './home.png';
import donate from './donate.png';
import donhist from './donation_hist.jpeg';
import volunteer from './volunteer.jpeg';
import settings from './settings.jpeg';
import logout from './logout.png';
import edhi from './edhi.jpeg';
import map_view from './map_view.jpeg';
import dp from './dp.png';

function App() {
    return (

        <div className='flex bg-purple-300 w-screen h-screen'>
            <div className="bg-slate-100 h-screen w-80 flex flex-col justify-between items-center">
                <div className="image bg-opacity-100 h-1/6 flex justify-center">
                    <img src={logo} />
                </div>

                <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8  hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-4" src={home} />
                        <a href='/' className="px-4">Home</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1]  rounded-e-3xl">
                        <img className="h-5" src={donate} />
                        <a href="/" className="px-4">Donate</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={volunteer} />
                        <a href="/" className="px-4">Volunteer</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={donhist} />
                        <a href="/" className="px-4 mr-12">Donation History</a>

                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={map_view} />
                        <a href="/" className="px-4 ">Map View</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 bg-[#CBC7C7] rounded-e-3xl">
                        <img className="h-5" src={settings} />
                        <a href="/" className="px-4">Settings</a>
                    </button>
                </div>
                <div className="log-out-btn flex w-3/5 py-2 my-8 bg-red-400  hover:bg-red-500 rounded-3xl justify-center items-center">
                    <img className="h-5" src={logout} />
                    <button className="btn px-2">Log out</button>
                </div>
            </div>

            {/* {starts from here} */}

            <div className="flex flex-col justify-between w-full mt-4">
                <div className='flex flex-row w-full justify-between h-20'>
                    <div className='flex flex-col mt-6 mx-14'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Settings</p>
                        </div>

                    </div>


                    <div className='p-5 mr-20 flex items-start'>
                        <p className='text-black font-semibold text-2xl mt-4 underline '>Profile</p>
                        <img src={dp} className='rounded-1/2 w-12 h-12 flex-shrink-0 ml-4 mt-2'></img>
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

                        <button className='w-36 h-10 mt-10 bg-green-500 text-lg rounded-lg'>Save</button>
                    </div>
                </div>
                
            </div>


        </div>


    );
}

export default App;