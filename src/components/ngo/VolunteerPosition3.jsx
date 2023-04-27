import React from "react";
import NGOSideBar from "../../views/NGOSideBar";

const VolunteerPosition3 = () => {
  return (
    <div className="flex bg-purple-300 justify-between">
      {/* Left Dabba */}
      <NGOSideBar/>

      {/* Right wala dabba */}
      <div className="right-box bg-purple-300 w-3/4 px-10 pt-10 flex flex-col mr-10">
        <div className="form bg-[#F2F2F2] h-full flex flex-col justify-between mt-8 pt-8 px-8 mb-3 pb-3 rounded-xl">
          {/* div with image name deets and resume button */}
          <div className="top flex items-center justify-between">
            <img className="w-32" src="../components/mohtashim.png" alt="" />
            <div class="textDet px-8 flex flex-col justify-between">
              <div className="email-and-contact flex flex-col">
                <h1 className="text-3xl font-bold">Mohtashim Clown</h1>
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
                  <p className="text-sm"><b>Age: </b>21</p>
              </div>
              <div className="address text-sm">
                <b>Address:</b> 123, Street 4, block D, DHA Phase 5, Lahore.
              </div>
            </div>
            <button class="button h-fit mr-8 rounded-md px-3 py-1 bg-green-500 hover:bg-[#2a8022] border border-black" onClick={() => window.open('../components/Mohtashim_Resume_LUMS.pdf', '_blank')}>
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
            <button className="approve flex flex-col items-center w-8 mx-16 transform transition duration-300 ease-in-out hover:scale-110">
              <img className="" src="../components/correct.png" alt=""/>
              <p className="text-sm font-semibold">Approve</p>
            </button>
            <a href="vol2" className="approve flex flex-col items-center w-8 mx-16 transform transition duration-300 ease-in-out hover:scale-110">
              <img className="" src="../components/back.png" alt=""/>
              <p className="text-sm font-semibold">Back</p>
            </a>
            <button className="decline flex flex-col items-center w-8 mx-16 transform transition duration-300 ease-in-out hover:scale-110">
              <img className="" src="../components/delete.png" alt=""/>
              <p className="text-sm font-semibold">Decline</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPosition3;
