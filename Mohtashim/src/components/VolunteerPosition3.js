import React from "react";

const VolunteerPosition3 = () => {
  return (
    <div className="flex bg-[#D5C6FF] justify-between">
      {/* Left Dabba */}
      <div className="bg-[#F2F2F2] h-screen w-1/4 flex flex-col justify-between items-center">
        {/* Logo's div */}
        <div className="image bg-opacity-100 h-1/6 flex justify-center">
          <img className="" src="../components/Logo_Final.png" alt="haha" />
        </div>

        {/* Menu options' div */}
        <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
          <button className="flex items-center mt-1 pl-10 py-2 mr-8  hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/home.png" alt="LMAO" />
            <a href="/" className="px-4">
              Home
            </a>
          </button>
          <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-r-3xl">
            <img className="h-5" src="../components/donation.png" alt="LMAO" />
            <a href="cc1/" className="px-4">
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
          <button className="flex items-center mt-1 pl-10 py-2 mr-8   bg-[#CBC7C7] rounded-r-3xl">
            <img className="h-5" src="../components/volunteer.png" alt="LMAO" />
            <a href="/vol0" className="px-4">
              Volunteer Position
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

      {/* Right wala dabba */}
      <div className="right-box bg-[#D5C6FF] w-3/4 px-10 pt-10 flex flex-col">
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl">
          {/* div with image name deets and resume button */}
          <div className="top flex items-center justify-between">
            <img className="w-32" src="../components/mohtashim.png" alt="" />
            <div class="textDet px-8 flex flex-col justify-between">
              <div className="email-and-contact flex flex-col">
                <h1 className="text-3xl font-semibold">Mohtashim Clown</h1>
                <div class="contactDets flex py-2">
                  <div className="emial flex pr-4">
                    <img
                      className="w-4"
                      src="../components/contact-mail.png"
                      alt=""
                    />
                    <p className="text-sm pl-2">0333-5634122</p>
                  </div>
                  <div className="contact flex pl-4">
                    <img
                      className="w-4"
                      src="../components/phone-call.png"
                      alt=""
                    />
                    <p className="text-sm pl-2">pain@gmail.com</p>
                  </div>
                </div>
                  <p className="text-sm"><b>Current Profession: </b>Student</p>
                  <p className="text-sm"><b>Age:</b>21</p>
              </div>
              <div className="address text-lg">
                <b>Address:</b> 123, Street 4, block D, DHA Phase 5, Lahore.
              </div>
            </div>
            <button class="button h-fit mr-8 rounded-md px-3 bg-[#12D200] hover:bg-[#2a8022]" onClick={() => window.open('../components/Mohtashim_Resume_LUMS.pdf', '_blank')}>
              See Resume
            </button>
          </div>
          {/* div with motivation application */}
          <div className="motivation">
            <b>Applicant's Motivation for this position:</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea necessitatibus provident dignissimos reprehenderit pariatur eligendi vitae, dicta ut magni iste fugit perferendis omnis, inventore, sequi magnam consequatur! Eligendi, doloribus?</p>
          </div>
          {/* div with experience */}
          <div className="experience">
          <b>Applicant's Prior experince:</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, vero maiores earum reprehenderit cumque saepe totam perspiciatis fugit blanditiis, repellat inventore consectetur itaque eaque facilis dolore a, autem vel culpa?
          </p>
          </div>
          {/* div with approve/reject buttons */}
          <div className="buttons flex justify-center">
            <button className="approve flex flex-col items-center w-10 mx-16 transform transition duration-300 ease-in-out hover:scale-110">
              <img className="" src="../components/correct.png" alt=""/>
              <p>Approve</p>
            </button>
            <a href="vol2" className="approve flex flex-col items-center w-10 mx-16 transform transition duration-300 ease-in-out hover:scale-110">
              <img className="" src="../components/back.png" alt=""/>
              <p>Back</p>
            </a>
            <button className="decline flex flex-col items-center w-10 mx-16 transform transition duration-300 ease-in-out hover:scale-110">
              <img className="" src="../components/delete.png" alt=""/>
              <p>Decline</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPosition3;
