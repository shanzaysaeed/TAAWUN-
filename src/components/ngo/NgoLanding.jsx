import React from 'react';
import { Link } from 'react-router-dom';
import PartenerSideBar from '../../views/PartenerSideBar';

function NgoLanding() {
    return (
        <div className="flex">
            <PartenerSideBar/>
            <div className="flex items-center justify-center w-screen h-screen bg-purple-300">
                <div className="flex flex-col items-center justify-center w-96 h-80 bg-white rounded-2xl shadow-xl">
                    <div className="mb-8">
                        <img src="../components/Logo_Final.png" alt="Logo" className="w-48 h-44" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Link to="/ngo_signin" className="bg-green-600 text-white w-64 h-10 rounded-lg mb-4 flex items-center justify-center">
                            Log In
                        </Link>
                        <Link to="/ngo_signup" className="bg-gray-600 text-white w-64 h-10 rounded-lg flex items-center justify-center">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NgoLanding;
