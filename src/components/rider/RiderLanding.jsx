import React from 'react';
import { Link } from 'react-router-dom';
import PartenerSideBar from '../../views/PartenerSideBar';

function RiderLanding() {
    return (
        <div className="flex">
            <PartenerSideBar/>
            <div className="flex items-center justify-center w-screen h-screen bg-purple-300">
                <div className="flex flex-col max-h-96 max-w-none items-center justify-center w-3/6 h-96 bg-slate-200 rounded-2xl shadow-xl">
                    <div className="mb-8">
                        <img src="../components/Logo_Final.png" alt="Logo" className="w-48 h-44" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Link to="/rider_signin" className="bg-green-500 text-white w-64 h-10 rounded-xl mb-1 flex items-center justify-center">
                            Log In
                        </Link>
                        <p className='text-gray-500  font-light align-middle text-xs mb-3 mt-2'>-------------Do not have an account?-------------</p>
                        <Link to="/rider_signup" className="bg-gray-500 text-white w-64 h-10 rounded-xl flex items-center justify-center mb-10">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RiderLanding;
