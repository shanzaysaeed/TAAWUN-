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
import search from './search.jpeg';
import jazz from './jazz.jpeg';
import bank from './bank.jpeg';
import easypaisa from './easypaisa.jpeg';
import back from './back.png';

function App() {
  return (
    <div className='flex bg-purple-300 w-screen h-screen'>
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
            <div className='mt-4'>
              <button className='w-40 bg-purple-400 rounded-lg text-white border border-black '>
                Cash
              </button>
              <button className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 '>
                Non-Cash
              </button>
            </div>
          </div>

          <div className='p-5 mr-20 flex items-start  '>
            <div className='flex flex-row w-full h-10 justify-center'>
              <input className='p-3 rounded-2xl bg-white border border-black w-3/4 h-8 mt-5' type='text' placeholder='Search'></input>
              <button className='absolute mt-5 ml-28 '><img src={search} className='w-6 h-6 rounded mt-1'></img></button>
            </div>
            <p className='text-black font-semibold underline text-lg mt-6 '>Profile</p>
            <img src={dp} className='rounded-1/2 w-10 flex-shrink-0 ml-4 mt-4'></img>
          </div>

        </div>

        <div className="bg-[#F2F2F2] my-6 mx-10 w-11/12 h-3/4 rounded justify-center">
          <div className='flex flex-row justify-center'>
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-purple-400 rounded-full mt-2 border border-black'></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black'></button>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <p className='text-black text-xl font-semibold ml-6 mt-4'>Enter your phone number:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='number' placeholder='Contact number'></input>
            <p className='text-black text-xl font-semibold ml-6 mt-4'>Enter your account number:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='number' placeholder='Account number'></input>
            <p className='text-black text-xl font-semibold ml-6 mt-2'>Enter the amount:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='number' placeholder='Amount'></input>
            <p className='text-black text-xl font-semibold ml-6 mt-2'>Enter your pin:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='number' placeholder='PIN'></input>

          </div>

          <div className='flex justify-center'>
            <div className="flex flex-row w-1/8 mt-6 py-2 bg-[#CCCCCC] hover:bg-gray-500 rounded-3xl justify-center items-center mr-4">
              <img className="h-5" src={back} />
              <button className="btn px-2">Go back</button>
            </div>
            <div className="flex flex-row w-1/8 mt-6 py-2 bg-green-500 hover:bg-green-600 rounded-3xl justify-center items-center">
              <button className='px-6'>Donate</button>
            </div>
          </div>


        </div>

      </div>
    </div>

  );
}

export default App;