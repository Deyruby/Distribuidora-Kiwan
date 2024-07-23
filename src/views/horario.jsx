import '../styles/home.css'
import '../styles/someviews.css'
import logo from '../../src/assets/logo.jpg'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'





const Horario=()=>{


return(
<>
<div className='container-fluid'>
<div className="header">
    <img src={logo} className='logo'/>
    <Navbar/>
    </div>
    <div className='main-content'>
        <div className='tittle'>
    <Link to="/">
        <h5 className='inicio'>Volver al Inicio</h5>
        </Link>
    <h1>Horario</h1>
    <h2>Lunes a Sábado:</h2>
    <h3>9:30 am a 20:00 Horas</h3>
    <h2>Domingo:</h2>
    <h3>Abrimos eventualemnte, publicando en nuestras redes sociales</h3>
    </div>
    </div>
    </div>

</>


)
}

export default Horario;