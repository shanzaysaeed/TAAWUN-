import NGOSideBar from "../../views/NGOSideBar";

const Collaboration = () => {
  return (
    <div className="flex bg-purple-300 justify-between">
      <NGOSideBar />
      <div className="flex flex-col justify-between w-3/4 h-screen">
        <div className="flex flex-row justify-between items-center mt-8 mr-14">
          <div className="flex flex-col">
            <p className="tracking-tighter text-black font-mono text-4xl font-semibold">
              Collaborations
            </p>
          </div>

          <div className="flex items-center">
            <p className="text-black font-semibold text-lg mr-2 underline">Edhi</p>
            <img
              src="../components/akhuwat.png"
              alt="lol"
              className="w-10 h-10 mb-2"
            ></img>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col mt-2">
            <div className="tracking-tight text-black font-sans text-xl font-semibold">
              <p>Collaboration has successfully been made</p>
            </div>
          </div>
        </div>

        <div className="h-96 rounded flex flex-col items-center justify-between">
          <img src="../components/correct.png" className="w-2/12" alt="LMAO" />
          <a href="/collab" className="bg-[#26235C] text-white text-lg font-semibold rounded-lg border border-black flex justify-center items-center hover:bg-gray-500 px-6 py-1 my-5 mb-14">
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
