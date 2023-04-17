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
import dp from './dp.png';
import next from './next.png';
import drop from './drop.jpeg';

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
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={donapp} />
                        <a href="/" className="px-4 whitespace-nowrap ">Donation Applications</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 bg-[#CBC7C7] rounded-e-3xl">
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

            <div className="flex flex-col justify-between w-full mt-4">
                <div className='flex flex-row w-full justify-between h-20'>
                    <div className='flex flex-col mt-6 mx-14'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Donation History</p>
                        </div>

                    </div>


                    <div className='p-5 mr-20 flex items-start'>
                        <p className='text-black font-bold text-2xl mt-4 '>Edhi</p>
                        <img src={edhi} className='rounded-1/2 w-12 h-12 flex-shrink-0 ml-4 mt-2'></img>
                    </div>

                </div>

                <div className='flex flex-row w-full h-10 mt-2 justify-between'>
                    <div className='flex flex-col'>
                        <div className='w-full'>
                            <p className='mx-14 font-bold text-xl'>Flood Relief in Sindh:</p>
                        </div>
                    </div>

                    <div className='mr-24 items-start bg-white rounded-lg border border-black'>
                        <div className='flex flex-row'>
                        <button className='w-36 text-nowrap font-semibold'>Sort by Campaign:</button>
                        <button ><img src={drop} className='w-3 h-2 mt-1 mr-3'></img></button>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col mx-14 w-4/5 h-full rounded mt-4 ">
                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>
                    

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md mt-2'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md mt-2'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md mt-2'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>

                    <div className='w-full mt-2'>
                        <p className='font-bold text-xl'>Educate Pakistan:</p>
                    </div>

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md mt-2'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md mt-2'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md mt-2'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row bg-[#F2F2F2] w-full h-10 rounded-md mt-2'>
                        <div className=' w-20 justify-center items-center mb-2'>
                            <img src={dp} className='rounded-full w-8 h-8 mt-1 ml-6'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3 mr-6'>
                            <p className='font-sans text-lg font-semibold mt-1'>Mohtashim Butt donated Rs.10000/-</p>
                        </div>
                        <div className='flex flex-row items-start justify-center items-center'>
                            <button className='w-6 ml-36 h-6 flex justify-center items-center '>
                                <img src={next} alt='wrong' className=''></img>
                            </button>
                        </div>
                    </div>



                </div>
            </div>


        </div>


    );
}

export default App;
