import './App.css';
import logo from './Logo_Final.png';
import home from './home.png';
import donate from './donate.jpeg';
import volunteer from './volunteer.jpeg';
import donation_hist from './donation_hist.jpeg';
import dp from './dp.jpeg';
import settings from './settings.jpeg';
import logout from './logout.png';
import akh from './Akhuwat-program.png';
import khid from './alkhidmat.jpeg';
import chiipa from './chiipa.jpeg';
import edhi from './edhi.jpeg';
import jdc from './Jdc-Logo.png';
import saylani from './saylani.jpeg';
import map_view from './map_view.jpeg';

function App() {
  return (
    <div className='flex bg-purple-300 w-screen h-screen'>
        <div className="bg-slate-100 h-screen w-60 flex flex-col justify-between items-center">
                <div className="image bg-opacity-100 h-1/6 flex justify-center">
                    <img src={logo}/>
                </div>

                <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8  bg-[#CBC7C7] rounded-e-3xl">
                        <img className="h-4" src={home} />
                        <a href='/' className="px-4">Home</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={donate} />
                        <a href="/" className="px-4">Donate</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={volunteer} />
                        <a href="/" className="px-4">Volunteer</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src={donation_hist}/>
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

    </div>
  );
}

export default App;