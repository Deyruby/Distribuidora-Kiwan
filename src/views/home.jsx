import '../styles/home.css'
import logo from '../../src/assets/logo.jpg'
import Navbar from '../components/Navbar'







const Home=()=>{

return(
<>
<div className='container-fluid'>
    <img src={logo} className='logo'/>
    <Navbar/>
    </div>
</>


)

}

export default Home;