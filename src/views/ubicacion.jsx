import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "100vh",
  width: "80%",
};

const defaultCenter = {
  lat: -36.78978828531829,
  lng: -73.1095988076922,
};

const apiKey = import.meta.env.VITE_API_KEY;

const Ubicacion = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="main-content d-flex justify-content-center">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={19}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
};
export default Ubicacion;
