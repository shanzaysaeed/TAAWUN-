import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NGOSideBar from "../../views/NGOSideBar";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const DonationApp = () => {
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [donations, setDonation] = useState([]);
  const [logoURL, setLogoURL] = useState({});
  const [names, setNames] = useState({});
  const [selectedDonation, setSelectedDonation] = useState(null);

  const handleRightClick = (donation) => {
    setSelectedDonation(donation);
  };

  const closePopup = () => {
    setSelectedDonation(null);
  };

  const approveDonation = async (donation) => {
    // Update the donation status to "approved"
    const donationRef = doc(db, "Donation", donation.id);
    await updateDoc(donationRef, { status: "approved" });

    // Retrieve the campaign by createdBy and title
    const campaignsRef = collection(db, "campaigns");
    const campaignQuery = query(
      campaignsRef,
      where("createdBy", "==", donation.Ngo),
      where("title", "==", donation.campaign)
    );
    const campaignQuerySnapshot = await getDocs(campaignQuery);

    if (!campaignQuerySnapshot.empty) {
      const campaignDoc = campaignQuerySnapshot.docs[0];
      const campaignData = campaignDoc.data();

      // Update the campaign's amountCollected
      const newAmountCollected = campaignData.amountCollected + donation.amount;
      const campaignDocRef = doc(db, "campaigns", campaignDoc.id);
      await updateDoc(campaignDocRef, { amountCollected: newAmountCollected });

      // Set the campaign status to "completed" if the collected amount is greater than or equal to the target amount
      if (newAmountCollected >= campaignData.amount) {
        await updateDoc(campaignDocRef, { status: "completed" });
      }
    }

    closePopup();
  };

  const disapproveDonation = async (donation) => {
    // Update the donation status to "rejected"
    const donationRef = doc(db, "Donation", donation.id);
    await updateDoc(donationRef, { status: "rejected" });

    closePopup();
  };

  // Modify the useEffect that fetches donations
  useEffect(() => {
    const getDonation = async () => {
      const campaignCollection = collection(db, "Donation");
      const q = query(
        campaignCollection,
        where("status", "==", "new"),
        where("type", "==", "Cash")
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot || querySnapshot.empty) {
        setDonation([]);
        setLoading(false);
        return;
      }
      const campaignList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonation(campaignList);
    };
    getDonation();
  }, [selectedDonation, donations]);

  const getDonorPic = async (donor) => {
    if (!donor) {
      return null;
    }
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", donor));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const userData = querySnapshot.docs[0].data();
    return userData.profilePictureURL;
  };

  const getDonorName = async (donor) => {
    if (!donor) {
      return null;
    }
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", donor));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const userData = querySnapshot.docs[0].data();
    return userData.firstName;
  };

  useEffect(() => {
    const loadLogoUrls = async () => {
      const urls = {};
      const ns = {};
      for (const donation of donations) {
        urls[donation.donatedBy] = await getDonorPic(donation.donatedBy);
        ns[donation.donatedBy] = await getDonorName(donation.donatedBy);
      }
      setLogoURL(urls);
      setNames(ns);
      setLoading(false);
    };
    if (donations.length > 0) {
      loadLogoUrls();
    }
  }, [donations]);

  return (
    <div className="flex bg-purple-300 justify-between">
      <NGOSideBar />

      <div className="right-box bg-purple-300 w-3/4 mt-2 flex flex-col mr-14">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col mt-6 ml-14">
            <div className="tracking-tighter text-black font-mono text-4xl font-bold">
              <p>Donation Applications</p>
            </div>
            <div className="my-14">
              <button
                onClick={() => {
                  navigate("/apps");
                }}
                className="w-40 bg-purple-400 rounded-lg text-white border border-black hover:bg-purple-500"
              >
                {" "}
                Cash{" "}
              </button>
              <button
                onClick={() => {
                  navigate("/noncash_apps");
                }}
                className="w-40 bg-white rounded-lg text-[#AA8CFF] border border-black ml-4 hover:bg-gray-500"
              >
                {" "}
                Non Cash{" "}
              </button>
            </div>
          </div>

          <div className="p-5 mr-6 flex flex items-start">
            <p className="px-1 text-black font-semibold underline text-lg mt-4 mr-1">
              {loggedIn.name}
            </p>
            <img
              src={loggedIn.logoURL}
              alt="profile"
              className="rounded-full flex-shrink-0 px-1 h-12 w-14"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col mx-14 w-full h-full rounded ">
            <h1 className="text-2xl font-semibold">Loading ...</h1>
          </div>
        ) : (
          <div className="flex flex-col mx-14 w-4/5 h-full rounded ">
            {donations.slice(0, 3).map((donation) => (
              <div className="flex flex-row bg-[#F2F2F2] w-full h-1/4 rounded-md mb-4">
                <div className=" w-40 h-full justify-center items-center">
                  <img
                    src={logoURL[donation.donatedBy]}
                    alt="Donorpicture"
                    className="rounded-full w-20 h-20 mt-3 ml-8"
                  ></img>
                </div>
                <div className="flex flex-col h-full w-2/3">
                  <p className="font-sans text-3xl font-bold mt-1 ml-2">
                    {names[donation.donatedBy]}
                  </p>
                  <div className="flex flex-row">
                    <img
                      src="../components/Amount.png"
                      alt="Amount"
                      className="w-6 h-4 mt-2"
                    ></img>
                    <p className="font-sans font-semibold text-lg ml-3">{`Amount: ${donation.amount}`}</p>
                  </div>
                  <div className="flex flex-row">
                    <img
                      src="../components/time.jpeg"
                      alt="time"
                      className="w-4 h-4 mt-2 ml-1"
                    ></img>
                    <p className="font-sans font-semibold text-lg ml-3">
                      {new Date(
                        donation.donatedAt.seconds * 1000
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="p-2 flex flex-row items-start justify-center items-center">
                  <button
                    onClick={() => handleRightClick(donation)}
                    className="w-10 ml-6 h-10 flex justify-center items-center "
                  >
                    <img src="../components/view.png" alt="view"></img>
                  </button>
                </div>
              </div>
            ))}

            {selectedDonation && (
              <div className="fixed inset-0 z-10 flex items-center justify-center">
                {/* <div className="absolute inset-0 bg-black opacity-0" onClick={closePopup} ></div> */}
                <div className="bg-[#F2F2F2] rounded-lg w-3/4 h-3/4 p-8">
                  <img
                    src={selectedDonation.proofSS}
                    alt="Donation Proof"
                    className="object-contain rounded-lg mb-4 rounded mx-auto w-72 h-72"
                  />
                  <div className="flex flex-row justify-center mt-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4"
                      onClick={() => disapproveDonation(selectedDonation)}
                    >
                      Disapprove{" "}
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => {
                        approveDonation(selectedDonation);
                      }}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationApp;
