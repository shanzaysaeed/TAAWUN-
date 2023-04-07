import './App.css';
import { Link } from 'react-router-dom';
import akh from './Akhuwat-program.png';
import edhi from './edhi.jpeg';
import chiipa from './chiipa.jpeg';
import jdc from './Jdc-Logo.png';
import logo from './Logo_Final.png';


const PartenerSideBar = () => {
  return (
    <div className="fixed h-full w-60 p-4 top-8 left-0">
      <h2 className="text-center text-2xl font-bold my-4 font-medium">Our Partners</h2>
      <div className="flex flex-col items-center">
        <img src={akh} alt="Partner 1" className="w-24 h-24 mb-8" />
        <img src={jdc} alt="Partner 2" className="w-24 h-24 mb-8" />
        <img src={edhi} alt="Partner 3" className="w-24 h-24 mb-8" />
        <img src={chiipa} alt="Partner 4" className="w-24 h-24 mb-8" />
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="flex">
            <PartenerSideBar/>
            <div className="flex items-center justify-center w-screen h-screen bg-purple-300">
                <div className="flex flex-col max-h-96 max-w-none items-center justify-center w-3/6 h-96 bg-slate-200 rounded-2xl shadow-xl">
                    <div className="mb-8">
                        <img src={logo} alt="Logo" className="w-48 h-44" />
                    </div>
                    {/* <div className="flex flex-col items-center justify-center">
                        <Link to="/ngo_signin" className="bg-green-500 text-white w-64 h-10 rounded-xl mb-1 flex items-center justify-center">
                            Log In
                        </Link>
                        <p className='text-gray-500  font-light align-middle text-xs mb-3 mt-2'>-------------Do not have an account?-------------</p>
                        <Link to="/ngo_signup" className="bg-gray-500 text-white w-64 h-10 rounded-xl flex items-center justify-center mb-10">
                            Sign Up
                        </Link>
                    </div> */}
                    <div className='flex flex-col items-center justify-center'> 
                      <button className='bg-green-500 text-white w-64 h-10 rounded-xl mb-1 flex items-center justify-center'>Log In</button>
                      <p className='text-gray-500  font-light align-middle text-xs mb-3 mt-2'>-------------Do not have an account?-------------</p>
                      <button className='bg-gray-500 text-white w-64 h-10 rounded-xl flex items-center justify-center mb-10'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    
  );
}

export default App;
