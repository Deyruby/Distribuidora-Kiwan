import "../styles/someviews.css"
import {Link} from "react-router-dom";

const Aseo = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="main-content">
            <div className="tittle">
        <Link to="/">
        <h5 className='inicio'>Volver al Inicio</h5>
        </Link>
            <h1>Aseo</h1> 
        </div>
        </div>
      </div>
    </>
  );
};

export default Aseo
