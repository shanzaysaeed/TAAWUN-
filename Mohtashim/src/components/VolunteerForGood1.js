import React from "react";
import { useNavigate } from "react-router-dom";

const VolunteerForGood1 = () => {
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
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/donation.png" alt="LMAO" />
            <a href="/" className="px-4">
              Donate
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8  bg-[#CBC7C7] rounded-r-3xl">
            <img className="h-5" src="../components/deal.png" alt="LMAO" />
            <a href="/" className="px-4">
              Volunteer
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/history.png" alt="LMAO" />
            <a href="/dvh" className="px-4">
              Donation/Volunteer History
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/map.png" alt="LMAO" />
            <a href="/" className="px-4">
              Map View
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/settings.png" alt="LMAO" />
            <a href="/" className="px-4">
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
      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="top flex items-center justify-between ">
          <h1 className="text-3xl font-semibold">Volunteer For Greater Good</h1>
          <div className="flex items-center h-fit w-fit">
            <p className="text-md font-semibold px-1 w-fit">
              Mohtashim
            </p>
            <img
              className="px-1 w-14"
              src="../components/mohtashim.png"
              alt="HAHAH"
            />
          </div>
        </div>
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-20 mb-3 pb-3 rounded-xl">
          <div class="search">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="sample-opportunity1 flex justify-between items-center my-4  bg-white p-2 rounded-lg">
              <div className="flex">
                <img
                  className="w-24 rounded-lg"
                  src="../components/SA.png"
                  alt=""
                />
                <div className="text px-4">
                  <p className="h1 text-xl font-bold">
                  Fund Raising by Shahid Afridi Foudation
                  </p>
                  <p className="text-xs">Not for profit</p>
                  <p className="text-xs">
                    <b>City</b>: Karachi
                  </p>
                  <p className="text-xs">
                    <b>Address</b>: 204 E.I Daud Pota Road, Karachi
                  </p>
                </div>
              </div>
              <div className="dets h-full">
                <p className="text-xs">Activity Applied: 4</p>
                <p className="text-xs">Volunteers Working: 57</p>
                <button className="text-xs bg-green-500 p-1 px-2 rounded-md mt-2" onClick={()=>{
                  navigate("/vfg2");
                }} >
                  Visit Profile
                </button>
              </div>
            </div>

            <div class="sample-opportunity2 flex justify-between items-center my-4  bg-white p-2 rounded-lg">
              <div className="flex">
                <img
                  className="w-24 rounded-lg"
                  src="../components/panda.png"
                  alt=""
                />
                <div className="text px-4">
                  <p className="h1 text-xl font-bold">
                    Iftaar Drive 
                  </p>
                  <p className="text-xs">Not for profit</p>
                  <p className="text-xs">
                    <b>City</b>: Lahore
                  </p>
                  <p className="text-xs">
                    <b>Address</b>: Inside Ali Institute of Education, Ferozepur Road, Lahore.
                  </p>
                </div>
              </div>
              <div className="dets h-full">
                <p className="text-xs">Volunteers Applied: 90</p>
                <p className="text-xs">Volunteers Working: 69</p>
                <button className="text-xs bg-green-500 p-1 px-2 rounded-md mt-2">
                  Visit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerForGood1;
