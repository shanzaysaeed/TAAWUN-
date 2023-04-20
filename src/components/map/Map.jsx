// take care of what different feilds are called when you integerate the code with main code.

import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBGh9lksh1PpeL4HFkUV0F1HZaDKQtpEaM",
  authDomain: "fir-tut-246fd.firebaseapp.com",
  projectId: "fir-tut-246fd",
  storageBucket: "fir-tut-246fd.appspot.com",
  messagingSenderId: "166077638304",
  appId: "1:166077638304:web:596cbd6ba2b20ff94c4bc5"
};

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCcwbu7-BBC97NrPl2eutv_6fUjAHT_Tu0",
  });

  const [markers, setMarkers] = useState([]);
  const [selectedMarkers, setSelectedMarkers] = useState([]);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const colRef = collection(db, 'campaigns');
    
    getDocs(colRef)
      .then((snapshot) => {
        const markersArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMarkers(markersArray);
      })
      .catch((err) => {
        console.log('This error was triggered inside the getDocs function:');
        console.log(err.message);
      });
  }, []);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: 30.3753,
    lng: 69.3451,
  };

  const options = {
    zoom: 5.8,
    disableDefaultUI: true,
  };

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const toggleSelectedMarker = (marker) => {
    if (selectedMarkers.includes(marker)) {
      setSelectedMarkers(selectedMarkers.filter((m) => m !== marker));
    } else {
      setSelectedMarkers([...selectedMarkers, marker]);
    }
  };

  const renderedMarkers = useMemo(() => {
    return markers.map((marker) => (
      <Marker
        key={marker.id}
        position={marker.Coordinates}
        onClick={() => {
          toggleSelectedMarker(marker);
        }}
      >
        {selectedMarkers.includes(marker) && (
          <InfoWindow onCloseClick={() => toggleSelectedMarker(marker)}>
            <div>{marker.InfoWindowText}</div>
          </InfoWindow>
        )}
      </Marker>
    ));
  }, [markers, selectedMarkers]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={options.zoom}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {renderedMarkers}
      </GoogleMap>
    </div>
  );
}