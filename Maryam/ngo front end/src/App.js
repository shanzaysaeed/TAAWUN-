// import './App.css';
import akh from './Akhuwat-program.png';
import edhi from './edhi.jpeg';
import chiipa from './chiipa.jpeg';
import jdc from './Jdc-Logo.png';
import logo from './Logo_Final.png';
import person from './img.jpeg';



const PartenerSideBar = () => {
  return (
    <div className="fixed h-full w-60 p-4 top-8 left-0">
      <h2 className="text-center text-2xl my-1 font-medium">Our Partners</h2>
      <div className="flex flex-col items-center">
        <div className='mt-5'>
        <img src={akh} alt="Partner 1" className="w-24 h-24" />
        </div>
        <div className='mt-5'>
        <img src={jdc} alt="Partner 2" className="w-24 h-24 mb-8" />
        </div>
        <img src={edhi} alt="Partner 3" className="w-24 h-24 mb-8" />
        <img src={chiipa} alt="Partner 4" className="w-24 h-24 mb-8" />
      </div>
    </div>
  );
};

function App () {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-purple-300">
      <PartenerSideBar/>
      <div className="fixed top-10 right-0 bottom-0 left-60 bg-gray-100 rounded-2xl flex">
        <div className="w-full flex flex-col justify-center items-center">
            <img src={logo} alt="Logo" className="w-40 h-40 mt-4 " />
            {/* <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center"> */}
            <div >
                {/* <input
                    onChange={(e) => setName(e.target.value)}
                    className={`border-2 border-gray-800 rounded-md p-3 ${nameError && 'border-red-500'}`}
                    type='text'
                    placeholder='Name'
                    style={{width: '100%'}}
                /> 
                {nameError && <p className="text-red-500">{nameError}</p>} */}
                <p className='text-xs font-bold'>Full Name</p>
                <input className='border-2 border-gray-300 rounded-md p-1 w-80 items-left ' type='text' placeholder='Name' ></input>
            </div>
                <div className='my-1'>
                    {/* <input
                    onChange={(e) => setEmail(e.target.value)}
                    className= {`border-2 border-gray-800 rounded-md p-3 ${emailError && 'border-red-500'}`}
                    type='email'
                    placeholder='Email'
                    style={{width: '100%'}}
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>} */}
                    <p className='text-xs font-bold'>Email Address</p>
                    <input className='border-2 border-gray-300 rounded-md p-1 w-80 items-left' type='email' placeholder='Email'></input>
                </div>
                <div className='my-1 '>
                    {/* <input
                        onChange={(e) => setPassword(e.target.value)}
                        className={`border-2 border-gray-800 rounded-md p-3 ${passwordError && 'border-red-500'}`}
                        type='password'
                        placeholder='Password'
                        style={{width: '100%'}}
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>} */}
                    <p className='text-xs font-bold'>Password</p>
                    <input className='border-2 border-gray-300 rounded-md p-1 w-80 items-left' type='password' placeholder='Password'></input>
                </div>
                <div className='my-1'>
                    {/* <input
                        onChange={(e) => setAddress(e.target.value)}
                        className={`border-2 border-gray-800 rounded-md p-3 ${addressError && 'border-red-500'}`}
                        type='text'
                        placeholder='Address'
                        style={{width: '100%'}}
                    />
                    {addressError && <p className="text-red-500">{addressError}</p>} */}
                    <p className='text-xs font-bold'>Address</p>
                    <input className='border-2 border-gray-300 rounded-md p-1 w-80 items-left' type='text' placeholder='Address'></input>
                </div>
                <div className='my-1 flex'>
                    <div className='w-40'>
                        {/* <input
                            onChange={(e) => setRegistration(e.target.value)}
                            className={`border-2 border-gray-800 rounded-md p-3 ${registrationError && 'border-red-500'}`}
                            type='number'
                            placeholder='Registration Number'
                        />
                        {registrationError && <p className="text-red-500">{registrationError}</p>} */}
                        <p className='text-xs font-bold'>Registration N.o</p>
                        <input className='border-2 border-gray-300 rounded-md p-1 w-full items-left' type='number' placeholder=' Registration number' ></input>
                    </div>
                    <div className='w-40 ml-1'>
                        {/* <input
                            onChange={(e) => setContact(e.target.value)}
                            className={`border-2 border-gray-800 rounded-md p-3 ${contactError && 'border-red-500'}`}
                            type='number'
                            placeholder='Contact Number'
                        />
                        {contactError && <p className="text-red-500">{contactError}</p>} */}
                        <p className='text-xs font-bold'>Contact N.o</p>
                        <input className='border-2 border-gray-300 rounded-md p-1 w-full  items-center' type='number' placeholder='Contact number'></input>
                    </div>
                </div>
                <div className='my-1'>
                    {/* <input
                        onChange={(e) => setLogo(e.target.files[0])}
                        className='border-2 border-gray-800 rounded-md p-3'
                        type='file'
                        style={{width: '100%'}}
                    /> */}
                    <p className='text-xs font-bold'>Choose file</p>
                    <input className='border-2 border-gray-300 rounded-md p-1 w-80 file-input items-center' type='file'></input>
                </div>
                <button className='bg-green-500 hover:bg-green-600 text-white rounded-2xl py-2 px-8 my-1 w-80' >
                    Sign Up
                </button>
            {/* </form> */}
        </div>

        <div className="w-1/3 flex justify-center items-center">
          <img src={person} alt="signup" className="w-full h-full" />
        </div>
      </div>
    </div>
    
  );
}

export default App;
