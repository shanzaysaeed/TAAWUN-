import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { UserAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

const Admin = () => {
  const { createUser, logout } = UserAuth();
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [NGOS, setNGOS] = useState([]);
  const [riders, setRiders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNgos = async () => {
      const ngoRef = collection(db, "users");
      const q = query(
        ngoRef,
        where("role", "==", "NGO"),
        where("verification", "==", "False")
      );
      const querySnapshot = await getDocs(q);
      let NGOs = [];
      querySnapshot.forEach((doc) => {
        NGOs.push({ id: doc.id, ...doc.data() });
      });
      setNGOS(NGOs);
    };
    fetchNgos();
  }, []);

  useEffect(() => {
    const fetchRiders = async () => {
      const ngoRef = collection(db, "users");
      const q = query(
        ngoRef,
        where("role", "==", "Rider"),
        where("verification", "==", "False")
      );
      const querySnapshot = await getDocs(q);
      let Riders = [];
      querySnapshot.forEach((doc) => {
        Riders.push({ id: doc.id, ...doc.data() });
      });
      setRiders(Riders);
    };
    fetchRiders();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin_signin");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");
    try {
      // create user with email and password
      // const { user } = await createUser(email, password);
      await createUser(email, password);

      // navigate('/signin')
    } catch (e) {
      setError(e.message);
      console.log(error);
      return;
    }
  };

  const handleNGOs = async (e, id, email, password) => {
    const ngoRef = doc(db, "users", id);
    await updateDoc(ngoRef, { verification: "True" });
    // reload the table after verification
    const q = query(
      collection(db, "users"),
      where("verification", "==", "False")
    );
    const querySnapshot = await getDocs(q);
    let NGOs = [];
    querySnapshot.forEach((doc) => {
      NGOs.push({ id: doc.id, ...doc.data() });
    });
    setNGOS(NGOs);

    handleSubmit(e, email, password);
  };

  const handleRiders = async (e, id, email, password) => {
    const ngoRef = doc(db, "users", id);
    await updateDoc(ngoRef, { verification: "True" });
    // reload the table after verification
    const q = query(
      collection(db, "users"),
      where("verification", "==", "False")
    );
    const querySnapshot = await getDocs(q);
    let Riders = [];
    querySnapshot.forEach((doc) => {
      Riders.push({ id: doc.id, ...doc.data() });
    });
    setRiders(Riders);

    handleSubmit(e, email, password);
  };

  return (
    <div className="flex bg-purple-300 w-screen h-screen">
      {/* starts from here */}
      <div className="flex flex-col justify-between w-full">
        {/* ... */}
        <div className="flex flex-col mb-4 ml-28 ">
          <div className="flex flex-row mb-2">
            <p className="p-2 font-sans text-blaxk font-bold text-xl">
              Sign Up Requests
            </p>
          </div>
          {/* ... */}
        </div>

        <div className="flex flex-col w-2/3 h-fit rounded mb-8 ml-28">
          {NGOS.map((ngo) => (
            <div
              key={ngo.id}
              className="flex flex-row bg-[#F2F2F2] w-full h-28 rounded-md mt-4"
            >
              <div className=" w-40 h-full justify-center items-center">
                <img
                  src="../components/edhhi.png"
                  alt=""
                  className="rounded-full w-20 h-20 mt-3 ml-8"
                ></img>
              </div>
              <div className="flex flex-col h-full w-1/2">
                <p className="font-sans text-4xl font-bold mt-4 ">{ngo.name}</p>
                <p className="font-sans text-md font-bold">
                  Registration number: {ngo.registrationNumber}
                </p>
              </div>
              <div className="p-2 flex flex-row ml-8">
                <p className="text-purple-400 font-bold text-2xl mt-6 ml-4">
                  NGO
                </p>
                <button
                  onClick={(e) =>
                    handleNGOs(e, ngo.id, ngo.email, ngo.password)
                  }
                >
                  <img
                    src="../components/correct.jpeg"
                    alt="accept"
                    className="w-7 h-7 ml-10 mb-2"
                  ></img>
                </button>
                <button className="">
                  <img
                    src="../components/d.jpeg"
                    alt="accept"
                    className="w-7 h-7 ml-10 mb-2"
                  ></img>
                </button>
              </div>
            </div>
          ))}

          {riders.map((rider) => (
            <div
              key={rider.id}
              className="flex flex-row bg-[#F2F2F2] w-full h-28 rounded-md mt-4"
            >
              <div className=" w-40 h-full justify-center items-center">
                <img
                  src="../components/edhhi.png"
                  alt=""
                  className="rounded-full w-20 h-20 mt-3 ml-8"
                ></img>
              </div>
              <div className="flex flex-col h-full w-1/2">
                <p className="font-sans text-4xl font-bold mt-4 ">
                  {rider.name}
                </p>
                <p className="font-sans text-md font-bold">
                  Registration number: {rider.registrationNumber}
                </p>
              </div>
              <div className="p-2 flex flex-row ml-8">
                <p className="text-green-500 font-bold text-2xl mt-6 ml-4">
                  Rider
                </p>
                <button
                  onClick={(e) =>
                    handleRiders(e, rider.id, rider.email, rider.password)
                  }
                >
                  <img
                    src="../components/correct.jpeg"
                    alt="accept"
                    className="w-7 h-7 ml-10 mb-2"
                  ></img>
                </button>
                <button className="">
                  <img
                    src="../components/d.jpeg"
                    alt="accept"
                    className="w-7 h-7 ml-10 mb-2"
                  ></img>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="fixed bottom-0 right-0 flex flex-col w-1/4 h-20 ml-40 items-center">
          <button className="log-out-btn flex w-40 py-2 my-6 bg-red-400 hover:bg-red-500 rounded-3xl justify-center items-end left-0">
            <img className="h-5" src="" alt="" />
            <button
              onClick={() => {
                handleLogout();
              }}
              className="btn px-2"
            >
              Log out
            </button>
          </button>
        </button>
      </div>
    </div>
  );
};

export default Admin;
