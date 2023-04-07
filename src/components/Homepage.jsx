import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="sidebar absolute top-0 left-0 z-10 w-52 h-full bg-white bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className='text-xl font-bold mb-6'>Our Partners</h1>
        <div className='akh mb-6'>
          <img className="w-20 h-20 object-contain" src="../components/akhuwat.png" alt="Akhuwat logo" />
        </div>
        <div className='jdc mb-6'>
          <img className="w-20 h-20 object-contain" src="../components/jdc.png" alt="JDC Logo" />
        </div>
        <div className='edhi mb-6'>
          <img className="w-20 h-20 object-contain" src="../components/edhhi.png" alt="Edhi logo" />
        </div>
        <div className='chiipa'>
          <img className="w-20 h-20 object-contain" src="../components/Chhipa.png" alt="Chiipa logo" />
        </div>
      </div>
      <div className="absolute top-12 right-16 z-20 flex flex-col items-center justify-center pt-4 pr-4">
        <button className="mb-2 w-full px-12 py-2 rounded-md bg-green-500 text-black font-bold shadow-lg" type="button" onClick={() => {navigate('/admin_signin');}}>Admin</button>
        <button className="mb-2 w-full px-12 py-2 rounded-md bg-green-500 text-black font-bold shadow-lg" type="button" onClick={() => {navigate('/ngo');}}>NGO</button>
        <button className="mb-2 w-full px-12 py-2 rounded-md bg-green-500 text-black font-bold shadow-lg" type="button" onClick={() => {navigate('/donor');}}>Donor</button>
        <button className="w-full px-12 py-2 rounded-md bg-green-500 text-black font-bold shadow-lg" type="button" onClick={() => {navigate('/ngo');}}>Rider</button>
      </div>

      <div className='bar absolute bottom-14 left-60 z-10 w-4/6 h-2/5 bg-white bg-opacity-50 rounded-xl border border-black flex justify-center items-center'>
        <div className="p-6">
          <h1 className='text-2xl font-bold mb-6'>What is Ta'awun?</h1>
          <p className='mb-6'>Ta'awun is an NGO Management System. Natural Disasters have always been the perpetrators of havoc in Pakistan,
            and charity from across the country aid in the continuance of welfare work.
            The purpose of Ta'awun is to bring all NGOs under one roof so that NGOs can collaborate on multiple campaigns (or run their individual campaigns) and provide accessibility
            to donors to choose which campaign they want to donate.</p>
        </div>
      </div>
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="../components/homepage.png" alt="Flood affected areas" />
    </div>

  );
}

export default Homepage;