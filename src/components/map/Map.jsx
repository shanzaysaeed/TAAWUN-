import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { db } from '../../firebase';

const DonorMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCcwbu7-BBC97NrPl2eutv_6fUjAHT_Tu0",
  });

  const [markers, setMarkers] = useState([]);
  const [selectedMarkers, setSelectedMarkers] = useState([]);

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const colRef = collection(db, "campaigns");
        const snapshot = await getDocs(colRef);
        const markersArray = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            lat: data.lat,
            lng: data.lng,
            title: data.title,
            description: data.description,
          };
        });
        setMarkers(markersArray);
      } catch (err) {
        console.error("Error fetching markers:", err.message);
      }
    };

    fetchMarkers();
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

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const toggleSelectedMarker = (marker) => {
    setSelectedMarkers((prevSelectedMarkers) => {
      if (prevSelectedMarkers.includes(marker)) {
        return prevSelectedMarkers.filter((m) => m !== marker);
      } else {
        return [...prevSelectedMarkers, marker];
      }
    });
  };

  const renderedMarkers = useMemo(() => {
    return markers.map((marker) => (
      <Marker
        key={marker.id}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => toggleSelectedMarker(marker)}
      >
        {selectedMarkers.includes(marker) && (
          <InfoWindow onCloseClick={() => toggleSelectedMarker(marker)}>
            <div>
              <h2>{marker.title}</h2>
              <p>{marker.description}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    ));
  }, [markers, selectedMarkers]);

  if (loadError) return <div>Error loading map</div>;
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
};

export default DonorMap;
