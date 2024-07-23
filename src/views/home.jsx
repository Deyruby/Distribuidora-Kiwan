import "../styles/home.css";
import logo from "../../src/assets/logo.jpg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <img src={logo} className="logo" />
          <Navbar />
        </div>
        <div className="main-content">HOLAaaaaa
            ESTAMOS PROBANDO SI HAY SCROLL 
        </div>
      </div>
    </>
  );
};

export default Home;
