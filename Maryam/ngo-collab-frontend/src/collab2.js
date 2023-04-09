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
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 bg-[#CBC7C7] rounded-e-3xl">
                        <img className="h-5" src={collab} />
                        <a href="/" className="px-4">Collaborate</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
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
                    <div className='flex flex-col mt-6 mx-10'>
                        <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                            <p>Collaborations</p>
                        </div>
                    </div>

                    <div className='p-5 mr-20 flex items-start  '>
                        <p className='text-black font-bold text-2xl mt-4 '>Edhi</p>
                        <img src={edhi} className='rounded-1/2 w-12 h-12 flex-shrink-0 ml-4 mt-2'></img>
                    </div>

                </div>

                <div className='flex flex-row w-full justify-between'>
                    <div className='flex flex-col mx-14'>
                        <div className='tracking-tight text-black font-sans text-2xl font-semibold'>
                            <p>Please select the campaign you want to collaborate in:</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col mx-12 w-11/12 h-full rounded mt-4 ">
                    <div className='flex flex-row bg-[#F2F2F2] w-full h-34 rounded-md'>
                        <div className=' w-40 h-full justify-center items-center'>
                            <img src={edhi} className='rounded-full w-28 h-28 mt-3 ml-4'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3'>
                            <p className='font-sans text-2xl font-bold  ml-2'>Children Hospital Funds</p>
                            <p className='font-sans text-md font-semibold  ml-2'>Donations and blood required for 1000 patients.
                                Around 35 kids are looking for your kind donations. </p>
                            <p className='font-sans text-md font-bold ml-2'>Amount Needed: Pkr 100,000/-</p>
                            <p className='font-sans text-md font-bold ml-2'>Blood required: 5 bottles</p>
                        </div>
                        <div className='p-2 flex flex-col items-start justify-center items-center'>
                            <button className='bg-[#26235C] w-32 ml-4 mb-6 h-10 text-white text-lg font-semibold rounded-lg border border-black flex justify-center items-center hover:bg-gray-500 '>
                                Collaborate
                            </button>
                            <div className='flex flex-row'>
                                <img src={location} alt='location' className='w-10 h-10 mr-4'></img>
                                <p className='font-sans font-semibold text-xl mt-2'>Lahore</p>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-row bg-[#F2F2F2]  w-full h-34 rounded-md mt-4'>
                        <div className=' w-40 h-full justify-center items-center'>
                            <img src={edhi} className='rounded-full w-28 h-28 mt-3 ml-4'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3'>
                            <p className='font-sans text-2xl font-bold ml-2'>Children Hospital Funds</p>
                            <p className='font-sans text-md font-semibold ml-2'>Donations and blood required for 1000 patients.
                                Around 35 kids are looking for your kind donations. </p>
                            <p className='font-sans text-md font-bold ml-2'>Amount Needed: Pkr 100,000/-</p>
                            <p className='font-sans text-md font-bold ml-2'>Blood required: 5 bottles</p>
                        </div>
                        <div className='p-2 flex flex-col items-start justify-center items-center'>
                            <button className='bg-[#26235C] w-32 ml-4 mb-6 h-10 text-white text-lg font-semibold rounded-lg border border-black flex justify-center items-center hover:bg-gray-500 '>
                                Collaborate
                            </button>
                            <div className='flex flex-row'>
                                <img src={location} alt='location' className='w-10 h-10 mr-4'></img>
                                <p className='font-sans font-semibold text-xl mt-2'>Lahore</p>
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-row bg-[#F2F2F2] w-full h-34 rounded-md mt-4'>
                        <div className=' w-40 h-full justify-center items-center'>
                            <img src={edhi} className='rounded-full w-28 h-28 mt-3 ml-4'></img>
                        </div>
                        <div className='flex flex-col h-full w-2/3'>
                            <p className='font-sans text-2xl font-bold ml-2'>Children Hospital Funds</p>
                            <p className='font-sans text-md font-semibold ml-2'>Donations and blood required for 1000 patients.
                                Around 35 kids are looking for your kind donations. </p>
                            <p className='font-sans text-md font-bold ml-2'>Amount Needed: Pkr 100,000/-</p>
                            <p className='font-sans text-md font-bold ml-2'>Blood required: 5 bottles</p>

                        </div>
                        <div className='p-2 flex flex-col items-start justify-center items-center'>
                            <button className='bg-[#26235C] w-32 ml-4 mb-6 h-10 text-white text-lg font-semibold rounded-lg border border-black flex justify-center items-center hover:bg-gray-500 '>
                                Collaborate
                            </button>
                            <div className='flex flex-row'>
                                <img src={location} alt='location' className='w-10 h-10 mr-4'></img>
                                <p className='font-sans font-semibold text-xl mt-2'>Lahore</p>
                            </div>
                        </div>








                    </div>
                </div>


            </div>

        </div>


    );
}

export default App;