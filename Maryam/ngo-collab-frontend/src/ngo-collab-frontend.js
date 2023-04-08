import logo from './Logo_Final.png';
import home from './home.png';
import donate from './donate.png';
import donhist from './donation_hist.jpeg';
import volunteer from './volunteer.jpeg';
import collab from './collab.png';
import donapp from './donapp.jpeg';
import settings from './settings.jpeg';
import logout from './logout.png';
import akh from './Akhuwat-program.png';
import khid from './alkhidmat.jpeg';
import chiipa from './chiipa.jpeg';
import edhi from './edhi.jpeg';
import jdc from './Jdc-Logo.png';
import map_view from './map_view.jpeg';
import prev from './prev.png';
import next from './next.png';

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
                    <div className='flex flex-col mt-6 mx-14'>
                        <div className='tracking-tight text-black font-sans text-2xl font-semibold'>
                            <p>Looking to collaborate with an NGO?</p>
                        </div>
                    </div>

                    <div className='p-3 mr-20 flex items-start justify-center items-center '>
                        <button className='bg-[#26235C] w-40 h-10 text-white text-lg font-semibold rounded-lg border border-black flex justify-center items-center hover:bg-gray-500 '>
                            Collaborate
                            <span className='text-4xl mb-2 ml-3'>+</span>

                        </button>
                    </div>

                </div>

                <div className=" my-6 mx-10 w-11/12 h-2/3 rounded">

                    <div className='flex flex-row w-3/4 h-40 mt-3 ml-32 justify-center'>
                        <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-28'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src={akh} className=' w-12 h-12 mt-8'></img>
                                <p className='font-bold text-lg '>Akhuwat</p>
                                <p className='text-sm text-black whitespace-nowrap mb-2'>Flood Relief in Sindh </p>
                                <button className='bg-[#26235C] text-white rounded-md  w-full h-8 '>Collaborate!</button>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-28'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src={jdc} className=' w-12 h-12 mt-8'></img>
                                <p className='font-bold text-lg '>JDC Pakistan</p>
                                <p className='text-sm text-black whitespace-nowrap mb-2'>Fire Relief </p>
                                <button className='bg-[#26235C] text-white rounded-md  w-full h-8 '>Collaborate!</button>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src={edhi} className=' w-14 h-14 mt-6'></img>
                                <p className='font-bold text-lg '>Edhi</p>
                                <p className='text-sm text-black whitespace-nowrap mb-2'>Education in Sindh </p>
                                <button className='bg-[#26235C] text-white rounded-md  w-full h-8 '>Collaborate!</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-row justify-between'>
                    <div className=' w-10 h-10 ml-6'>
                        <button><img src={prev}></img></button>
                    </div>
                    <div className=' w-10 h-10 mr-6'>
                        <button><img src={next}></img></button>
                    </div>
                    </div>


                    <div className='flex flex-row ml-32 w-3/4 h-40 justify-center mb-6'>
                        <div className='flex flex-col border border-black shadow-md w-40 bg-white rounded-2xl h-40 justify-center mr-28'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src={chiipa} className=' w-12 h-12 mt-8'></img>
                                <p className='font-bold text-lg'>Chiipa</p>
                                <p className='text-sm text-black whitespace-nowrap mb-2'>Food Drive </p>
                                <button className='bg-[#26235C] text-white rounded-md  w-full h-8'>Collaborate!</button>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center mr-28'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src={jdc} className=' w-12 h-12 mt-8'></img>
                                <p className='font-bold text-lg'>JDC Pakistan</p>
                                <p className='text-sm text-black whitespace-nowrap mb-2'>Flood Relief </p>
                                <button className='bg-[#26235C] text-white rounded-md  w-full h-8'>Collaborate!</button>
                            </div>
                        </div>
                        <div className='flex flex-col border border-black w-40 bg-white rounded-2xl h-40 justify-center'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src={khid} className=' w-12 h-12 mt-8'></img>
                                <p className='font-bold text-lg '>Al-khidmat</p>
                                <p className='text-sm text-black whitespace-nowrap mb-2'>Old-age homes</p>
                                <button className='bg-[#26235C] text-white rounded-md  w-full h-8'>Collaborate!</button>
                            </div>

                        </div>


                    </div>

                </div>


            </div>
        </div>






    );
}

export default App;