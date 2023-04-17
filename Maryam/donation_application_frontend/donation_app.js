import logo from './Logo_Final.png';
import home from './home.png';
import donate from './donate.png';
import donhist from './donation_hist.jpeg';
import volunteer from './volunteer.jpeg';
import collab from './collab.png';
import donapp from './donapp.jpeg';
import settings from './settings.jpeg';
import logout from './logout.png';
import edhi from './edhi.jpeg';
import map_view from './map_view.jpeg';
import location from './location.jpeg';
import time from './time.jpeg';
import wrong from './wrong.jpeg';
import right from './right.jpeg';
import dp from './dp.png';
import dp1 from './dp1.jpeg';
import dp2 from './dp2.jpeg';


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
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={donate} />
                        <a href="/" className="px-4">Campaigns</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={collab} />
                        <a href="/" className="px-4">Collaborate</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 bg-[#CBC7C7] rounded-e-3xl">
                        <img className="h-5" src={donapp} />
                        <a href="/" className="px-4 whitespace-nowrap ">Donation Applications</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={donhist} />
                        <a href="/" className="px-4 whitespace-nowrap ">Donation History</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={volunteer} />
                        <a href="/" className="px-4 whitespace-nowrap ">Volunteer Position</a>
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
                <div className="log-out-btn flex w-3/5 py-2 my-6 bg-red-400 hover:bg-red-500 rounded-3xl justify-center items-center">
                    <img className="h-5" src={logout} />
                    <button className="btn px-2">Log out</button>
                </div>
            </div>

            {/* {starts from here} */}

            <div className="flex flex-col justify-between w-full">
                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col mt-6 mx-14'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Donation Applications</p>
                        </div>

                        <div className='my-14'>
                            <button className='w-40 bg-purple-400 rounded-lg text-white border border-black '>
                                Pending
                            </button>
                            <button className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 '>
                                Completed
                            </button>
                        </div>
                    </div>

                    <div className='p-5 mr-20 flex items-start  '>
                        <p className='text-black font-bold text-2xl mt-4 '>Edhi</p>
                        <img src={edhi} className='rounded-1/2 w-12 h-12 flex-shrink-0 ml-4 mt-2'></img>
                    </div>

                </div>


                <div className="flex flex-col mx-14 w-4/5 h-full rounded ">
                    <div className='flex flex-row bg-[#F2F2F2] w-full h-1/4 rounded-md'>
                        <div className=' w-40 h-full justify-center items-center'>
                            <img src={dp} className='rounded-full w-20 h-20 mt-3 ml-8'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3'>
                            <p className='font-sans text-3xl font-bold mt-1 ml-2'>Mohtashim Butt</p>
                            <div className='flex flex-row'>
                                <img src={location} alt='location' className='w-4 h-4 mt-2 ml-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>Address:</p>
                            </div>
                            <div className='flex flex-row'>
                                <img src={time} alt='time' className='w-4 h-4 mt-2 ml-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>4/10/2022 5:50 PM</p>
                            </div>
                            
                        </div>
                        <div className='p-2 flex flex-row items-start justify-center items-center'>
                            <button className='w-10 ml-2 h-10 flex justify-center items-center '>
                                <img src={wrong} alt='wrong' className=''></img>
                            </button>
                            <button className='w-10 ml-6 h-10 flex justify-center items-center '>
                                <img src={right} alt='wrong'></img>
                            </button>
                        </div>
                    </div>


                    <div className='flex flex-row bg-[#F2F2F2] w-full h-1/4 rounded-md mt-8'>
                        <div className=' w-40 h-full justify-center items-center'>
                            <img src={dp1} className='rounded-full w-20 h-20 mt-3 ml-8'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3'>
                            <p className='font-sans text-3xl font-bold mt-1 ml-2'>Maryam Shakeel</p>
                            <div className='flex flex-row'>
                                <img src={location} alt='location' className='w-4 h-4 mt-2 ml-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>Address:</p>
                            </div>
                            <div className='flex flex-row'>
                                <img src={time} alt='time' className='w-4 h-4 mt-2 ml-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>4/10/2022 5:50 PM</p>
                            </div>
                            
                        </div>
                        <div className='p-2 flex flex-row items-start justify-center items-center'>
                            <button className='w-10 ml-2 h-10 flex justify-center items-center '>
                                <img src={wrong} alt='wrong' className=''></img>
                            </button>
                            <button className='w-10 ml-6 h-10 flex justify-center items-center '>
                                <img src={right} alt='wrong'></img>
                            </button>
                        </div>
                    </div>


                    <div className='flex flex-row bg-[#F2F2F2] w-full h-1/4 rounded-md mt-8'>
                        <div className=' w-40 h-full justify-center items-center'>
                            <img src={dp2} className='rounded-full w-20 h-20 mt-3 ml-8'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3'>
                            <p className='font-sans text-3xl font-bold mt-1 ml-2'>Shanzay Saeed</p>
                            <div className='flex flex-row'>
                                <img src={location} alt='location' className='w-4 h-4 mt-2 ml-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>Address:</p>
                            </div>
                            <div className='flex flex-row'>
                                <img src={time} alt='time' className='w-4 h-4 mt-2 ml-2'></img>
                                <p className='font-sans font-semibold text-lg ml-3'>4/10/2022 5:50 PM</p>
                            </div>
                            
                        </div>
                        <div className='p-2 flex flex-row items-start justify-center items-center'>
                            <button className='w-10 ml-2 h-10 flex justify-center items-center '>
                                <img src={wrong} alt='wrong' className=''></img>
                            </button>
                            <button className='w-10 ml-6 h-10 flex justify-center items-center '>
                                <img src={right} alt='wrong'></img>
                            </button>
                        </div>
                    </div>

                    </div>
                </div>


            </div>


    );
}

export default App;