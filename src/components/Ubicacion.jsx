
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

 

const OpenInGoogleMaps = (address) => {
    
    const encodedAddress = encodeURIComponent(address);
   
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
   
    window.open(googleMapsUrl, '_blank', 'noopener noreferrer');
  };

  
const MyMap = () => {
  const position = [-36.78978828531829, -73.1095988076922]; 

  return (
    <MapContainer center={position} zoom={19} style={{ height: "80vh", width: "60%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Distribuidora Kiwan. Gran Bretaña 3592 <br /> Hualpén <br/><p className='text-primary' onClick={()=>OpenInGoogleMaps("Gran Bretaña 3592, Hualpén")}>¿Cómo llegar?</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;