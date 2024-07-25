import "../styles/someviews.css";
import { Link } from "react-router-dom";
import { abarrotes } from "../data";


const Abarrotes = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="main-content">
          <div className="tittle my-4 text-center">
            <Link to="/">
              <h5 className="inicio">Volver al Inicio</h5>
            </Link>
            <h1>Abarrotes</h1>
            <div className="cards d-flex">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  {abarrotes.map((element, index) => {
                    return (
                      <div
                        className="col-12 col-sm-12 col-md-4 col-lg-2 mb-4 mx-3"
                        key={index}
                      >
                        <div className="card pt-3" style={{height:"20rem" ,width: "15rem" }}>
                          <img
                            src={element.url}
                            className="card-img-top img-fluid h-10"
                            alt={element.name}
                            style={{height: "200px", objectFit: "contain" }}
                          />
                          <div className="card-body pt-0 ">
                            <h5 className="card-title mb-0 text-primary fw-bold">{`$${element.price}`}</h5>
                            <p className="card-text text-danger fw-bold my-0 mb-0">
                              {element.name}
                            </p>
                            <p className="card-text bg-warning text-danger my-0 " style= {{fontSize: "14px"}} >
                              {element.offer? element.offer : ""}  
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
