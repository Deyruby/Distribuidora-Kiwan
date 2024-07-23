import "../styles/home.css";
import "../styles/someviews.css";
import logo from "../../src/assets/logo.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";



const abarrotes = [{url: "https://alvicl.vtexassets.com/arquivos/ids/156041/Pasta-spaguetti-n%C2%B05.jpg?v=637866726412330000",price:"790", name:"Tallarines Parma 400gr"},{url: "https://alvicl.vtexassets.com/arquivos/ids/156041/Pasta-spaguetti-n%C2%B05.jpg?v=637866726412330000",price:"790", name:"Tallarines Parma 400gr"}, {url:"https://ekomali.cl/wp-content/uploads/2022/03/PT-823-Ianza-Azucar-copia.jpg", price:"1560", name:"Azucar Iansa 1kg"}, {url:"https://distribuidoraiman.cl/wp-content/uploads/2023/03/ARROZ-TUCAPEL-BLUE-BONNET-900GR.jpg",price:"1400", name:"Arroz Tucapel Grado 2"}, {url:"https://santaisabel.vtexassets.com/arquivos/ids/262305/Harina-de-Maiz-blanca-PAN-1-kg.jpg?v=638095551618300000", price:"1700", name:"Harina Pan 1Kg"}, {url:"https://dereyes.cl/wp-content/uploads/2023/03/De-Reyes_Vegetal-900-312-scaled.jpeg", price:"1780", name:"Aceite de Reyes"}, {url:"https://alvicl.vtexassets.com/arquivos/ids/158467/000000000000006553-UN-01.jpg?v=637872178459300000", price:"790", name:"Corbatas Parma 700gr"}]


const Abarrotes = () => {

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
              <h5 className="inicio">Volver al Inicio</h5>
            </Link>
            <h1>Abarrotes</h1>
<div className="cards d-flex">
  <div className="container-fluid">
    <div className="row">
{abarrotes.map((element, index)=>{
  return(
    <div className="col-12 col-md-4 col-lg-2 mb-4 mx-3" key={index}>
            <div className="card mt-4" style={{ width: "15rem"}}>
              <img 
              src={element.url} 
              className="card-img-top img-fluid h-10 
               " alt="Tallarines Parma" 
               style={{ height: "250px", objectFit: "contain" }}
               />
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">{`$${element.price}`}</h5>
                <p className="card-text text-danger fw-bold">
                {element.name}
                </p>
              </div>
            </div>
            </div >
            )})}
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abarrotes;
