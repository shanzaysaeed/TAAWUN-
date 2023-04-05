import React from "react";

const LeftMenuBar = ()=>{
    return(
        <>
        {/* <div className="bg-[#D5C6FF] h-screen w-screen"> */}

            <div className="bg-[#F2F2F2] h-screen w-1/4 flex flex-col justify-between items-center">
                {/* Logo's div */}
                <div className="image bg-opacity-100 h-1/6 flex justify-center">
                    <img className="" src="../components/Logo_Final.png" alt="haha"/>
                </div>

                {/* Menu options' div */}
                <div className="menu-items flex flex-col justify-between py-8 h-full w-full">
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8  bg-[#CBC7C7] rounded-e-3xl">
                        <img className="h-5" src="../components/home.png" alt="LMAO"/>
                        <a href='/' className="px-4">Home</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src="../components/donation.png" alt="LMAO"/>
                        <a href="/" className="px-4">Campaigns</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src="../components/deal.png" alt="LMAO"/>
                        <a href="/" className="px-4">Collaboration</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src="../components/google-docs.png" alt="LMAO"/>
                        <a href="/" className="px-4">Donation Applications</a>

                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src="../components/history.png" alt="LMAO"/>
                        <a href="/" className="px-4">Donation History</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src="../components/map.png" alt="LMAO"/>
                        <a href="/" className="px-4">Map View</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src="../components/volunteer.png" alt="LMAO"/>
                        <a href="/" className="px-4">Volunteer Position</a>
                    </button>
                    <button className="flex items-center mt-1 pl-10 py-2 mr-8 hover:bg-[#e5e1e1] rounded-e-3xl">
                        <img className="h-5" src="../components/settings.png" alt="LMAO"/>
                        <a href="/" className="px-4">Setting</a>
                    </button>
                </div>
                {/* Log-out div */}
                <div className="log-out-btn flex w-2/5 py-2 my-8 bg-red-400 hover:bg-red-500 rounded-md justify-center items-center">
                    <img className="h-5" src="../components/logout.png" alt="LMAO"/>
                    <button className="btn px-2">Log out</button>
                </div>
            </div>

            <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCampaignTitle">
            <InputGroup>
              <InputGroup.Text id="formCampaignTitle">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Campaign Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCampaignDesc">
            <InputGroup>
              <InputGroup.Text id="formCampaignDesc">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Campaign Description"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCampaignLocation">
            <InputGroup>
              <InputGroup.Text id="formCampaignLocation">C</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Location"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add Campaign
            </Button>
          </div>
        </Form>
      </div>

            
        {/* </div> */}
        </>
    );
};

export default LeftMenuBar;