import DonorSideBar from '../../views/DonorSideBar';
import { useNavigate } from 'react-router-dom';

const Donate4 = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem('user'))
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
              <p className='text-black font-semibold underline text-lg mt-6 '>{loggedIn.firstName}</p>
              <img src={loggedIn.profilePictureURL} alt="profile" className='rounded-full flex-shrink-0 ml-4 mt-4 w-12 h-12' />
          </div>
        </div>

        <div className="bg-[#F2F2F2] my-6 mx-10 w-11/12 h-3/4 rounded justify-center">
          <div className='flex flex-row justify-center'>
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-white  rounded-full mt-2 border border-black '></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6 bg-white rounded-full mt-2 border border-black'></button>
            <a href='/' className='mt-2'>------------</a>
            <button className='w-6 h-6  bg-purple-400 rounded-full mt-2 border border-black'></button>
          </div>

          <div className='flex flex-row  w-full h-full justify-center items-center text-center'>
            <div className='flex flex-col border border-black shadow-md w-1/4 bg-white rounded-2xl h-60 justify-center items-center'>
              <div className='flex flex-col  mx-4  mb-8 justify-center items-center'>
                <img src="../components/tick.jpeg" alt="tick" className=' w-10 h-10 mt-4 '></img>
                <p className='font-bold text-2xl '>THANK YOU</p>
                <p className='font-bold text-lg mt-4 '>Your Donation has been received by the respective NGO</p>

                <button onClick={() => {navigate("/donate1")}} className='bg-[#26235C] text-white rounded-md  w-40 h-8 mt-2 hover:bg-purple-500'>Done</button>
              </div>
            </div>
          </div>  

        


        </div>

      </div>
    </div>

  );
}









export default Donate4;