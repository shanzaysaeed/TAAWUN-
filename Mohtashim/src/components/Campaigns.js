import React from "react";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      <div className="bg-[#F2F2F2] h-screen w-1/4 flex flex-col justify-between items-center">
        {/* Logo's div */}
        <div className="image bg-opacity-100 h-1/6 flex justify-center">
          <img className="" src="../components/Logo_Final.png" alt="haha" />
        </div>

        {/* Menu options' div */}
        <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/home.png" alt="LMAO" />
            <a href="/" className="px-4">
              Home
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8  bg-[#CBC7C7] rounded-r-3xl">
            <img className="h-5" src="../components/donation.png" alt="LMAO" />
            <a href="/" className="px-4">
              Campaigns
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/deal.png" alt="LMAO" />
            <a href="/" className="px-4">
              Collaboration
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img
              className="h-5"
              src="../components/google-docs.png"
              alt="LMAO"
            />
            <a href="/" className="px-4">
              Donation Applications
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/history.png" alt="LMAO" />
            <a href="/" className="px-4">
              Donation History
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/map.png" alt="LMAO" />
            <a href="/" className="px-4">
              Map View
            </a>
          </button>
          <button
            className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl"
            onClick={() => navigate("/vol1")}
          >
            <img className="h-5" src="../components/volunteer.png" alt="LMAO" />
            <a href="/vol1" className="px-4">
              Volunteer Position
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/settings.png" alt="LMAO" />
            <a href="/vol1" className="px-4">
              Setting
            </a>
          </button>
        </div>
        {/* Log-out div */}
        <div className="log-out-btn flex w-2/5 py-2 my-8 bg-red-400 hover:bg-red-500 rounded-md justify-center items-center">
          <img className="h-5" src="../components/logout.png" alt="LMAO" />
          <button className="btn px-2">Log out</button>
        </div>
      </div>
      {/* Right wala dabba */}

      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="top flex justify-between items-center">
          <div className="text-image">
            <h1 className="text-3xl font-semibold">Volunteer Position</h1>
          </div>
          <div className="flex items-center">
            <p className="text-2xl font-semibold px-1">EDHI</p>
            <img
              className="px-1"
              src="../components/edhilogo.png"
              alt="HAHAH"
            />
          </div>
        </div>
        {/* div for buttons */}
        <div className="buttons flex justify-between pt-8">
          <div className="leftButtons flex">
            <button className="btn-ongoing rounded-md bg-[#AA8CFF] px-2 py-1 mr-4">
              <a href="/cc1">On Going</a>
            </button>
            <button className="btn-successful rounded-md bg-[#FFFFFF] px-2 py-1 ml-4">
              <a href="/ongoingC">Successful</a>
            </button>
          </div>
          <div className="rightButton rounded-md text-gray-50 bg-[#26235C] px-2 py-1 mr-4">
            <a href="/cc2">Create +</a>
          </div>
        </div>
        {/* div for gray area */}
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl">
          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <img src="../components/edhilogo.png" alt="" />
            <div className="text px-8">
              <h1 className="text-xl font-semibold">Children Hospital Fund</h1>
              <p className="text-xs">
                Donation and blood required for thalassemia patients. Around 35
                kids are looking for your kind contributions...
              </p>
              <p className="text-xs">
                <b>Amount Needed:</b> PKR 10,00,000/-
              </p>
              <p className="text-xs">
                <b>Blood Required:</b> Several bottles of every blood group
              </p>
            </div>
            <div class="icons flex flex-col w-1/5 justify-between px-2 items-center">
              <div className="buttons flex">
                <button className="w-fit mx-1">
                  <img src="../components/editing.png" alt="" />
                </button>
                <button className="w-fit mx-1">
                  <img src="../components/delete.png" alt="" />
                </button>
              </div>
              <div className="location pt-2 flex items-center justify-center">
                <img
                  className="w-1/6"
                  src="../components/placeholder.png"
                  alt=""
                />
                <p className="font-bold">Lahore</p>
              </div>
            </div>
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <img src="../components/jdc.png" alt="" />
            <div className="text px-8">
              <h1 className="text-xl font-semibold">Flood Relief Fund</h1>
              <p className="text-xs">
                Donation required for the flood victims in North. The damage
                caused by the flood is so massive that people...
              </p>
              <p className="text-xs">
                <b>Amount Needed:</b> PKR 90,00,000/-
              </p>
              <p className="text-xs">
                <b>Other Stuff Required:</b>Blanket, clean water, medicines,
                sanitary products...
              </p>
            </div>
            <div class="icons flex flex-col w-1/5 justify-between px-2 items-center">
              <div className="buttons flex">
                <button className="w-fit mx-1">
                  <img src="../components/editing.png" alt="" />
                </button>
                <button className="w-fit mx-1">
                  <img src="../components/delete.png" alt="" />
                </button>
              </div>
              <div className="location pt-2 flex items-center justify-center">
                <img
                  className="w-1/6"
                  src="../components/placeholder.png"
                  alt=""
                />
                <p className="font-bold">Sawaat</p>
              </div>
            </div>
          </div>

          <div className="campaign flex items-center bg-[#FFFFFF] rounded-md justify-between py-2 px-4">
            <img src="../components/SA.png" alt="" />
            <div className="text px-8">
              <h1 className="text-xl font-semibold">Children Hospital Fund</h1>
              <p className="text-xs">
                Donation and blood required for thalassemia patients. Around 35
                kids are looking for your kind contributions...
              </p>
              <p className="text-xs">
                <b>Amount Needed:</b> PKR 10,00,000/-
              </p>
              <p className="text-xs">
                <b>Blood Required:</b> Several bottles of every blood group
              </p>
            </div>
            <div class="icons flex flex-col w-1/5 justify-between px-2 items-center">
              <div className="buttons flex">
                <button className="w-fit mx-1">
                  <img src="../components/editing.png" alt="" />
                </button>
                <button className="w-fit mx-1">
                  <img src="../components/delete.png" alt="" />
                </button>
              </div>
              <div className="location pt-2 flex items-center justify-center">
                <img
                  className="w-1/6"
                  src="../components/placeholder.png"
                  alt=""
                />
                <p className="font-bold">Lahore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
