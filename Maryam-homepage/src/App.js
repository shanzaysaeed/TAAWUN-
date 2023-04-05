import hp from './hp.jpeg';
import akh from './Akhuwat-program.png';
import jdc from './Jdc-Logo.png';
import edhi from './edhi.jpeg';
import chiipa from './chiipa.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <h1 className='header1'>Our Partners</h1>
        <div className='akh'>
        <img className="side1" src={akh} alt="Akhuwat logo" />
        </div>
        <div className='jdc'>
        <img className="side2" src={jdc} alt="JDC Logo" />
        </div>
        <div className='edhi'>
        <img className="side3" src={edhi} alt="Edhi logo" />
        </div>
        <div className='chiipa'>
        <img className="side4" src={chiipa} alt="Chiipa logo" />
        </div>
      </div>
      <div className="overlay">
        <button className="button1" type="button">Admin</button>
        <button className="button2" type="button">NGO</button>
        <button className="button3" type="button">Donor</button>
        <button className="button4" type="button">Rider</button>
      </div>
      <div className='bar'>
        <h1 className='header2'>What is Ta'awun?</h1>
        <p className='p1'>Ta'awun is an NGO Management System. Natural Disasters have always been the perpetrators of havoc in Pakistan,
           and charity from across the country aid in the continuance of welfare work. 
           The purpose of Ta'awun is to bring all NGOs under one roof so that
          NGOs can collaborate on multiple campaigns (or run their individual campaigns) and provide accessibility
           to donors to choose which campaign they want to donate. </p>
      </div>
      <img src={hp} alt="Flood affected areas" />
    </div>

  );
}

export default App;
