import logo from './Logo_Final.png';
import home from './home.png';
import donate from './donate.png';
import donhist from './donation_hist.jpeg';
import volunteer from './volunteer.jpeg';
import settings from './settings.jpeg';
import logout from './logout.png';
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
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
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

            <div className="flex flex-col justify-between w-full">
                <div className='flex flex-row w-full justify-between h-20'>
                    <div className='flex flex-col mt-6 mx-14'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Welcome,</p>
                        </div>

                    </div>


                    <div className='p-5 mr-20 flex items-start'>
                        <p className='text-black font-semibold text-xl mt-4 underline '>Profile</p>
                        <img src={dp} className='rounded-1/2 w-10 h-10 flex-shrink-0 ml-4 mt-2'></img>
                    </div>

                </div>

                <div className=' ml-14 mr-24 mb-8'>
                    <p className='font-semibold text-lg text-wrap'>Ta'awun is an NGO management system which provides the following features for the ease of Donor's to
                        donate, volunteer for a campaign, view donation history etc.
                    </p>

                </div>

                <div className='border border-black w-4/5 ml-24 mb-4 rounded-md bg-gray-200'>
                    <div className='flex flex-row  w-full h-40 mt-4 mb-10 justify-center ml-10'>
                        <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col mx-4 justify-center items-center'>
                                <img src={donate} className=' w-14 h-14 ml-2'></img>
                                <p className='font-bold text-lg  text-center'>Donate</p>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4  mb-1 justify-center items-center'>
                                <img src={volunteer} className=' w-14 h-14 '></img>
                                <p className='font-bold text-lg '>Volunteer</p>
                            </div>
                        </div>


                    </div>

                    <div className='flex flex-row  w-full h-40 justify-center mb-4'>
                        <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-20'>
                            <div className='flex flex-col  mx-4 justify-center items-center'>
                                <img src={donhist} className=' w-12 h-12 '></img>
                                <p className='font-bold text-lg mb-2 text-center'>View Donation History</p>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center'>
                            <div className='flex flex-col  mx-4 justify-center items-center'>
                                <img src={map_view} className=' w-14 h-14 mb-3 '></img>
                                <p className='font-bold text-lg mb-2 text-center'>Check Map View</p>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>



    );
}

export default App;