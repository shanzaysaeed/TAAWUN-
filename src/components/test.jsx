import './test.css';

function Test() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="sidebar absolute top-0 left-0 z-10 w-1/4 h-full bg-white bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="header1">Our Partners</h1>
        <div className="akh mt-16">
          <img className="side1 w-24 h-24" src="../components/akhuwat.png" alt="Akhuwat logo" />
        </div>
        <div className="jdc mt-24">
          <img className="side2 w-28 h-28" src="../components/jdc.png" alt="JDC Logo" />
        </div>
        <div className="edhi mt-24">
          <img className="side3 w-24 h-24" src="../components/edhhi.png" alt="Edhi logo" />
        </div>
        <div className="chiipa mt-24">
          <img className="side4 w-24 h-24" src="../components/Chhipa.png" alt="Chiipa logo" />
        </div>
      </div>
      <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <button className="button1 mr-2" type="button">Admin</button>
        <button className="button2 mr-2" type="button">NGO</button>
        <button className="button3 mr-2" type="button">Donor</button>
        <button className="button4" type="button">Rider</button>
      </div>
      <div className="bar absolute bottom-24 left-96 z-10 w-4/7 h-2/5 bg-white bg-opacity-50 border-2 border-black rounded-2xl flex justify-center items-center">
        <div className="text-center">
          <h1 className="header2">What is Ta'awun?</h1>
          <p className="p1">Ta'awun is an NGO Management System. Natural Disasters have always been the perpetrators of havoc in Pakistan, and charity from across the country aid in the continuance of welfare work. The purpose of Ta'awun is to bring all NGOs under one roof so that NGOs can collaborate on multiple campaigns (or run their individual campaigns) and provide accessibility to donors to choose which campaign they want to donate.</p>
        </div>
      </div>
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="../components/homepage.png" alt="Flood affected areas" />
    </div>
  );
}

export default Test;
