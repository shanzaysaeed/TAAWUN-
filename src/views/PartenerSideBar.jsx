import React from 'react'

const PartenerSideBar = () => {
    return (
      <div className="fixed h-full w-60 p-4 top-8 left-0">
        <h2 className="text-center text-lg font-bold my-4">Our Partners</h2>
        <div className="flex flex-col items-center">
          <img src="../components/akhuwat.png" alt="Partner 1" className="w-24 h-24 mb-8" />
          <img src="../components/jdc.png" alt="Partner 2" className="w-24 h-24 mb-8" />
          <img src="../components/edhhi.png" alt="Partner 3" className="w-24 h-24 mb-8" />
          <img src="../components/Chhipa.png" alt="Partner 4" className="w-24 h-24 mb-8" />
        </div>
      </div>
    );
  };
  

export default PartenerSideBar
