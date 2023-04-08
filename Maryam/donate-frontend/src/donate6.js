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
import tick from './tick.jpeg';
import search from './search.jpeg';


function App() {
  return (
    <div className='flex bg-purple-300'>
      <div className="bg-slate-100 h-screen w-60 flex flex-col justify-between items-center">
        <div className="image bg-opacity-100 h-1/6 flex justify-center">
          <img src={logo} />
        </div>

        <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
            <img className="h-4" src={home} />
            <a href='/' className="px-4">Home</a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 bg-[#CBC7C7] rounded-e-3xl">
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
            <div className='my-8'>
              <button className='w-40 bg-white rounded-lg text-purple-400 border border-black '>
                Cash
              </button>
              <button className='w-40 bg-purple-400 rounded-lg text-white border border-black ml-4 '>
                Non-Cash
              </button>
            </div>
          </div>

          <div className='p-5 mr-20 flex items-start  '>
            <p className='text-black font-semibold underline text-lg mt-6 '>Profile</p>
            <img src={dp} className='rounded-1/2 w-10 flex-shrink-0 ml-4 mt-4'></img>
          </div>

        </div>

        <div className="bg-[#F2F2F2] my-6 mx-10 w-11/12 h-3/4 rounded justify-center">
          <div className='flex flex-row justify-center'>
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-purple-400  rounded-full mt-2 border border-black '></button>
          </div>

          <div className='flex flex-row  w-full h-full justify-center items-center text-center'>
                        <div className='flex flex-col border border-black shadow-md w-1/4 bg-white rounded-2xl h-60 justify-center items-center'>
                            <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                                <img src={tick} className=' w-10 h-10 mt-4 '></img>
                                <p className='font-bold text-2xl '>THANK YOU</p>
                                <p className='font-bold text-lg mt-4 '>The rider will soon be there to collect your donation</p>

                                <button className='bg-[#26235C] text-white rounded-md  w-40 h-8 mt-4'>Done</button>
                            </div>
                        </div>
            </div>  

        


        </div>

      </div>
    </div>

  );
}

export default App;