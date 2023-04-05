import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="flex">
            <div className="fixed h-full w-60 p-4 top-8 left-0">
                    <h2 className="text-center text-lg font-bold my-4">Our Partners</h2>
                    <div className="flex flex-col items-center">
                    <img src="../components/akhuwat.png" alt="Partner 1" className="w-24 h-24 mb-8" />
                    <img src="../components/jdc.png" alt="Partner 2" className="w-24 h-24 mb-8" />
                    <img src="../components/edhhi.png" alt="Partner 3" className="w-24 h-24 mb-8" />
                    <img src="../components/Chhipa.png" alt="Partner 4" className="w-24 h-24 mb-8" />
                    </div>
            </div>
            <div className="flex items-center justify-center w-screen h-screen bg-purple-300">
                <div className="flex flex-col items-center justify-center w-96 h-80 bg-white rounded-xl shadow-xl">
                    <div className="mb-8">
                        <img src="../components/Logo_Final.png" alt="Logo" className="w-48 h-44" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Link to="/signin" className="bg-green-600 text-white w-64 h-10 rounded-lg mb-4 flex items-center justify-center">
                            Log In
                        </Link>
                        <Link to="/signup" className="bg-gray-600 text-white w-64 h-10 rounded-lg flex items-center justify-center">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
