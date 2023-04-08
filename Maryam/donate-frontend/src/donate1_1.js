import './App.css';
import logo from './Logo_Final.png';
import home from './home.png';
import donate from './donate.jpeg';
import volunteer from './volunteer.jpeg';
import donation_hist from './donation_hist.jpeg';
import dp from './dp.png';
import settings from './settings.jpeg';
import logout from './logout.png';
import map_view from './map_view.jpeg';
import kid from './kid.jpeg';
import back from './back.png';


function App() {
    return (
        <div className='flex bg-purple-300 w-screen h-screen'>
            <div className="bg-slate-100 h-screen w-60 flex flex-col justify-between items-center">
                <div className="image bg-opacity-100 h-1/6 flex justify-center">
                    <img src={logo} />
                </div>

                <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8  hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-4" src={home} />
                        <a href='/' className="px-4">Home</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8  bg-[#CBC7C7] rounded-e-3xl">
                        <img className="h-5" src={donate} />
                        <a href="/" className="px-4">Donate</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={volunteer} />
                        <a href="/" className="px-4">Volunteer</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={donation_hist} />
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
                <div className="log-out-btn flex w-3/5 py-2 my-8 bg-red-400 hover:bg-red-500 rounded-3xl justify-center items-center">
                    <img className="h-5" src={logout} />
                    <button className="btn px-2">Log out</button>
                </div>
            </div>

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
                        <p className='text-black font-semibold underline text-lg mt-6 '>Profile</p>
                        <img src={dp} className='rounded-1/2 w-10 flex-shrink-0 ml-4 mt-4'></img>
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
                            <img src={kid} alt='kid' className='w-96 h-64 ml-8 mt-4 rounded-md'></img>
                        </div>
                        <div className='flex flex-col w-1/2 h-72 ml-8 mt-2'>
                            <p className='font-bold text-4xl font-sans tracking-tight m-0'>Al Khidmat</p>
                            <p className='font-semibold text-2xl font-sans tracking-tight mt-1'>Campaign: Food drive for Flood victims</p>
                            <p className='font-medium text-md font-sans text-lg mt-1'><p className='font-semibold text-xl underline mt-2'>Description:</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>

                    </div>

                    <div className='flex flex-row   w-1/2 '>
                        <p className='ml-8 font-bold font-sans mr-4 text-lg'>Items required:</p>
                        <div className='flex flex-col'>
                            <p className='font-semibold font-sans text-md'>1. Cash: 100/3000</p>
                            <p className='font-semibold font-sans text-md'>2. Ration bags: 10/300 collected</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className="flex flex-row w-36 mt-4 py-2 bg-[#CCCCCC] hover:bg-gray-500 rounded-3xl justify-center items-center mr-4">
                            <img className="h-5" src={back} />
                            <button className="btn px-2">Go back</button>
                        </div>
                        <div className="flex flex-row w-1/8 mt-4 py-2 bg-green-500 hover:bg-green-600 rounded-3xl justify-center items-center">
                            <button className='px-6'>Donate Now</button>
                        </div>
                    </div>

                </div>


            </div>

        </div>

    );
}


export default App;