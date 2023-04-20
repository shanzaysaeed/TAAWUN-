import DonorSideBar from '../../views/DonorSideBar';
import { useNavigate } from 'react-router-dom';


const Donate3 = () => {
  const navigate = useNavigate();
  return (
      <div className='flex bg-purple-300 w-screen h-screen'>

          <DonorSideBar/>

          <div className="flex flex-col justify-between w-full">

              <div className='flex flex-row w-full justify-between'>
                  <div className='flex flex-col mt-6 mx-10'>
                      <div className='tracking-tighter text-black font-mono text-4xl font-semibold'>
                          <p>Donate For</p>
                          <p>Greater Good</p>
                      </div>
                      <div className='my-8'>
                            <button onClick={() => {navigate("/donate1")}} className='w-40 bg-purple-400 rounded-lg text-white border border-black hover:bg-purple-500'>
                                Cash
                            </button>
                            <button onClick={() => {navigate("/donate5")}} className='w-40 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 hover:bg-gray-500'>
                                Non-Cash
                            </button>
                      </div>
                  </div>

                  <div className='p-5 mr-20 flex items-start  '>
                      <p className='text-black font-semibold underline text-lg mt-6 '>Mohtashim</p>
                      <img src="../components/dp.png" alt= "profile" className='rounded-1/2 w-10 flex-shrink-0 ml-4 mt-4'></img>
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
            <p className='text-black text-xl font-semibold ml-6 mt-4'>{`Account Number: `}</p>
            <p className='text-black text-xl font-semibold ml-6 mt-4'>Enter your phone number:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='tel' placeholder='Contact number'></input>
            <p className='text-black text-xl font-semibold mt-2' style={{marginLeft: '1.5rem'}}>Enter the amount:</p>
            <input className='bg-gray-300 rounded-md p-1 w-80 mt-2' type='number' placeholder='Amount'></input>
            <p className='text-black text-xl font-semibold mt-2' style={{marginLeft: '1.5rem'}}>Upload screenshot:</p>
            <div className='border-2 border-gray-300 rounded-md p-2 w-80 mt-2'>
              <input className='mt-2' type='file' accept='image/*'></input>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className="flex flex-row w-1/5 mt-6 py-2 bg-[#CCCCCC] hover:bg-gray-500 rounded-3xl justify-center items-center mr-4">
              <img className="h-5 mr-2" src="../components/back.png" alt="back" />
              <button onClick={() => {navigate("/donate2")}} className="btn px-4 py-1">Go back</button>
            </div>
            <div className="flex flex-row w-1/5 mt-6 py-2 bg-green-500 hover:bg-green-600 rounded-3xl justify-center items-center">
              <button onClick={() => {navigate("/donate4")}} className='px-6 py-1'>Donate</button>
            </div>
          </div>

        </div>

      </div>
    </div>

  );
}


export default Donate3;
