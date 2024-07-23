import "../styles/home.css";
import "../styles/someviews.css"
import logo from "../../src/assets/logo.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Mascotas = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <img src={logo} className="logo" />
          <Navbar />
        </div>
        <div className="main-content">
            <div className="tittle">
        <Link to="/">
        <h5 className='inicio'>Volver al Inicio</h5>
        </Link>
            <h1>Mascotas</h1> 
        </div>
        </div>
      </div>
    </>
  );
};

export default Mascotas