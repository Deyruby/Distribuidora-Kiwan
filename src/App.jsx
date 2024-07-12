
import './App.css'
import logo from '../src/assets/logo.jpg'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
   <div className='container-fluid'>
    <img src={logo} className='logo'/>
    <Navbar/>
    </div>
    </>
  )
}

export default App
   