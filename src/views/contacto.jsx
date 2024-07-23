import '../styles/home.css'
import '../styles/contacto.css'
import logo from '../../src/assets/logo.jpg'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'





const Contacto=()=>{


return(
<>
<div className='container-fluid'>
    <div className='header'>
    <img src={logo} className='logo'/>
    <Navbar/>
    </div>
    <div className='main-content'>
        <div className='tittle'>
        <Link to="/">
        <h5 className='inicio'>Volver al Inicio</h5>
        </Link>
    <h1>Contacto</h1>

    <h2>
        Email:
        <a href="mailto: distribuidorakiwan@gmail.com" className="emailcontacto">
        <i className="fa-solid fa-envelope ps-2 pe-2" style= {{color: "#0a0a0a"}}></i>
         distribuidorakiwan@gmail.com
    <span className="tooltiptextemailcontacto">Enviar Correo!</span>
    </a>
    </h2>
    <h2>
        Teléfono:
        <a href="tel:+56959454869" className="iconcontacto">
        <i className="fa-solid fa-phone ps-2 " style={{color: "#00040a"}}></i>
        +56959454869
        <span className="tooltiptextcontacto">Llamar!</span>
        </a>
        </h2>
    </div>
    </div>
    </div>
  

</>


)
}

export default Contacto;