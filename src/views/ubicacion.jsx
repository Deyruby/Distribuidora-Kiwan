import React from 'react';
import '../styles/home.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import logo from '../../src/assets/logo.jpg'
import Navbar from '../components/Navbar'





const Ubicacion=()=>{
   
    const mapStyles = {        
        height: "50vh",
        width: "50%",
        
    };
        
      
      const defaultCenter = {  
        lat: -36.78978828531829, lng: -73.1095988076922
      }
    
      return (
        <>
        <div className='container-fluid'>
          <div className='header'>
        <img src={logo} className='logo'/>
        <Navbar/>
        </div>
        <div className='main-content'>
         <LoadScript
           googleMapsApiKey='AIzaSyA8Ga6EKu5ur4AKwSDTrYJMp0o6vLOCdQ0'>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={19}
              center={defaultCenter}>
              <Marker position={defaultCenter}/>
            </GoogleMap>
         </LoadScript>
         </div>
         </div>
         </>
      )
    }
export default Ubicacion;